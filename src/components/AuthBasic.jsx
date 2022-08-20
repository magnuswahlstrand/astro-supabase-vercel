import {Auth, Button, Typography} from '@supabase/ui'
import {createClient} from '@supabase/supabase-js'

const supabase = createClient(
    'https://yafsawyirvnluhxzcjzm.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhZnNhd3lpcnZubHVoeHpjanptIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA5MzIwNTIsImV4cCI6MTk3NjUwODA1Mn0.9UBeSmPl9zu8gA7ijDIi2X-nbf6PNv-Nfg7Rt14FQyk')



const Container = (props) => {
    const { user } = Auth.useUser()
    if (user)
        return (
            <>
                <Typography.Text>Signed in: {user.email}</Typography.Text>
                <Button block onClick={() => props.supabaseClient.auth.signOut()}>
                    Sign out
                </Button>
            </>
        )
    return props.children
}

export default function AuthBasic() {
    return (
        <Auth.UserContextProvider supabaseClient={supabase}>
            <Container supabaseClient={supabase}>
                <Auth supabaseClient={supabase} providers={['google', 'facebook', 'github']} />
            </Container>
        </Auth.UserContextProvider>
    )
}
