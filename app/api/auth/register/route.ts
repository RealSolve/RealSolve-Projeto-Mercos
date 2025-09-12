import { type NextRequest, NextResponse } from "next/server"
import { register, encrypt } from "@/lib/auth"
import { cookies } from "next/headers"

export async function POST(request: NextRequest) {
  const { email, password, name } = await request.json()

  const user = await register(email, password, name)
  if (!user) {
    return NextResponse.json({ error: "Registration failed" }, { status: 400 })
  }

  // Create session
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000)
  const session = await encrypt({ user, expires })

  // Set cookie
  cookies().set("session", session, { expires, httpOnly: true })

  return NextResponse.json(user)
}
