const mensaje_a_encriptar_o_desencriptar = document.querySelector(".encriptar_mensaje");
const mensaje_procesado = document.querySelector(".mensaje_encriptado")
const diccionario = { a: "ai" , e: "enter",  i: "imes", o: "ober", u: "ufat"};

function ocultarElemento(){
	document.getElementById("ocultar_imagen").style.display = "none";
	document.getElementById("button_copy").style.display = "inline";
	document.getElementById("textarea_encriptado").style.display = "inline";
};

function solicitandoEncriptar(){
	const mensajeEncriptado = encriptar(mensaje_a_encriptar_o_desencriptar.value);
	mensaje_procesado.value = mensajeEncriptado;
	ocultarElemento();
	mensaje_a_encriptar_o_desencriptar.value = "";
}

function solicitandoDesencriptar(){
	const mensajeDesencriptado = desencriptar(mensaje_a_encriptar_o_desencriptar.value);
	mensaje_procesado.value = mensajeDesencriptado;
	ocultarElemento();
	mensaje_a_encriptar_o_desencriptar.value = "";
}

function encriptar(mensaje){
	var mensajeEncriptado = [];
	mensaje = mensaje.toLowerCase();
	for (let i of mensaje){
		var letra = i;	
		var incluido = Object.keys(diccionario).includes(letra)
		if (incluido == true ){
			var valor = diccionario[i];
			mensajeEncriptado.push(valor);
		}else {
			mensajeEncriptado.push(letra);
		}
	}
	mensajeEncriptado =  mensajeEncriptado.join("")
    return(mensajeEncriptado)
}


function desencriptar(mensaje){
	mensaje = mensaje.toLowerCase();
	let valor = Object.values(diccionario)
	for (i in valor){
		var dato = valor[i];
		Object.entries(diccionario).forEach(([key, value])=>{ 
			if (value === dato) {
				var clave = key;
				mensaje = mensaje.replaceAll(dato, clave )
			}
			})
	}
	return mensaje	
}

function copiar(){
	mensaje_procesado.select();
	navigator.clipboard.writeText(mensaje_procesado.value);
	mensaje_procesado.value ="";
	document.getElementById("textarea_encriptado").style.display = "none";
	document.getElementById("ocultar_imagen").style.display = "inline";
}