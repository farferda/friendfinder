$(document).ready(function(){
	console.log('working brah')


	$('#submitsurvey').click(function(){
		var q1 = $("#exampleFormControlSelect1").val()
		var q2 = $("#exampleFormControlSelect2").val()
		var q3 = $("#exampleFormControlSelect3").val()
		var q4 = $("#exampleFormControlSelect4").val()
		var q5 = $("#exampleFormControlSelect5").val()
		var q6 = $("#exampleFormControlSelect6").val()
		var q7 = $("#exampleFormControlSelect7").val()
		var q8 = $("#exampleFormControlSelect8").val()
		var q9 = $("#exampleFormControlSelect9").val()
		var q10 = $("#exampleFormControlSelect10").val()
		var q11 = $("#exampleFormControlSelect11").val()


		var thingToSave = {
		  "name":"",
		  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
		  "scores":[
		      q1,
		      q2,
		      q3,
		      q4,
		      q5,
		      q6,
		      q7,
		      q8,
		      q9,
		      q10,
		      q11,
		    ]
		}
		$.ajax({
		  method: "POST",
		  url: "/api/saveddata",
		  data: thingToSave
		})
		.done(function( confirmationFromBackend ) {
		 alert( "we got this back from the Backend " + confirmationFromBackend );
		});
	})
})