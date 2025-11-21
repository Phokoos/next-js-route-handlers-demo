import {cookies, headers} from "next/headers";

export async function GET(request) {
    // const requestHeaders = await new Headers(request.headers);
    // console.log(requestHeaders.get('Authorization'));
    //
    // const headerList = await headers();
    // console.log(headerList.get('Authorization'));
    //
    //
    // const theme = request.cookies.get('theme') || 'light';
    // console.log(theme);


    const cookieStore = await cookies();
    // cookieStore.set('perPage', '5');
    // cookieStore.delete('perPage')
    // cookieStore.delete('theme')

    return new Response('<h1>Hello, this is the profile API route!</h1>', {
        headers: {
            'Content-Type': 'text/html'
        },
    });
}