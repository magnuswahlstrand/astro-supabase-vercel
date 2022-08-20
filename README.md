# Astro-Supabase-Vercel

An example app with Astro, Supabase and Vercel.

## Development
```sh
npm install @astrojs/vercel
```


https://docs.astro.build/en/guides/server-side-rendering/#astrorequestheaders
```js
import { isLoggedIn } from '../utils';

const cookie = Astro.request.headers.get('cookie');

// If the user is not logged in, redirect them to the login page
if (!isLoggedIn(cookie)) {
  return Astro.redirect('/login');
}
---
<html>
  <!-- Page here... -->
</html>
```


#### Problems

`<MyAuth client:only="react">`
