import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {

    const requestHeaders = new Headers(request.headers)
    const headerList = headers()

    //2x formas de pegar os headers de uma requisição http

    console.log(requestHeaders.get('Authorization'))
    console.log(headerList.get('Authorization'))

    // Retornando response com headers
    return new Response('<h1>Profile API</h1>', {
        headers: {
            "Content-Type": "text/html"
        }
    })
}