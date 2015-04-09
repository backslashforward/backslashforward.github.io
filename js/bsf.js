$(function(){
    // var grid = document.querySelector('#grid');
    // var msnry = new Masonry( grid, {
    //   // options
    //   itemSelector: '.item'
    // });

    new AnimOnScroll( document.getElementById( 'grid' ), {
        minDuration : 0.4,
        maxDuration : 0.7,
        viewportFactor : 0.2
    } );
});