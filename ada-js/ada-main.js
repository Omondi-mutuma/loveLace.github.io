$(document).ready(function() {
  $('has-animation').each(function() {
    var $this = $(this);
    var delay = $this.data('delay') || 0;
    console.log('Element:', $this); // Log element to console
    console.log('Delay:', delay);   // Log delay to console
    setTimeout(function() {
      console.log('Adding animate-in to:', $this); // Log before adding class
      $this.addClass('animate-in');
    }, delay);
  });
});


