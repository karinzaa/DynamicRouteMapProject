$(document).ready(function()
{
    $( 'li>a[id$="Container"]' ).click(function(event) 
    {
        event.preventDefault();
        var href = $(this).attr('href');
        // alert("Loading " + href);
        $('body').load(href + " #body", function() {
          $("#body *:first").unwrap()
        });
        return false;
    });
});
