$('body').prepend('<div></div>');
$('div').addClass('container');
$('.container').prepend('<div></div>', '<div></div>', '<div></div>');
$('.container div').addClass('row');
$('.row:first-child').prepend('<div></div>', '<div></div>', '<div></div>');
$('.row:nth-child(2)').prepend('<div></div>', '<div></div>');
$('.row:last-child').prepend('<div></div>', '<div></div>', '<div></div>');
$('.row:first-child div').addClass('col-sm-4');
$('.row:first-child div:first-child').attr('id', 'aaa').append('<p>Jeden</p>');
$('.row:first-child div:nth-child(2)').attr('id', 'bbb').append('<p>Dwa</p>');
$('.row:first-child div:last-child').attr('id', 'ccc').append('<p>Trzy</p>');
$('.row:nth-child(2) div').addClass('col-xs-6').attr('style', 'color: red');
$('.row:nth-child(2) div:first-child').append('<p>Cztery</p>');
$('.row:nth-child(2) div:last-child').append('<p>Piec</p>');
$('.row:last-child div').addClass('col-md-3');
$('.row:last-child div:first-child').attr('data-product', '300').append('<p>Szesc</p>');
$('.row:last-child div:nth-child(2)').attr('data-product', '400').append('<p>Siedem</p>');
$('.row:last-child div:last-child').attr('data-product', '500').append('<p>Osiem</p>');
$('p').addClass('description');









// <div class="container">
//  <div class="row">
//      <div class="col-sm-4" id="aaa"><p class="description">Jeden</p></div>
//      <div class="col-sm-4" id="ccc"><p class="description">Dwa</p></div>
//      <div class="col-sm-4" id="ooo"><p class="description">Trzy</p></div>
//  </div>
//  <div class="row">
//      <div class="col-xs-6" style="color: red;"><p class="description">Cztery</p></div>
//      <div class="col-xs-6" style="color: red;"><p class="description">Piec</p></div>
//  </div>
//  <div class="row">
//      <div class="col-md-3" data-product="300"><p class="description">Szesc</p></div>
//      <div class="col-md-3" data-product="400"><p class="description">Siedem</p></div>
//      <div class="col-md-3" data-product="500"><p class="description">Osiem</p></div>
//  </div>
// </div>