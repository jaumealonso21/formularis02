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
$( "#textarea01" ).change(function(e) {
    var limit   = $(this).attr("maxlength","100");
    var valor  = $(this).val();
    var cars = limit.attr("maxlength") - valor.length;
    if (e.keyCode === 8) {
        cars = cars - 1;     
    }
    $("#text01").html("Et falten: "+ cars +" caràcters");
});

$( "#textarea02" ).keydown(function(event) {
//    if (event.keyCode === 87) {
//        var cont = $(this).val();
//        cont = cont + event;
//        $("#textarea02").html(event.keyCode);    
//    }else{
//        $("#textarea02").html(" ");
//    }
    if(event.keyCode===87){//Tecla w
        //$("#textarea02").html(event.keyCode);
        alert("Tecla no permesa");
    }
//alert("dksdhsdj");
});

function nif_valido($nif) {
    $nif = strtoupper($nif);
     
    $nifRegEx = '/^[0-9]{8}[A-Z]$/i';
    $nieRegEx = '/^[XYZ][0-9]{7}[A-Z]$/i';
     
    $letras = "TRWAGMYFPDXBNJZSQVHLCKE";
     
    if (preg_match($nifRegEx, $nif)) return ($letras[(substr($nif, 0, 8) % 23)] === $nif[8]);
    else if (preg_match($nieRegEx, $nif)) {
        if ($nif[0] === "X") $nif[0] = "0";
        else if ($nif[0] === "Y") $nif[0] = "1";
        else if ($nif[0] === "Z") $nif[0] = "2";
 
        return ($letras[(substr($nif, 0, 8) % 23)] === $nif[8]);
    }
    else return false;
}

/*****************************/
/*       Teléfono fijo       */
/*****************************/
 
function fijo_valido($n) {
    $re = '/^(8|9)[0-9]{8}$/';
     
    return (preg_match($re, $n));
}

});

