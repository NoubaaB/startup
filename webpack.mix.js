const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js(
    [
        "public/js/app.js",
        "public/js/owl.carousel.min.js",
        "public/js/stellar.js",
        "public/js/imagesloaded.pkgd.min.js",
        "public/js/isotope.pkgd.min.js",
        "public/js/wow.min.js",
        "public/js/stellarnav.min.js",
        "public/js/sweetalert.min.js",
        "public/js/contact-form.js",
        "public/js/jquery.sticky.js",
        "public/js/typeit.min.js",
        "public/js/main.js"
    ],
    "public/dist/js"
);
