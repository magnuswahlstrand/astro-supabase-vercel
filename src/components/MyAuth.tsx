import {supabase} from "../auth";
import React, {useEffect} from 'react';
import type {AuthChangeEvent, Session} from "@supabase/supabase-js";


function getSessionFromURL() {
    console.log('getSessionFromURL');
    const info = window.location.hash.substring(1).split("&").map(kv => kv.split("="))
    console.log(info)
    return false;
}

// From https://blog.bitsrc.io/setting-up-server-side-auth-with-supabase-and-nextjs-15cbe98956a9
// function MyApp({Component, pageProps}: AppPropsWithLayout) {
export function MyAuth() {
    useEffect(() => {
        const session = getSessionFromURL()
        const fetchData = async () => {
            const data = await fetch("/api/auth", {
                method: "POST",
                headers: new Headers({"Content-Type": "application/json"}),
                credentials: "same-origin",
                body: JSON.stringify(session),
            })
        }

        // call the function
        // fetchData().then(res => {
        //
        // }).catch(err => {
        //
        // })
    }, [])

    // useEffect(() => {
    //     supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
    //         console.log(event, session)
    //         console.log("SENDING")
    //         console.log(JSON.stringify({event, session}));
    //         fetch("/api/auth", {
    //             method: "POST",
    //             headers: new Headers({"Content-Type": "application/json"}),
    //             credentials: "same-origin",
    //             body: JSON.stringify({event, session}),
    //         }).then((resp) => (
    //             console.log("fetch resp", resp)
    //         ))
    //     })
    //     console.log('all setup')
    // }, [])


    return <div>oh no2</div>
}
