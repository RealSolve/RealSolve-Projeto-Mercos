import { type NextRequest, NextResponse } from "next/server"
import { login, encrypt } from "@/lib/auth"
import { cookies } from "next/headers"

export async function POST(request: NextRequest) {
  const { email, password } = await request.json()

  const user = await login(email, password)
  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  }

  // Create session
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000)
  const session = await encrypt({ user, expires })

  // Set cookie
  cookies().set("session", session, { expires, httpOnly: true })

  return NextResponse.json(user)
}
