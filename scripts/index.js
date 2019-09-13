$(document).ready(function() {
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