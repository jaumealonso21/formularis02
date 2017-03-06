$(document).ready(function() {
 
$( "#textarea01" ).keydown(function(e) {
    var limit   = $(this).attr("maxlength","100");
    var valor  = $(this).val();
    var cars = limit.attr("maxlength") - valor.length;
    if (e.keyCode === 8) {
        cars = cars - 1;     
    }
    $("#text01").html("Et falten: "+ cars +" caràcters");
});

$( "#textarea02" ).keydown(function(e) {
//    if (e.keyCode === 87 && e.keyCode === 69 && e.keyCode === 82) {
    if (e.keyCode === 87) {
        var cont = $(this).val();
        cont = cont + e;
        $("#textarea02").html(e.keyCode);
    }else{
        $("#textarea02").html(" ");
    }
//    $("#textarea02").html(" ");
});

});

