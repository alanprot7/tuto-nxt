import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {

    const requestHeaders = new Headers(request.headers)
    const headerList = headers()

    cookies().set('token', '135dsfa')
    const theme = request.cookies.get('theme')

    //2x formas de pegar os headers de uma requisição http

    console.log(requestHeaders.get('Authorization'))
    console.log(headerList.get('Authorization'))
    console.log(theme)
    console.log(cookies().get('token'))

    // Retornando response com headers
    return new Response('<h1>Profile API</h1>', {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    })
}