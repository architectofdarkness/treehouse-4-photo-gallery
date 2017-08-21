//function search() {
//
//  var input;
//  var ul;
//  var li;
//  var a;
//  var caption;
//
//  input = $('#input').html();
//  gallery = $('.gallery').get(0);
//  items = $('li').get();
//
//  for (i = 0; i < items.length; i++) {
//          a = items[i].getElementsByTagName("a")[0].attr('data-title');
//          if (caption.indexOf(input) > -1) {
//              items[i].style.display = "";
//          } else {
//              items[i].style.display = "none";
//          }
//  }
//}

function search() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('input');
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName("gallery")[0];
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.getAttribute('data-title').toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}