

const c9Module = (() => {
	
	return {
		
		pageScrollFunction:() => {
			$(document).ready(function() {
				$('.nav-link').on('click', function() {
					$.scrollTo($(this).attr('href'), 800, {
						offset: -60
					});
				});
			});
		},
		
		hideCollapsedNavbar: () => {
			$(document).on('click',function(){
				$('.collapse').collapse('hide');
			})
		},
		
		getResultsFromDatabase: () => {
			fetch('https://c9results.herokuapp.com/matches') 
			.then((response) => {
				console.log("working?");
				return response.json();
				
			})
			.then(function(games) { 
				resultOutput.innerHTML = "";
				for (var i = 0; i < games.length; i++) {
					c9Module.showResultsOnHtml(games[i]);
					console.log("working still?");
				} 	
			})
			.catch(function(error) {
				console.log('Request failed', error); 
			});		
		},
		
		showResultsOnHtml: (match) => {
			console.log("working yet still?");
			var matchDiv = `
			<div class='col-lg-6 col-md-6 col-sm-12'>
			<table class='table table-bordered table-sm table-responsive'>
			<thead class='thead-inverse'>
			<tr>
			<th>Round</th>
			<th>Home</th> 
			<th>Away</th> 
			<th>Map</th> 
			<th>Score</th> 
			<th>Result</th> 
			<th>Date</th>
			</tr>
			</thead>
			<tbody>
			<tr>
			<td class='info'>${match.Round}</td>
			<td class='info'>${match.Home}</td> 
			<td class='info'>${match.Away}</td> 
			<td class='info'>${match.Map}</td> 
			<td class='info'>${match.Result}</td> 
			<td class='info'>${match.Score}</td> 
			<td class='info'>${match.Date}</td>
			</tr>
			</tbody>
			</table>
			</div>`;
			resultOutput.innerHTML += matchDiv;
		},

		contactFormFunction: () => {
			$(document).ready(function(){ 
				$('#characterLeft').text('140 characters left');
				$('#message').keydown(function () {
					var max = 140;
					var len = $(this).val().length;
					if (len >= max) {
						$('#characterLeft').text('You have reached the limit');
						$('#characterLeft').addClass('red');
						$('#btnSubmit').addClass('disabled');            
					} 
					else {
						var ch = max - len;
						$('#characterLeft').text(ch + ' characters left');
						$('#btnSubmit').removeClass('disabled');
						$('#characterLeft').removeClass('red');            
					}
				});    

				$(".submit").click(function () {
					
					$("form").trigger("reset");
				});
			});

		},
		
		registerEventHandlers: function() {
			/*document.getElementById("c9Games").addEventListener("click", c9Module.getResultsFromDatabase);*/
			/*console.log("button working?");*/
		},
		
		//Self-invoking function that will load the DOM content, first page, loading indicator, show if there are any saved articles in the DB and activate all the EventListeners.
		initialize: (() => {
			document.addEventListener('DOMContentLoaded', () => {
				c9Module.pageScrollFunction();
				c9Module.registerEventHandlers();
				c9Module.getResultsFromDatabase();
				c9Module.hideCollapsedNavbar();
				c9Module.contactFormFunction();
			});
		})()
		
	}
	
})();



