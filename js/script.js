

const c9Module = (() => {

	return {

		pageScrollFunction() {
			$(document).ready(function() {
				$('.nav-link').on('click', function() {
					$.scrollTo($(this).attr('href'), 800, {
						offset: -60
					});
				});
			});
		},

		registerEventHandlers: () => {


		},

  //Self-invoking function that will load the DOM content, first page, loading indicator, show if there are any saved articles in the DB and activate all the EventListeners.
  initialize: (() => {
  	document.addEventListener('DOMContentLoaded', () => {
  		c9Module.pageScrollFunction();

  	});
  })()

}

})();



