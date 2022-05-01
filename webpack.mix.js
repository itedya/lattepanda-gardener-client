const mix = require('laravel-mix');
const tailwindcss = require("tailwindcss");

mix.ts('src/app.ts', 'dist/script.js')
    .vue({version: 3})
    .sass('src/sass/main.scss', 'dist/style.css')
    .options({
        postCss: [ tailwindcss('./tailwind.config.js') ],
    })
    .disableNotifications();
