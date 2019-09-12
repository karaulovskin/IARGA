function requireAll(r) {
    r.keys().forEach(r);
}

requireAll(require.context('./icons', true, /\.svg$/));

// Load plugins
import 'jquery'
import IMask from 'imask'

import svg4everybody from 'svg4everybody'
window.svg4everybody = svg4everybody;

import objectFitImages from 'object-fit-images'
window.objectFitImages = objectFitImages;

import imagesLoaded from 'imagesloaded'
window.imagesLoaded = imagesLoaded;

// load modules
import Forms from'./js/forms/forms'
import Utils from'./js/utils/utils'
import SvgUse from'./js/svgUse'
import MobileMenu from'./js/mobile-menu'

// Load styles
import './styles/app.js';

// Run components

window.App = {
    debug: false,
    lang: 'ru'
};

if (window.SITE_LANG) {
    App.lang = window.SITE_LANG;
}

if (App.debug) {
    console.log('Debug: ' + App.debug);
    console.log('Lang: ' + App.lang);
}

document.addEventListener('DOMContentLoaded', function() {
    objectFitImages();

    App.Forms = new Forms();
    App.Utils = new Utils();
    App.SvgUse = new SvgUse();
    App.MobileMenu = new MobileMenu();


    $('.inputmask').each(function () {
        IMask($(this)[0], {mask: "+{7} (000) 000-0000"});
    });

    // prevent copying

    $('.no-select').on('selectstart', false);

    $(".no-select img").on('mousedown', false);
});