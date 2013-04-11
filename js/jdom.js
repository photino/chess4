/* "Manipulation for DOM", Date: 2013/04/10 
 * copyright by Zan Pan under GNU GPL3
*/

(function() {
var url = window.location.href;
var html = $('html').attr('id');
var host = url.replace(html + '.html', '');

$(document).ready(function() {
  
  $(this).on('click', 'a[href^="http"]', function() {
    if(!RegExp(host).test(this.href)) {
      window.open(this.href); 
      return false;
    }  
    return true;
  });
  
});

})();
