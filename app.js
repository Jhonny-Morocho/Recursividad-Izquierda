$("#formRecursidad").on("submit",function(e){
    e.preventDefault();
    var datos=$(this).serializeArray();
    NT=datos[0]['value'];
    nNT=datos[1]['value'];
    console.log(comprobarRecursividad(NT,nNT));
    // mensaje alert para saber si existe recursividad
    mensaje(comprobarRecursividad(NT,nNT));
    if(comprobarRecursividad(NT,nNT)==true){
        regla1(NT,nNT);
        regla2(NT,nNT);
    }else{
        $('.regla1').html('<div class="alert alert-primary" role="alert">'+'</div>');
        $('.regla2').html('<div class="alert alert-primary" role="alert">'+'</div>');
    }



});
// comprobarDobleRegla();
// function comprobarDobleRegla(){
    
//     var cuenta = 0;
//     var miCadena="E+TT";
//      var    posicion = miCadena.indexOf("│");
//      console.log(posicion);
//         while ( posicion != -1 ) {
//         cuenta++;
//         posicion = miCadena.indexOf("x",posicion+1);
//         }
//     console.log(posicion);
// }

function regla1(Nt,nNT){
    // A->A α │ β
    //A->β A'
    var beta="";
    var nuevoNNT=Nt+"'";
    var posicion=0;
    if(nNT.indexOf('│') !== -1) {
        //Si tiene │ 
        posicion = nNT.indexOf("│",posicion+1);
        beta=(nNT.substr(posicion+1,nNT.length));
        $('.regla1').html('<div class="alert alert-primary" role="alert">'+
        Nt+"->"+beta+nuevoNNT
            +'</div>');
      }else{
        //NO tiene │
        beta=nNT.substr(1,nNT.length);
        $('.regla1').html('<div class="alert alert-primary" role="alert">'+
        Nt+"->"+beta+nuevoNNT
            +'</div>');
      }
}

function regla2(Nt,nNT){
    // A->A α │ β
    // A->α  A'│ ε

    var alfa="";
    var nuevoNNT=Nt+"'";
    var posicion=0;
    if(nNT.indexOf('│') !== -1) {
        //Si tiene │ 
        posicion = nNT.indexOf("│",posicion+1);
        alfa=(nNT.substr(Nt.length,posicion-1));
        $('.regla2').html('<div class="alert alert-primary" role="alert">'+
        Nt+"->"+alfa+nuevoNNT+"│ε"
            +'</div>');
      }else{
        //NO tiene │
        alfa=nNT.substr(Nt.length,nNT.length);
        console.log(alfa);
        $('.regla2').html('<div class="alert alert-primary" role="alert">'+
        Nt+"->"+alfa+nuevoNNT
            +'</div>');
      }


}

// verificamos si existe recursividad
function comprobarRecursividad(cadenaNt,cadenaNnT){
    var banderaRecursividad=false;
    //verifico si exte recusividad por la izquierda si exite devuelve true
    var resultado = (cadenaNt.substr(0,cadenaNt.length)==cadenaNnT.substr(0,cadenaNt.length))?banderaRecursividad=true:banderaRecursividad=false;
    return banderaRecursividad;
}
 
 function mensaje(bandera) {  
    if(bandera==true){
        $('.mensaje').html('<div class="alert alert-warning " role="alert">'+
        'SI EXISTE RECURSIVIDAD POR LA IZQUIERDA'
    +'</div>');
    }else{
        $('.mensaje').html('<div class="alert alert alert-danger" role="alert">'+
        'NO EXISTE RECURSIVIDAD POR LA IZQUIERDA'
    +'</div>');
    }
 }
