<!DOCTYPE html>
<html>
<head>
<script src="https://code.jquery.com/jquery-1.9.1.js"></script>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <nav>
    <ul>
      <li><a id = "hide" href = "https://translate.google.ro">mergi la Google!</a></li>
      <li><a id = "show" href = "https://www.codecademy.com/learn">mergi la codecademy!</a></li>
      <li><a href = "https://www.codecademy.com/learn">mergi la codecademy!</a></li>
    </ul>
  </nav>
  <div id = "output"></div>
  <br><br>
  <button id = "myButton" class = "btn primary">Click here</button>
   <button id = "myButton2" class = "btn warning">Click and here</button>
  <div class = "row">
    <a href = "https://www.google.com">go to google</a>
  </div>
  <ul id = "destinations">
    <li>First</li>
      <ul>
        <li>primul</li>
        <li>al doilea</li>          
      </ul>
    <li>Second</li>
    <li>Third</li>
    <li>Forth</li>
  </ul>
    <p class = "yellow red">some text</p>
    <p class = "yellow">another text</p>
    <p class = "yellow red">this is just some more text</p>
    <img src = "https://i1061.photobucket.com/albums/t480/ericqweinstein/puppy-4_zps63ff5aa8.jpg" />
    <br/><br/>
    <input id = "myInput" type = "text" >
    <input id = "checkbx" type = "checkbox" >
    <div id = "arrayme">output to array</div>
    <iframe src= "iframe.html" width = "400" height="300" id="myFrame"></iframe>  
                
    <script>
     
      // VAR 1 MAI JOS in jQuery
    /* $(document).ready(function(){ // $ sign imi da acces la element
        $("*").click(function(){alert("Hello!");});
      }); */
 
      // VAR 2 MAI JOS in JavaScript
      /*var myButton = document.getElementById("myButton2"); //asta imi da acces la elementul meu HTML 
      myButton.addEventListener("click", function(){
        prompt("Esti asa fumoasa!");
      }); */      
            
    /*  $(document).ready(function(){                                                            $("a[href*='google.com']").click(function(){console.log(this);});
         
         $(".btn").on({
          "click": wasClicked,
          "mouseover": wasClicked
         }); 
                                   
         function wasClicked(event){
           console.log(event);
         }                          
      });   */
        
      $(document).ready(function(){  
       // $("nav a[href^="'+location.pathname.split('/')[1])+'"] ").addClass('active');
        console.log(location.pathname.split('/')[1]);   
            
    </script>
    
</body>
</html>