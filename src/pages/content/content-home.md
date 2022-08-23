Welcome to our demo app, showcasing how to use [**Supabase**](https://supabase.com/) authentication with
[**Astro**](https://astro.build). We use **Supabase** is used for user sign-up and authentication, and Astro for
a mix of static site generation **(SSG)**, and server side rendering **(SSR)**. The app is deployed to
[**Vercel**](https://vercel.com).

### How it works.
You can log in or register at [/login](/login). If you do, you will get a magic link to your email, which you
can use to log in. This will set a cookie that is valid for an hour, and will give you access to the pages
below.

The **_about_** content is protected by Supabase authentication. If you go to any of the pages
below _**without**_ being logged in, you will be redirected to the login page. Try it out!

* [/about/astro](/about/astro)
* [/about/supabase](/about/supabase)
* [/about/vercel](/about/vercel)

### More.
If you enjoyed this demo, or want to learn more. Have a look at the source code or send me a DM on Twitter. Links below.
