(function ($) {
  "use strict"; //You will be happier

  $(function() {
    // Cycle through all charts on page
	  $('.chart').each(function(){
	    // Start highest number variable as 0
	    // Nowhere to go but up!
  	  var highestNumber = 0;

      // Set highest number and use that as 100%
      // This will always make sure the graph is a decent size and all numbers are relative to each other
    	$(this).find('li .bar').each(function() {
    	  var num = $(this).data('number');
        if (num > highestNumber) {
          highestNumber = num;
        }
    	});

      // Time to set the widths
    	$(this).find('li').each(function() {
    		var bar = $(this).find('.bar'),
    		    // get all the numbers
    		    num = bar.data('number'),
    		    // math to convert numbers to percentage and round to closest number (no decimal)
    		    percentage = Math.round((num / highestNumber) * 100);
    		// Time to assign and animate the bar widths
    		$(this).children('.bar').animate({ 'width' : percentage + '%' }, 3000);
    	});
	  });

  });

}(jQuery));