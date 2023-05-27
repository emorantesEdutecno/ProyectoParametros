const dividir = (a=1,b=1, ...arregloDatosAdicionales)=>{
    let longitudArreglo = arregloDatosAdicionales.length;
    console.log('longitud arreglo: ',longitudArreglo);
    let datosAdicionales = 'Datos Adicionales: ';
    if(longitudArreglo>0){
        for(let i=0; i<arregloDatosAdicionales.length;i++){
            datosAdicionales = datosAdicionales +" "+ arregloDatosAdicionales[i];
            console.log('datosAdicionales: ',datosAdicionales);
        }
        let cajaDatosAdicionales = document.getElementById('txtDatosAdicionales');
        cajaDatosAdicionales.innerText = datosAdicionales;
    } 


    return a/b;
} 

const realizarDivision = ()=>{
    let valorCaja1 = Number(document.getElementById('txtDato1').value);
    let valorCaja2 = document.getElementById('txtDato2').value;
    let valorCaja3 = document.getElementById('txtDato3').value;
    let valorCaja4 = document.getElementById('txtDato4').value;
    let valorCaja5 = document.getElementById('txtDato5').value;


    let valorResultado =0;

    if(valorCaja2=='' || valorCaja2==undefined || valorCaja2==null){
        valorResultado = dividir(valorCaja1);
    }
    else if(valorCaja3=='' || valorCaja3==undefined || valorCaja3==null || valorCaja4=='' || valorCaja4==undefined || valorCaja4==null  || valorCaja5=='' || valorCaja5==undefined || valorCaja5==null ){
        valorCaja2 = Number(valorCaja2);
        valorResultado = dividir(valorCaja1, valorCaja2);
    }
    else{
        valorCaja3 = Number(valorCaja3);
        valorCaja4 = Number(valorCaja4);
        valorCaja5 = Number(valorCaja5);
        valorResultado = dividir(valorCaja1, valorCaja2, valorCaja3, valorCaja4, valorCaja5);
    }

    let cajaResultado = document.getElementById('txtResultado');
    cajaResultado.innerText = valorResultado;
};


const saludar = (nombre, saludo , mensaje=`¿Cómo has estado ${nombre} ?`) =>{
    let resultadoSaludo = `Hola ${nombre}, ${saludo}, ${mensaje}`;
    return resultadoSaludo;
};

const realizarSaludo = () =>{
    let valorCajaNombre = document.getElementById('txtNombre').value;
    let valorCajaSaludo = document.getElementById('txtSaludo').value;
    let valorCajaMensaje = document.getElementById('txtMensaje').value;
    let respuestaSaludo ='';

    if(valorCajaMensaje == '' || valorCajaMensaje==undefined || valorCajaMensaje==null){
        respuestaSaludo = saludar(valorCajaNombre,valorCajaSaludo );
    }
    else{
        respuestaSaludo = saludar(valorCajaNombre, valorCajaSaludo, valorCajaMensaje);
    }

    let elResultadoSaludo = document.getElementById('txtResultadoSaludo');
    elResultadoSaludo.innerText = respuestaSaludo;
    
};


let probarForOf = () =>{
    const frutas = ['pera', 'manzana', 'papaya', 'curuba', 'lucuma'];
    let resultado = '';

    for( let fruta of frutas){
        resultado = resultado +  fruta + ' ';
    }

    console.log(frutas);
    console.log(typeof frutas);
    console.log(resultado);
    console.log(typeof resultado);
}

const asignarEventos = ()=>{
    let elBotonDividir = document.getElementById('btnDividir');
    elBotonDividir.addEventListener('click', realizarDivision);

    let elBotonSaludar = document.getElementById('btnSaludar');
    elBotonSaludar.addEventListener('click', realizarSaludo);

    let elBotonForOf = document.getElementById('btnForOf');
    elBotonForOf.addEventListener('click', probarForOf);
}