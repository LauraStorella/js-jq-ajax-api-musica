$(document).ready(function() {

	// Chiamata Ajax per comunicare con API
	$.ajax(
		{
			url: "https://flynn.boolean.careers/exercises/api/array/music",
			method: "GET",
			success: function (data) {
				var cds = data.response;

				// Chiamo funzione per stampa cover album
				printCds(cds)
			},

			error: function () {
				alert('Ooops! Si è verificato un errore.');
			}
		}
	 );




	// ----------------------------- FUNCTION -----------------------------
	//  Creo funzione per inserire gli album in html (.cds-container)
	//  ---> arrayCds : contiene elenco cd da stampare
  //  ---> utilizzo handlebar per popolare .cds-container con cover album
	 function printCds(arrayCds) {

		var source = $("#cd-template").html();
		var template = Handlebars.compile(source);

		// Creo ciclo For per stampare tutti gli album in array
		for (var i = 0; i < arrayCds.length; i++) {
			var singleCd = arrayCds[i];

			// Inserisco info album nei placeholder di handlebars template
			var context = {
				'poster': singleCd.poster,
				'title': singleCd.title,
				'author': singleCd.author,
				'year': singleCd.year
			};

			// Appendo elemento in html (.cds-container)
			var html = template(context);
			$('.cds-container').append(html);			
		}	 
	 }
































}); // document ready