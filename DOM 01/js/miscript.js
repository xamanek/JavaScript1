"use strict"
/*function suma(){
	var num1=document.getElementById("num1_eje01");
	var num2=document.getElementById("num2_eje01");
	var simbolo=document.getElementById("operacion");
	var resultado=document.getElementById("resultado1");
	var operacion1=0;
	operacion1=Number(num1.value)+Number(num2.value);
	resultado.innerHTML=operacion1;
}
*/

function valorar(){
	var numero=document.getElementById("num1_eje02");
	var resultado=document.getElementById("resultado2");
	
	var numnumerica=Number(numero.value);
	if (numnumerica>0){
		resultado.innerHTML="Es positivo";
		resultado.style.backgroundColor= "green";
	}
	else if (numnumerica<0){
		resultado.innerHTML="Es negativo";
		resultado.style.backgroundColor= "red";
	}
	else if (numnumerica==0){
		resultado.innerHTML="Es neutro";
		resultado.style.backgroundColor= "#ccc";
	}
	else {
		resultado.innerHTML="<b>Debe ingresar números, ...  cabeza de becerro!</b>";
		resultado.style.backgroundColor= "yellow";
	}
}

function calcular(){
	var numtx=document.getElementById("num1_eje03");
	var resultado=document.getElementById("resultado3");
	var operacion=0;
	
	var num=Number(numtx.value);
	operacion=(num*1852);
	resultado.innerHTML=operacion+" metros";
}
/*
function cambiamaiuscola(){
	var txt=document.getElementById("texto_eje04");
	var resultado=document.getElementById("resultado4");
	var txtcampo=txt.value.toUpperCase();
	resultado.innerHTML=txtcampo;
	
}

function cambiaminuscola(){
	var txt=document.getElementById("texto_eje04").value;
	var resultado=document.getElementById("resultado4");
	resultado.innerHTML=txt.toLowerCase();
} 

*/
// Opzione con THIS .... mettere nelle parentesi degli 'ONCLICK' nell HTML un 'this' e chiamarli nello stesso modo (nell onclick). Poi porre un name= e un nome per ognuno.

function convertirtxt(botondeconvertirtxt){
	var txt=document.getElementById("texto_eje04");
	var resultado=document.getElementById("resultado4");
	
	var txtcampo="";
	
	if (botondeconvertirtxt.name =="mayu"){
		// TODO: convertire in maiuscola
		txtcampo=txt.value.toUpperCase();
	}
	else{
		// TODO: convertire in minuscole
		txtcampo=txt.value.toLowerCase();

	}
	resultado.innerHTML=txtcampo;
}

/*  var texto=("parrafo").value;
	var resultado=texto.replace("Don Quijote", "el ingenioso hidalgo");
	resultado.innerHTML=resultado;   */

function reemplazar(){
	var texto=document.getElementById("donq");
	var resultado=document.getElementById("resultado5");
	
	var mitexto=texto.innerHTML;
	var mitextocambiado=mitexto.replace(/don Quijote/ig, "<b>el ingenioso hidalgo</b>");
	
	
	
	resultado.innerHTML=mitextocambiado;
	
}

function comprobar(){
	var texto=document.getElementById("texto_eje06");
	var resultado=document.getElementById("resultado6");
	
	var campotxt=texto.value;
	var mensaje="";
	//questo vuol dire che voglio che un testo/messaggio compaia da qulche parte nella pagina. poi dir´dove.
	
	if (campotxt.indexOf("@")==-1){
		mensaje="Le falta la @";
	}
	else if (campotxt.indexOf(".")==-1){
		mensaje="Le falta el.";
	}
	else {
		mensaje="Tu texto tiene un correo electronico";
	}
	
	resultado.innerHTML=mensaje;
	
	
}

function spunta(elem){
	var spantesto=document.getElementById("chk1");
	
	spantesto.innerHTML="Me has checkeado y el valor es "+ elem.value;
	
	if (elem.checked==true){
		// esta checkeado
		spantesto.innerHTML="Me has checkeado y el valor es "+ elem.value;
	}
	else {
		// no esta checkeado
		spantesto.innerHTML="Haz clic sobre mi!";
	}
}

function radios(elemento){
	var spantesto1=document.getElementById("rd1txt");
	var spantesto2=document.getElementById("rd2txt");
	
	if (elemento.id=="rd1"){
		// Ha chiamato la funzione del bottone 1
		spantesto1.innerHTML="Me has checkeado y el valor es "+ elemento.value;
		spantesto2.innerHTML="Haz clic sobre mi!";
	}
	else {
		// ha chiamato la funzione del bottone 2
		spantesto2.innerHTML="Me has checkeado y el valor es "+ elemento.value;
		spantesto1.innerHTML="Haz clic sobre mi!";
	}
}




//****************ex 8 *********************


function colorea(){
	var cajitas=document.querySelectorAll("#cuadricula .cuadrado");
	var i=0;
	
	for (i=0; i<cajitas.length;i++){
		if (i%4==0){
			//cajta pari, ovvero ogni due posizioni, se volessimo ogni 3 i%3==0
			cajitas[i].style.backgroundColor="black";
		}
		else{
			//cajta dispari, ovvero tutte le altre
			cajitas[i].style.backgroundColor="white";
		}
	}
}

function recolorea(){
	var cajitas=document.querySelectorAll("#cuadricula .cuadrado");
	var i=0;
	
	for (i=0; i<cajitas.length;i++){
		if (i%4==0){
			//cajta pari, ovvero ogni due posizioni, se volessimo ogni 3 i%3==0
			cajitas[i].style.backgroundColor="white";
		}
		else{
			//cajta dispari, ovvero tutte le altre
			cajitas[i].style.backgroundColor="black";
		}
	}
}

//****************ex 9 *********************

function fibonacci(){
	var cajitas=document.querySelectorAll("#sucesion .cuadrado");
	// ho acquisito la lista delle cajitas
	var i=0;
	//cos¡ dico che la i genera delle posizioni che partono da 0
	
	var num1=0;
	var num2=1;
	//le prime due posizioni sono assegnate da noi
	var num3=num1+num2;
	// quindi anche la terza, indirettamente e quindi lo facciamo scrivere con innerHTML
	
	cajitas[0].innerHTML=num1;
	cajitas[1].innerHTML=num2;
	cajitas[2].innerHTML=num3;
	
	//dalla posizone 3 inizia il bucle
	for (i=3; i<cajitas.length;i++){
		num1=num2;
		num2=num3;
		num3=num1+num2;
		cajitas[i].innerHTML=num3;
	}	
}
















































