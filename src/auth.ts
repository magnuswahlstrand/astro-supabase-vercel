import {createClient} from '@supabase/supabase-js'
import cookie from "cookie"

export const supabase = createClient(
    'https://yafsawyirvnluhxzcjzm.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhZnNhd3lpcnZubHVoeHpjanptIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA5MzIwNTIsImV4cCI6MTk3NjUwODA1Mn0.9UBeSmPl9zu8gA7ijDIi2X-nbf6PNv-Nfg7Rt14FQyk')

export async function getUser(req: Request) {
    const c = cookie.parse(req.headers.get('cookie') ?? "");
    if (!c.sbat) {
        console.log('aa', c)
        return null
    }

    const resp = await supabase.auth.api.getUser(c.sbat);
    if (!resp.user || resp.user.role !== "authenticated") {
        console.log('bb', resp)
        return null
    }
    console.log('cc', resp.user)
    return resp.user
}

export async function isLoggedIn(req: Request) {
    return await getUser(req) != null
}
