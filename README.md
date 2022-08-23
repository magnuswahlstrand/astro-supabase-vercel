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



### Todo

* [ ] Proper error handling for expired JWTs
* [ ] Common auth part for all sub pages
* [ ] Add outline to README
* [ ] Clean up code
* [ ] Remove console.log()
* [ ] Fix Secure and HttpOnly cookies
* [ ] **Minor**

#### Done

* [x] Add tailwind
* [x] Build login screen
* [x] Build register screen
* [x] Add spinner for link
* [x] Remove Supabase key from code
* [x] Fix redirects after logout
* [x] **Minor**
  * [x] Fix margin bottom
  * [x] Remove content on 2nd paragraph


### Questions
Set cookie AND redirect?
