$(document).ready(function() {                    //popover jquery to be properly implemented 
  $("[data-toggle=popover]").popover({
    trigger: 'click',
    placement: "bottom",
    html: true,
    content: function() {
      var anchorText = $(this).text();
      $('#popover-content').find('input[id=txtContent]').attr('value', anchorText);
      return $('#popover-content').html();
    }
  });
});