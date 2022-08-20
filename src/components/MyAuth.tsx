import {supabase} from "../auth";
import React, {useEffect} from 'react';
import type {AuthChangeEvent, Session} from "@supabase/supabase-js";


// From https://blog.bitsrc.io/setting-up-server-side-auth-with-supabase-and-nextjs-15cbe98956a9
// function MyApp({Component, pageProps}: AppPropsWithLayout) {
export function MyAuth() {
    useEffect(() => {
        supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
            console.log(event, session)
            console.log("SENDING")
            console.log(JSON.stringify({event, session}));
            fetch("/api/auth", {
                method: "POST",
                headers: new Headers({"Content-Type": "application/json"}),
                credentials: "same-origin",
                body: JSON.stringify({event, session}),
            }).then((resp) => (
                console.log("fetch resp", resp)
            ))
        })
        console.log('all setup')
    }, [])


    console.log('current URL 👉️', window.location.hash.substring(1));

// supabase.auth.onAuthStateChange((event, session) => {
//     fetch("/api/auth", {
//         method: "POST",
//         headers: new Headers({"Content-Type": "application/json"}),
//         credentials: "same-origin",
//         body: JSON.stringify({event, session}),
//     });
//     return (
//         // <Component {...pageProps} />
//         <div> Waiting for something </div>
//         // <Component {...pageProps} />
//     )
// })
    const info = window.location.hash.substring(1).split("&").map(kv => kv.split("="))

    console.log(info)

    return <div>{info.map(i =>
        <div>{i[0]} + {i[1]}</div>
    )}HEJ</div>;
}
