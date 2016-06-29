$(document).ready(function(){ 

  $("a").click(function(t){
    t.preventDefault();
    //$("#output").html($(this).attr("href"));   // afiseaza si in div-ul output (din pagina mea html) url-ul
    console.log($(this).attr("href"));         // afiseaza in consola href-ul, calea url-ul 
    $("#output").load($(this).attr("href"));

  });

});