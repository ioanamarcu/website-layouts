
$(document).ready(function() {


	var addItem = function() {   // ne folosim de functie pt. a nu avea cod repetitiv 

		var toAdd = $("#message").val();
		var TaskTemplate = '<div class="task">'+
					'<div class="task-checkbox">'+
						'<div class="custom-checkbox">'+
							'<input type="checkbox"/>'+
						'</div>'+
					'</div>'+
					'<div class="task-description">'+  
						'<p>'+toAdd+'</p>'+
					'</div>'+
					'<div class="task-time">'+
						'<span class="current-hour">7:00 AM</span>'+       // mai tre lasat aici ora intre spanuri???
					'</div>'+
				'</div>';
		if ($("input").val() !== '') {			// ca sa nu adauge div-uri goale, fara task
			$(".list").append(TaskTemplate);
			//$(".no-task-message").hide();  		// se face display:none la div-ul cu mesajul sau
			$(".no-task-message").addClass("invisible");

	    }

		$("input").val('');

		updateTasksCounter();		// repetare cod ??? nu
		$(".current-hour").html(calcul());
	};

	$(".button").on("click", addItem);            // 1 mod de a ne ajuta de fct. addItem

	$("#message").on( "keydown", function(event) {
	//	console.log(event.which);
		if (event.which === 13) {				
			addItem();						// alt mod de a ne ajuta de fct. addItem, diferit pt. ca influenteaza forma lui ON 	
		}
	});

/*
	$(document).on("click", ".item", function(){     //o forma de a scrie ON, OK de folosit in practica
		$(this).remove();
	});
*/

	$(".add-task").on({          /* o alta forma de a scrie on, NU PREA OK DE FOLOSIT*/ 
		"click": function() { 
			$(".new-task").slideToggle(); 
		}
	});

	$("input").focus(function(){
		$(this).css('outline-color', 'orange');   // cod in plus
	}); 


/*	pt atunci cand avem checkbox si verificam daca e checked

	$('.app-content').on("click", "input", function(){  //facem asa pt. ca nu avem de la inceput inputuri adaugate, le adaugam ulterior
		
		if ($(this).is(':checked')) {
		//	$(".task .task-checkbox").css("background-color", "#FB6C6D");  !!!  nu merge pe input
			$(this).parent().parent().addClass("active");
		} else {
			$(this).parent().parent().removeClass("active");
		}
	});
*/

/*deci daca dai click de mai multe ori nu se intampla nimic, ramane rosu
Trebuie sa fac toggle pe clasa. Adica daca dau un clic, sa vada daca o are, si daca nu are clasa pusa sa o puna. 
Apoi daca mai dau un click si vede ca are clasa pusa, sa o scoata. 
Si asa mai departe.
*/

/* varianta mea daca as fi introdus o noua clasa .done pt. a taia taskul
	$(".app-content").on("click", ".custom-checkbox", function(){
		$(this).toggleClass("checked");
		$(this).parent().siblings().children("p").toggleClass("done");
	});
*/


	$('.app-content').on("click", ".custom-checkbox", function(){
		$(this).toggleClass("checked"); 								//cum verific daca e aplicata clasa ckecked ???
		$(this).parent().parent().toggleClass("active");
	
// $(this).parent().siblings().children("p").toggleClass("active"); in loc de linia de sus, in cazul in care in CSS aveam doar clasa .active{..},
// fara stilizarea p-ului in functie de parinte (.task.active .task-description p{..}), aveam cod in plus !!
// pun clasa .active in CSS si NU in HTML pt. a fi dinamic, deoarece aplicatia mea nu are nici un task initial, in mod normal !!!

//	console.log($(".checked").length);    asa verific cate elemente HTML sunt bifate, cate au clasa .checked 

		if ($(".checked").length !== 0) {    // verificare cate elemente au clasa cutare ???
			$(".remove-task").show();
		} else {
			$(".remove-task").hide();   
		}

	});

	$(".remove-task").on("click", function(){
		$(".task.active").remove();
		$(".remove-task").hide();  		// repetare cod ???
		updateTasksCounter();


	});

	updateTasksCounter();   

	$("#month-name").html(displayMonthName());  // ???
	$("#day-name").html(displayDay());
	
//	$(".current-hour").html(calcul());      // aici cred ca trebe sters, nu are ce ora afisa la refresh

	setInterval("calcul()", 1000 * 60 * 1);			// de ce nu se actualizeaza in timp real ???

});    // aici se inchide document.ready !!!



function displayMonthName() {
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
    var today = new Date();
    var monthNumber = today.getMonth();
    var currentMonthName = months[monthNumber]; 
 // document.getElementById("month-name").innerHTML = currentMonthName;   sau asa cu JS si apelare la final displayMonthName(); 
 	return currentMonthName;
}

function displayDay(){
	var weekDays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var today = new Date();
	var dayNumberOfTheWeek = today.getDay();
	var currentDayName = weekDays[dayNumberOfTheWeek];

	var dayNumber = today.getDate();
//	var getDayNumber = dayNumber + "th";
	return currentDayName + ", " + getDaySuffix(dayNumber);

	function getDaySuffix(num){
	    var array = "" + ("" + num).split("").reverse(); // E.g. 123 = array("3","2","1") 
	    // folosim stringul nul 
	    if (array[1] != "1") { // Number is in the teens
	        switch (array[0]) {
	            case "1": return num + "st";
	            case "2": return num + "nd";
	            case "3": return num + "rd";
       		}
    	}

   		return num + "th";
	}
}

function displayCounter(){

	var count = $('.task').length;
//	document.getElementById("task-counter").innerHTML = count;

	if (count === 0) {					// pt a afisa mesajul de no-task initial
	//	$(".no-task-message").show(); SAU
	$(".no-task-message").removeClass("invisible");   // e mult mai scalabil decat varianta show, hide..vezi addClass din fctia addItem 
	}

	return count;
}

function updateTasksCounter() {
	$("#task-counter").find("b").html(displayCounter()); 
}

function calcul() {

	var today = new Date();    // e ok pus aici? e global, altfel nu il recunostea
	var currentHour = today.getHours(); 
	var currentMinutes = today.getMinutes();
	var currentSeconds = today.getSeconds();

	var x = today.getHours();

	if(currentMinutes<10) {
    	currentMinutes = '0'+ currentMinutes;
	}

	if(currentSeconds<10) {
    	currentSeconds = '0'+ currentSeconds;
	}

	if ( (x>0) && (x<12) ){
		return x + ":" + currentMinutes + " AM";
	} else if ((x > 12) && (x<=23)) {
		return (x-12) + ":" + currentMinutes + " PM";
	} else if (x === 0) {
		return 12 + ":" + currentMinutes + " AM";
	} else if (x === 12) {
		return 12 + ":" + currentMinutes + " PM";
	}

	
}

