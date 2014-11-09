$(document).ready(function() {

var imgTags = $('li');
for(var i = 0; i < imgTags.length; i++) {
imgTags[i].addEventListener('click', function (event) {
$(this).prependTo('#newUl');
      $(this).find('img').animate({'width': '100%', 'height': '100%'}, 150);
    });
  }
});

