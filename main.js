var arregloResultado = [];
function cadenaLarge(arreglo){
	var alto = 0;
	var obj = {};
	
	for(var i = 0; i < arreglo.length; i++){
		if(typeof(arreglo[i])==="string"){
			if (arreglo[i].length>alto){
				alto = arreglo[i].length;
				arregloResultado[i] = arreglo[i].length;
				obj.text=arreglo[i];
			}
		} else {
			arregloResultado[i] = 0;
			console.log("Hay un valor no string!");
		}
	}
	obj.longitud = alto;
	console.log(arregloResultado);
	console.log("La media es ",media(arregloResultado));
	return obj;
}

function media(resultados){
	var res=0;
	for(var i=0;i<resultados.length;i++){
		res=res+resultados[i];
	}
	 return res/resultados.length;
}

var cadenas = ["ljfioji", "bmnsopehj", "ylyldkhewopjdcu"];
var cadenas2 = ["asfsggst", 2, "llkkldslidlkkl"];
console.log(cadenaLarge(cadenas));
//console.log(cadenaLarge(cadenas2));
