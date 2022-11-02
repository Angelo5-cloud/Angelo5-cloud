let btnH=document.querySelector(`.btn`);

//contador
//huevos html 
let cont=document.getElementById(`cont`);
let fond=document.getElementById(`fondo`);

let=H_S_naranja=document.querySelector('.S_naranja');
let=H_naranja=document.querySelector('.naranja');
let=H_morado=document.querySelector('.morado');
let=H_azul=document.querySelector('.azul');

let contador=0;
let li_naranja=0.39;
let naranja=3.93;
let morada=10.45;
let azul=85.23;

let rando =0;
let comprobar=false;

//probabilidad de hormigas
let hormigaDeAcaciaCornigera_S1 = 0.04;//1
let predadora_S2 = 0.04;//2
let guardianaEscudera_S3 = 0.04;//3
let devoradoraDeHojas_s4 =0.04;//4
let giganteDeSangre_S5 = 0.04;//5
let cristalDorado_s6 = 0.04;//6
let puntaDeLanzaCarmesi_S7 = 0.05;
let enjutaRubi_S8 = 0.05;
let acechadoraOscura_S9 = 0.05;
//0,39


let hormigaDeRoca_N6 = 0.10;//1
let mirmecomorfismo_n7 = 0.10;//2
let cancerNegro_N8 = 0.10;//3
let tetramoriumHermosa_N9 = 0.10;//4
let chinchesAsesinas_N10 = 0.10;//5
let hormigaMarabunta_N11 = 0.10;//6
let hormigaTerciopeloNaranja_N12 = 0.10;//7
let hormigaDeLaMuerte_N13 = 0.10;//8

let generalDelNuevoMundo_N1 = 0.23;//1
let generalGuardiana_N2 = 0.23;//2
let generalAcida_N3 = 0.23;//3

let hormigaDeCorazaDorada_N4= 0.32;
let espinosaDorada_N5 = 0.32;


//2.13

let ProbabilidadN=0;//probabilidad 
let hormigaRand=0;
    
btnH.addEventListener(`click`,()=>{

    
rando=parseFloat(Math.random()*100+1).toFixed(2);

comprobar=false;
//Isla naranja 
if(rando<= li_naranja &&comprobar==false){
    
    H_morado.textContent="";
    
    H_azul.textContent="";
    H_S_naranja.textContent="ISLA naranja ";
    H_naranja.textContent="";
    ProbabilidadN=parseFloat(Math.random()*0,39).toFixed(2);
    if(ProbabilidadN <=0,05){
      
    }
    
    contador++;
    cont.textContent=contador;
    

    
    comprobar=true;
    
}

//naranja normal 
if(rando<=naranja && comprobar==false){
    
    H_morado.textContent="";
    H_azul.textContent="";
    H_S_naranja.textContent="";
    do{
      ProbabilidadN=parseFloat(Math.random()*2.13).toFixed(2);
    if(ProbabilidadN <= 0.10){
    
      
      hormigaRand=parseInt(Math.random()*8+1);
      switch(hormigaRand){
        
        case 1:
          H_naranja.textContent="Hormiga De roca";
          break;
          
        case 2:
          H_naranja.textContent="Mirmecomorfismo";
          break;
        
        case 3:
          H_naranja.textContent="Cancer negro";
          break;
        
        case 4:
          H_naranja.textContent="Tetramorium hermosa";
          break;
        
        case 5:
          H_naranja.textContent="Chinches Asesinas";
          break;
        case 6:
          H_naranja.textContent="Hormiga marabunta";
          break;
        
        case 7:
          H_naranja.textContent="Hormiga Terciopelo naranja";
          break;
        
        case 8:
          H_naranja.textContent="Hormiga de la muerte ";
          break;
      }
    }//llave if 0.10%
    if(ProbabilidadN > 0.10 && ProbabilidadN <=0.23 ){
      
      hormigaRand=parseInt(Math.random()*3+1);
      switch(hormigaRand){
        
        case 1:
          H_naranja.textContent="General del Nuevo mundo";
          break;
          
        case 2:
          H_naranja.textContent="General guardiana ";
          break;
        
        case 3:
          H_naranja.textContent="General ácida ";
          break;
      }
    }//llave if 0.23%
    
    if(ProbabilidadN > 0.23 &&ProbabilidadN <=0.32){
      hormigaRand=parseInt(Math.random()*3+1);
      switch(hormigaRand){
        
        case 1:
          H_naranja.textContent="Hormiga de coraza dorada";
          break;
          
        case 2:
          H_naranja.textContent="Espinosa dorada";
          break;
      
      }
    }//llave if 0.32%
    
      
    }while(ProbabilidadN >0.32);
    
    contador++;
    cont.textContent=contador;
    
    comprobar=true;
    fond.style.backgroundColor = `#FF8008`;
    
}
//morado

if(rando<=morada && comprobar==false){
    
    
    H_morado.textContent="morado";
    
    H_azul.textContent="";
    H_S_naranja.textContent="";
    H_naranja.textContent="";
    
    contador++;
    cont.textContent=contador;
    
    
    comprobar=true;
    fond.style.backgroundColor = `purple`;
}
//azul 

if(rando>=14.77 &&comprobar ==false){
    
    H_azul.textContent="azul";
    
    H_S_naranja.textContent="";
    H_naranja.textContent="";
    
    H_morado.textContent="";
    
    contador++;
    cont.textContent=contador;
    
    
    comprobar=true ;
    fond.style.backgroundColor = "blue";
}





    
    
})
