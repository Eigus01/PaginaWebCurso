function AreaDiametro(diametro){
    let area = Math.PI * Math.pow(diametro/2,2);
    console.log("Area :" + area + "  del circulo con diametro : " + diametro);
}
AreaDiametro(1);

function AreaRadio(radio){
    let area = Math.PI * Math.pow(radio,2);
    console.log("Area :" + area + "  del circulo con radio : " + radio);
}
AreaRadio(0.5);

let mayor = [30,55,91,25];
let menor = [38,45,60];

function Mayor(mayor)
{
    let actual = mayor[0];
    for (let index = 1; index < mayor.length; index++) {
       if (actual<mayor[index]) {
            actual = mayor[index];
       }
    }
    console.log("El mayor es : " + actual);
}
Mayor(mayor);

function Menor(menor)
{
    let actual = menor[0];
    for (let index = 1; index < menor.length; index++) {
       if (actual>menor[index]) {
            actual = menor[index];
       }
    }
    console.log("El menor es : " + actual);
}
Menor(menor);

function ParImpar(numero)
{
    while (numero>0) {
        numero= numero-2;
    }
    if(numero == 0){
        console.log("Es par");
    }
    else{
        console.log("Es Impar");
    }
}
ParImpar(15);

