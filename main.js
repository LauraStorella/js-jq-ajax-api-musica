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
				console.log(cds);
				
				// Chiamo funzione per stampa cover album
				printCds(cds)	
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
				'year': singleCd.year,
				'genre': (singleCd.genre).toLowerCase(),
			};

			// Appendo elemento in html (.cds-container)
			var html = template(context);
			$('.cds-container').append(html);			
		}	 
	 }


	// Step #3 : BONUS - inizio - 1° Metodo
	// Intercetto selezione voce dal menu 
	$('.cds-genre').change( function() {
		// alert('test');

		// Leggo il valore della select
		var userSelection = $(this).val();
		console.log(userSelection);

		$('.cd').each( function() {
		
		// Leggo valore data-genre 
		var musicGenre = $(this).attr('data-genre');

		// Se scelta corrisponde a  'all' (tutti i generi)
		// oppure corrisponde a una scelta dell'utente (filtro applicato)
		if (userSelection === 'all' || musicGenre === userSelection ) {
			// visualizzo tutti i dischi / dischi di un relativo genere
			$(this).show();
		} else {
			// nascondo tutti gli album
			$(this).hide();
		}
		});
	});
	// BONUS - fine - 1° Metodo



	// // Step #3 : BONUS - inizio - 2° Metodo
	// // Intercetto selezione voce dal menu
	// $('.cds-genre').change( function() {
	// 	// alert('test');

	// 	// Leggo il valore della select
	// 	var userSelection = $(this).val();
	// 	console.log(userSelection);

	// 	// Se il valore è diverso da 'all' (tutti i generi)
	// 	//  ---> allora l'utente ha applicato un  filtro
	// 	if (userSelection != 'all') {
	// 		// nascondo tutti i dischi 
	// 		$('.cd').hide();
	// 		// e visualizzo quelli corrispondenti alla scelta utente 
	// 		$('.cd[data-genre="' + userSelection + '"]').show();
	// 	} else {
	// 		// visualizzo tutti gli album
	// 		$('.cd').show();
	// 	}
	// });
	// // BONUS - fine . 2° Metodo
































}); // document ready