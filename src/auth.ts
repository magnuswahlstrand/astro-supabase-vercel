import {createClient} from '@supabase/supabase-js'
import cookie from "cookie"

export const supabase = createClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_KEY,
)

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
