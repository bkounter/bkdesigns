$(document).ready( function(){
    $('#toggleButton').click( function() {
        var toggleWidth = $("#popmenu").width() == 250 ? "0px" : "250px";
        $('#popmenu').animate({ width: toggleWidth });
    });
});