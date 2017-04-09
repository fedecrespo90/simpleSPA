var $ = require('jquery');

// $( document ).ready(function() {
//     $( function() {
//         $( "#sortable" ).sortable();
//         $( "#sortable" ).disableSelection();
//     } );
// });

/* * * LOAD VIEW * * */
$.get( "components/home/home.template.html", function ( data ) {
    $( "#view" ).html( data );
    $.get( "/api/products", function ( products ) {
        products.forEach( function (product) {
            var item = '<div class="col-lg-12 col-sm-12" id="' + product.id + '"><a class="portfolio-box">Edit</a><a class="portfolio-box">Remove</a><a href="assets/img/' + product.image + '" class="portfolio-box"><img src="assets/img/' + product.image + '" class="img-responsive" alt=""><div class="portfolio-box-caption"><div class="portfolio-box-caption-content"><div class="project-category text-faded">' + product.description + '</div><div class="project-name">' + product.name + '</div></div></div></a></div>';
            $("#home-content").append( item );
        });
    });

});
