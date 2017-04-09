var $ = require('jquery');

/* * * GET GENERAL CONFIG * * */
$.get( "/api/config", function( data ) {
    /* * * ROUTES * * */
    switch (window.location.href) {
        case data.baseUrl.dev:
            require('./components/home/home.controller');
            break;
        case data.baseUrl.dev + 'add':
            require('./components/add/add.controller');
            break;
        case data.baseUrl.dev + 'edit':
            require('./components/edit/edit.controller');
            break;
        case data.baseUrl.dev + 'delete':
            require('./components/delete/delete.controller');
            break;
    }
});
