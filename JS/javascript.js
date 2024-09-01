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