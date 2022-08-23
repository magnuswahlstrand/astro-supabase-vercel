
### Supabase.

[Supabase](https://https://supabase.com/) is branded as open source alternative to Googles Firebase. Out of the box, you get a Postgres DB, blob storage and authentication for your project. They also have an API for real time streaming between users and to a user from the database.

In this demo, we only use Supabase for user sign up and user sign in. Users can visit [/login](/login) and enter their email, and get magic link that allows them to sign in. 

Whenever the user visits a protected site (under /about/), the server verifies that the correct cookie is set and uses the Supabase API to verify that the token is still valid. If not the user is redirected to [/login](/login). Server side code looks something like this:

```javascript
const user = await getUser(Astro.request);

if (!user) {
    return Astro.redirect('/login');
}
```
