import {createClient} from '@supabase/supabase-js'

export const supabase = createClient(
    'https://yafsawyirvnluhxzcjzm.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhZnNhd3lpcnZubHVoeHpjanptIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA5MzIwNTIsImV4cCI6MTk3NjUwODA1Mn0.9UBeSmPl9zu8gA7ijDIi2X-nbf6PNv-Nfg7Rt14FQyk')

const regex = /sb=(\w*\.\w*\.\w*)/g;

export async function isLoggedIn(req: Request) {
    const cookie = req.headers.get('cookie');
    const m = regex.exec(cookie ?? "")
    if (!m || m.length <= 1) {
        return false
    }
    const token = m[1];
    console.log(token);
    const resp = await supabase.auth.api.getUser(token);
    console.log(resp)
    console.log(resp.user)
    if (!resp.user || resp.user.role !== "authenticated") {
        return false
    }
    console.log("logged in as ", resp.user.email)
    // console.log(cookie);
    return true
}
