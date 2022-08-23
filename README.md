# Astro-Supabase-Vercel

This repo contains an example app showcasing how to use [**Supabase**](https://supabase.com/) authentication with
[**Astro**](https://astro.build). We use **Supabase** is used for user sign-up and authentication, and Astro for
a mix of static site generation **(SSG)**, and server side rendering **(SSR)**. The app is deployed to
[**Vercel**](https://vercel.com).

### Demo

Check out the demo
at: [astro-supabase-vercel-git-main-magnuswahlstrand.vercel.app](https://astro-supabase-vercel-git-main-magnuswahlstrand.vercel.app/)
.

### Limitations

* To improve security, the cookies for this app should be **Secure** and **HttpOnly** cookies.
* We don't handle automatic renewal of JWTs.
* Error handling is minimal

# Development log

### Todo

* [ ] Proper error handling for expired JWTs
* [ ] Fix Secure and HttpOnly cookies

#### Done

* [x] Add social media preview
* [x] Add tailwind
* [x] Build login screen
* [x] Build register screen
* [x] Add spinner for link
* [x] Remove Supabase key from code
* [x] Fix redirects after logout
* [x] Add outline to README
* [x] Common auth part for all sub pages
* [x] Remove console.log()
* [x] Clean up code
* [x] Redirect after sign in
* [x] Add 2 paragraphs of text per about page
* [x] **Minor**
    * [x] Fix margin bottom
    * [x] Remove content on 2nd paragraph
    * [x] Fix page titles

### Notes and questions

* Can we set server side cookie AND redirect? - Yes
* https://docs.astro.build/en/guides/server-side-rendering/#astrorequestheaders
* ```npm install @astrojs/vercel```
* **Problems**
  *`<MyAuth client:only="react">`
