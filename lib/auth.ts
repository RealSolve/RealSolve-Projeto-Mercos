import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"

const secretKey = process.env.JWT_SECRET || "your-secret-key-here"
const key = new TextEncoder().encode(secretKey)

export interface User {
  id: string
  email: string
  name: string
}

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(key)
}

export async function decrypt(input: string): Promise<any> {
  if (!input || input.trim() === "") {
    return null
  }

  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    })
    return payload
  } catch (error) {
    console.log("[v0] JWT verification failed:", error)
    return null
  }
}

export async function login(email: string, password: string): Promise<User | null> {
  // Simulação de verificação de usuário - em produção, verificar no banco de dados
  const users = [
    { id: "1", email: "admin@mercos.com", password: "admin123", name: "Admin Mercos" },
    { id: "2", email: "user@mercos.com", password: "user123", name: "Usuário Teste" },
  ]

  const user = users.find((u) => u.email === email && u.password === password)
  if (!user) return null

  return { id: user.id, email: user.email, name: user.name }
}

export async function register(email: string, password: string, name: string): Promise<User | null> {
  // Simulação de registro - em produção, salvar no banco de dados
  const newUser = {
    id: Date.now().toString(),
    email,
    name,
  }

  return newUser
}

export async function getSession() {
  const session = cookies().get("session")?.value
  if (!session) return null

  try {
    return await decrypt(session)
  } catch (error) {
    console.log("[v0] Session decryption failed:", error)
    return null
  }
}

export async function logout() {
  cookies().set("session", "", { expires: new Date(0) })
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value
  if (!session) return

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session)
  parsed.expires = new Date(Date.now() + 24 * 60 * 60 * 1000)
  const res = NextResponse.next()
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  })
  return res
}
