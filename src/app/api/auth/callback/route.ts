import { api } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const data = {code, where: 'web'}
  const registerResponse = await api.post('/register',
    {code, where: 'web'},
  );
  const redirectTo = request.cookies.get('redirectTo')?.value
  const { token } = registerResponse.data;
  const redirectURL = new URL(redirectTo || '/', request.url);
  const cookieExpiresInSeconds = 60 * 60 * 24 * 30
  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds};`
    }
  })
}