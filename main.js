$(document).ready(function() {

	// RACCOLTA ALBUM MUSICALI
	/* 
	Step #1 - Attraverso una chiamata ajax all’Api di boolean avremo a 
	disposizione una decina di dischi musicali. 
	
	Step #2 - Servendoci di handlebars stampiamo tutto a schermo. 
	In questo momento non è importante la parte graﬁca.
	
	Step #3 - Bonus: Creare una select con i seguenti generi: pop, rock, 
	metal e jazz. In base a cosa scegliamo nella select vedremo i 
	corrispondenti cd. */


	// STEP #1
	// Chiamata Ajax per comunicare con API
	$.ajax(
		{
			url: "https://flynn.boolean.careers/exercises/api/array/music",
			method: "GET",
			success: function (data) {
				var cds = data.response;

				// Chiamo funzione per stampa cover album
				printCds(cds)

				// Step #3 : SELECT - inizio
				// Creo evento click sulla select
				$('option').click( function() {
					// alert('test');

					// Leggo il valore della select
					var userSelection = $(this).val();
					console.log(userSelection);

					// Se il valore è diverso da all
					//  ---> quindi l'utente ha applicato un  filtro
					if (userSelection != all) {
						// nascondo tutti i dischi (aggiungo classe .hide)
						// e visualizzo quelli corrispondenti alla scelta utente (aggiungo classe .show)
					} else {
						// visualizzo tutti gli album
					}
				});
				// SELECT - fine
			},

			error: function () {
				alert('Ooops! Si è verificato un errore.');
			}
		}
	 );




	// ----------------------------- FUNCTION -----------------------------
	
	// STEP #2
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