
// datos de usuario
const user = "hernandez"
const pass_cliente = "alan123"

function solicitarDatos (){
    let usuario = prompt("ingrese su usuario");
    let password = prompt ("ingrese su password")

if (validarDatos (usuario,password)){
    alert("bienvenidos a autos hernandez ")
    
}else{
    alert("usuario y o password incorrecto")
}
}
 function validarDatos(usuario,password){
    if ( usuario === user && password === pass_cliente){
        return true;
    } else {
        return false
    }
 } 
  solicitarDatos()

 // variables declaradas según el tipo de auto.
 let vPe = 0;
 let vMed = 0;
 let vGrand = 0;
 let vTotal = 0;
// variables declaradas según el precio del auto.
 let vPe1 = 500;
 let vMed2 = 1000;
 let vGrand3 = 1500;
// variables declaradas según el acumulado de $.
 let vPequeAcu = 0;
 let vMeDAcu = 0;
 let vGrandAcu = 0;
 let vTotalAcu = 0;
 let promedio = 0;
// variable para el usuario ingresara el tipo del auto
 let au;
//
let cant = 1;
while (cant <= 10) 
{
 let ingreso = false; 
 while (ingreso == false) 
 {
     au = parseInt(prompt("ingrese tipo de auto(1= pequeño, 2= mediano, 3= grande):"));
     if (au <= 3) {
         ingreso = true;
     }
     else{
         alert(" no has ingresado un valor correcto. Volve a intentarlo. ")
     }
 }
 switch (au)
 {
     case 1:
         vPe++;
         vPequeAcu = vPequeAcu + vPe1
         break;
     case 2:
         vMed++;
         vMeDAcu = vMeDAcu + vMed2
         break;
     case 3:
         vGrand++;
         vGrandAcu = vGrandAcu + vGrand3
         break;
 }
 vTotal = vPe + vMed + vGrand;
 vTotalAcu = vPequeAcu + vMeDAcu + vGrandAcu;
 alert("cantidad de autos ingresados por el momento: " + vTotal + " recaudado: " + vTotalAcu);
 cant++;
}
promedio = vTotalAcu / vTotal;
alert ( "valor promedio registrado por auto es equivalente a pesos: "  +  promedio ) ;


