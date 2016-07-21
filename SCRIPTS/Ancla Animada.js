

function desplazo(){
  $('html, body').animate({
    scrollTop: $("#cuerpo").offset().top-45
  }, 1000);
}



function desplazo(bar){
  $('html, body').animate({
    scrollTop: $(bar).offset().top-45
  }, 1000);
}

<div id="cuerpo"></div>

<a href="" onclick="desplazo('cuerpo');">IR al Cuerpo</a>