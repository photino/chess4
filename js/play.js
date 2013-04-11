/* "Four-player Chess", Date: 2013/01/20
 * copyright by Zan Pan under GNU GPL3 
*/ 

$(document).ready(function() {
  var $_g, x, y, pos, player; 
  var offset =$('#chessBoard').offset();
  var counter = 0;
  
  $('#setPieces g[transform]').click(function(e) {
    counter++
    $(this).css('cursor', 'wait');
    if(counter % 2 == 0) {
      place(e.pageX, e.pageY); 
      $(this).remove();
    }
    $_g = $(this);
    player = $_g.parent().attr('class');
    $('h2').css('color', player);
  });
  
  $('#chessBoard').click(function(e) {
    if(counter % 2) {
      counter++
      place(e.pageX, e.pageY); 
    }
  });
  
  function place(px, py) {
    x = 45 * Math.floor((px - offset.left) / 45.0);
    y = 45 * Math.floor((py - offset.top) / 45.0);
    pos = x.toString() + ',' + y.toString();
    $_g.attr('transform', 'translate(' + pos + ')'); 
    $_g.css('cursor', 'pointer');
  }
 
});
