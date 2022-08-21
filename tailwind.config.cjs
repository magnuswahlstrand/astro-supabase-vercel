/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                'outfit': ["'Outfit'", 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
}
