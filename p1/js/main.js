/* exercitiu facut de mine
setTimeout(function(){
  $("li").eq(3).css({"background": "grey", "color": "white", "padding": "5px 10px"});
}, 2000);

  $("ul").css("list-style", "none");

var index = 0;
var maxElements = 6;

setInterval(function(){
  $("li").eq(index).css("padding", "5px 30px");
    
  if (index < maxElements - 1) {
    index++;
  } else {
    index = 0;
  }
  
}, 3000); 

//la interval de 5 sec. aplica paddingul la fiecare li

$("li:nth-child(1)").css("border", "2px solid green");
$("li").eq(1).css("border", "2px solid red");
$("#destinations").children("li").css("font-weight", "bold"); 

*/


$(document).ready(function(){ 
   $("a").on("mouseover", function(){
      $(this).addClass("active");
    });
    
   $("a").on("mouseout", function(){
      $(this).removeClass("active");
    });
   
/*   un expl. fain de folosire hover 
$("a").hover(function(){
         $(this).css("background", "#6699ff");
     
   },
   function(){
        $(this).css("background", "#99ff99");
        
   }); 
*/ 
      
/*   $("p").click(function(){  
     console.log($(this));
     console.log($(this).css("background-color"));
     console.log($(this)[0].className);
     $(this).css({"font-size":"24px", "color": "green"});  */
     
     /*
     console.log($(this).hasClass("yellow"));
     if($(this).hasClass("yellow")){
       console.log('do somenthing its yellow');
     } else {
       console.log('do something its blank');
     }     
    $(this).toggleClass("yellow");
     */    
         
      
/*   $("img").click(function(){
     console.log($(this).attr("src"));
     console.log($("a").last().attr("href"));   
   });
*/   
   
   $("#myInput").change(function(){
     console.log($(this).val());
     //console.log($("#checkbx"));
         
     if ($(this).val() === "ioana" || $(this).val() ==="yes" ) {       
       $("#checkbx").prop("checked", true);
     } else {
       $("#checkbx").prop("checked", false);
     }      
     console.log($("#checkbx").is(":checked"));     
   });
   
   $("p").click(function(){  
     //console.log($(this).text());
    // $(this).text("Hello<BR>world");
     //$(this).replaceWith("Hello<BR>world");
     //$(this).empty();            //il face pe p sa dispara
     //$(this).before('before the click');
     //$(this).after('after the click');
   // $(this).append('appended the click');
    //$(this).appendTo('#output');
     //$(this).prepend('prepend the click');
   });
  
 // console.log($("#myFrame").contents());
  //$("#myFrame").contents().find("div").css("background-color", "red");    ??????
    $("#arrayme").click(function(){  
     console.log($("#destinations").children().toArray());
   });
  
 //PT. A PREVENI TRANSMITEREA LA SITE-URI CAND APESI PE a!!! 
  
/*$("a").click(function(event){
     event.preventDefault();
     $("#arrayme").html("the link you clicked was going to " + $(this).attr("href"));
   }); 
  
 // am pus preventDefault CA SA FUNCTIONEZE CE E MAI JOS: 
  
   $("#show").click(function(){
     $(".btn").show(1000);
   });
  
   $("#hide").click(function(){
     $(".btn").hide(1000);
  });  
*/
  
  $(".testing").click(function(){
     //console.log($(this).siblings());
     $(this).children().animate({ // se putea folosi si find("li"), da nu children???
       opacity: 0.55,
       left: "+=150 ",
       //height: "toggle",
       width: "150%",
       fontSize: "24px"
       }, 1000, function(){
          $(this).parent().css({"background-color":"#000000", "color":"#ffffff"});    // tre children?? sau find li? sau parent? de ce aici merge parent?
          $(this).animate({left: "-=150"});
     });
   });  
 
   
  $(".slideEffect").click(function(){
    $(this).children().slideToggle("slow", function(){
      $(this).parent().css({"background-color":"#000000", "color":"#ffffff"});
    });
      //?????
    
  });
  

  $("#show").click(function(e){
    e.preventDefault();
    $(".btn").fadeIn(1000);
  });
  
  $("#hide").click(function(e){
    e.preventDefault();
    $(".btn").fadeTo(1000, 0.4);   // sau fadeOut()
  });  
 
  $("#btnContent").click(function(){
    $("#output").load("http://localhost/projects/p1/iFrame/iframe.html"); //specify where I wanna output that content, in divul output
    //e calea direct din fisierul local, pe serverul meu/daca deschideam iframe.html cu dublu click nu ar fi mers..tre sa scriu in Chrome http://localhost/...  
  });

  $("#btnjson").click(function(){   // f important, functie si 2 callbackuri
     
     $.getJSON("http://localhost/projects/p1/json/tempdata.json", function(data){  //a luat contentul din json si mi l-a dat ca parametru (un array)
      //console.log(data);                                                        // prin data mi l-a pasat deja ARRAY, altfel toate metodele gen getJSON iau contentul sub forma de text !!!!!

      $("#output").text('');   //clear that output, clear content, pastreaza tot divul mare output dar fara continut in el
     $.each(data, function(key,val){ //data- to return data objects,to bring that out into key, value; each goes through every single object whitin the data; LOOP through it
          $('#output').append("<div class='post'>"+val.name+"<BR>"+val.age+"<BR>"+"</div>");        // construim cu append in loc sa fac in HTML; we output the objects into the HTML
                    //construieste div-uri mici cu clasa post pt. fiecare obiect din JSON, rezulta 4 divuri in divul mare output
      });

      $(".post:even").css("background-color", "#bbbbbb"); //stilizare pt. fiecare div in parte 
      $(".post:odd").css("background-color", "#dedede");
    });  
    });
     

  $("#btnpostajax").click(function(){ 
      $("#output").html('sending...'); 
      /*
      $.post("http://localhost/projects/p1/json/tempdata.json", {name:"Mike", age:34})     // de ce nu functioneaza la json doar la PHP ca in video?
      .done(function(data){
        console.log(data);
      });


      $.ajax({
        method: "POST",                                                 //method (default: 'GET'). The HTTP method to use for the request (e.g. "POST", "GET", "PUT").
        url: "http://localhost/projects/p1/json/tempdata.json",         //url (default: The current page). A string containing the URL to which the request is sent.
        data: {name:"John", age: 50}                              //data to be sent to the server
      })
      .done(function(data){
          console.log(data);  
          $("#output").html(data);    //??? de ce data fara ghilimele, variabila salvata ca parametru, contine date!!! acel array, de fapt obiect
      });
      */  

      $.ajax({
        /*
        url: "http://localhost/projects/p1/json/tempdata.json",
        dataType: "script",     // chiar daca scriu text, chiar daca scriu script, tot imi afiseaza exact forma din JSON ??????????
        success: function(data){
          console.log(data);
          $("#output").html(data);    //super
        }
        */


        url: "http://localhost/projects/p1/json/tempdata.json",
        dataType: "text",     // serverul trimite datele sub forma de text(specificata)
        success: function(data){
         
          var json = $.parseJSON(data);      // allows to put that content in JSON format, folosim parseJSON pt ca sa-mi intoarca obiect, deoarece il aveam text(dat de dataType: "text") 
          console.log(json);
          $.each(json, function(key,val){    // in loc de data ca mai sus la each am pus json ??? why?
          $('#output').append("<div class='post'>"+val.name+"<BR>"+val.age+"<BR>"+"</div>");        // asta functioneaza exact ca si eachul de mai sus !!!
          });
          }
        });
     




  });
      


    
    
});



