

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
			fetch('http://localhost:3000/matches') 
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
			<div class="col-lg-3 col-md-6 col-sm-12">
			<div class="showScore">
			<table>
			<tr><th>Home</th> <th>Away</th> <th>Map</th> <th>Score</th></tr>
			<tr> <td class='info'>${match.Home}</td> <td class='info'>${match.Away}</td> <td class='info'>${match.Map}</td> <td class='info'>${match.Score}</td></tr>"
			</table>
			</div>
			</div>`;
			resultOutput.innerHTML += matchDiv;

			/*"<table>";
			"<tr> <th>Maker</th> <th>Model</th> <th>Speed</th> <th>RAM</th> <th>HD</th> <th>Price</th> </tr>";
			

			"<tr> <td class='$color'>$maker</td> <td class='$color'>$model</td> <td class='$color'>$speed</td> <td class='$color'>$ram</td> <td class='$color'>$hd</td> <td class='$color'>$price</td> </tr>";

			"</table>";*/

			/*<div class="col-lg-3 col-md-6 col-sm-12">
			<div class="showScore card">
			<img class="card-img-top img-responsive pt-15" src="">
			<div class="card-block">
			<h5 class="card-title">Home: ${match.Home}</h5>
			<h5 class="card-title">Away: ${match.Away}</h5>
			<p class="card-text">Map: ${match.Map}</p>
			<p class="card-text">Score: ${match.Score}</p>
			<br>
			</div>
			</div>
			</div>*/

		},
		
		registerEventHandlers: function() {
			document.getElementById("c9Games").addEventListener("click", c9Module.getResultsFromDatabase);
			console.log("button working?");
		},
		
		//Self-invoking function that will load the DOM content, first page, loading indicator, show if there are any saved articles in the DB and activate all the EventListeners.
		initialize: (() => {
			document.addEventListener('DOMContentLoaded', () => {
				c9Module.pageScrollFunction();
				c9Module.registerEventHandlers();
				c9Module.getResultsFromDatabase();
				c9Module.hideCollapsedNavbar();
			});
		})()
		
	}
	
})();



