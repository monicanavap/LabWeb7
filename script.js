$(document).ready(function() {
// crea botones
let temas = ["tiger", "lion", "husky", "wildcat"];
cargaBotones ();

function cargaBotones(){
	for (var i = 0; i < temas.length; i++){
	  
		var boton = $("<button>");
		boton.addClass("animal-button");
		boton.text(temas[i]);
		$("#animal-buttons").append(boton);

		//$("#animal-buttons").append(`<button id="animal-btn" value="${temas[i]}">${temas[i]}</button>`);
	}
}

$("#animal-form").on("click", "#add-animal", function(event){
	event.preventDefault();
	$("#animal-buttons").empty();
	temas.push($("#animal-input").val());
	cargaBotones();

})

$("#animal-buttons").on("click", ".animal-button", function() {

	$("#animals").empty();

	var busqueda= $(this).text();
	//console.log(`http://api.giphy.com/v1/gifs/search?api_key=s0Mm4IpRd8MxYDCHP14mEjkA4zhfsWq2&q=${busqueda}&limit=10&offset=0&rating=g&lang=en`);
	//param
	var api =`https://api.giphy.com/v1/gifs/search?api_key=s0Mm4IpRd8MxYDCHP14mEjkA4zhfsWq2&q=${busqueda}&limit=10&offset=0&rating=g&lang=en`;
	
    $.ajax({
		url: api,
		method: "GET"
	  })
	
	.then (function(response) {

       var response = response.data;

	//	alert(response);
		response.forEach(key => {

			var gifDiv = $(`<div id= "gifdiv">`);
			var gif = $("<img>"); 
			//no se mueve
			gif.attr("src", key.images.fixed_height_still.url);
			//si se
			gif.attr("data-animacion", key.images.fixed_height.url);
			gif.attr("data-still", key.images.fixed_height_still.url);
			gif.attr("data-enMovimiento", "no");
			//funcionalidad de click
			gif.addClass("animal-item");
			gifDiv.append(`<p> Rating: ${key.rating}</p>`);
			gifDiv.append(gif);

			$("#animals").append(gifDiv);
	
		})

	})
	

})
//checa si el elemento 	que se le dio click cumple lo que se le dio como param para todos los btonse
("body").on("click",".animal-item"), function(event){
	alert("hoa");
	var enMovimiento = $(this).attr("data-enMovimiento");

	if(enMovimiento ==="no"){
		$(this).attr("src", $(this).attr("data-animacion"));
		$(this).attr("data-enMovimiento", "si");
	}

	else {
		$(this).attr("src", $(this).attr("data-still"));
		$(this).attr("data-enMovimiento", "no");
	}

}


});


/*	// Start your code from here
var placeholder = $("placeholder");
var imagen = $("<img>");

//agregar dinamicamente propied
imagen.attr("src", "https://media3.giphy.com…s5i9ckpm8h&rid=200_s.gif");

placeholder.append(imagen); 
imagen.attr("data-animacion", "https://media3.giphy.com…gys5i9ckpm8h&rid=200.gif");

imagen.attr("data-still", "https://media3.giphy.com…s5i9ckpm8h&rid=200_s.gif");
imagen.attr("data-enMovimiento", "no");
//funcionalidad de click
imagen.addClass("animal-item");

//checa si el elemento 	que se le dio click cumple lo que se le dio como param
//para todos los btonse
$("body").on("click",".animal-item"){
	var enMovimiento = $(this).attr("data-enMovimiento");

	if(enMovimiento ==="no"){
		$(this).attr("src", $(this).attr("data-animacion"));
		$(this).attr("data-enMovimiento", "si");
	}

	else {
		$(this).attr("src", $(this).attr("data-animacion"));
		$(this).attr("data-enMovimiento", "si");
	}

} */ 
