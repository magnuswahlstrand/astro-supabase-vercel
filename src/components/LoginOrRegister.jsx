import {createClient} from '@supabase/supabase-js'
import {useState} from 'react'

const supabase = createClient(
    'https://yafsawyirvnluhxzcjzm.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhZnNhd3lpcnZubHVoeHpjanptIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA5MzIwNTIsImV4cCI6MTk3NjUwODA1Mn0.9UBeSmPl9zu8gA7ijDIi2X-nbf6PNv-Nfg7Rt14FQyk')

export default function Login() {
    const [email, setEmail] = useState('')

    const [status, setStatus] = useState({error: '', success: false})

    const handleSendLink = async () => {
        console.log('Login in...')
        setStatus({error: '', success: false})
        // TODO base redirect on env var

        const result = await supabase.auth.signIn(
            {email: email},
            {redirectTo: 'https://astro-supabase-vercel-git-main-magnuswahlstrand.vercel.app/magic-link',}
        )
        console.log(result)
        if (result?.error?.message) {
            setStatus(() => ({
                error: result.error.message,
                success: false
            }))
        } else {
            setStatus({error: '', success: true})
        }
    }

    return (
        <div className="w-full">
            <div className="pb-2">
                To log in, or register. Use the form below to get a magic link to your email.
            </div>
            <div>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" type="text" placeholder="Email" value={email}
                    onChange={(v) => setEmail(v.target.value)}/>
                {status.error ? <div className="text-sm text-red-400">{status.error}</div> : null}
                {status.success ? <div className="text-sm text-green-600">An email should arrive in your inbox
                    shortly </div> : null}

            </div>
            <div className="pt-3">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    type="button"
                    onClick={handleSendLink}
                >
                    Send magic link to your email!
                </button>
            </div>
        </div>)
}
