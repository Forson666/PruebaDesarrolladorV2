function inicializar() {
	// Cargando los campos con los equipos
	for (let i = 1; i < 5; i++) {
		var campo = document.getElementById("campo" + i);
		campo.innerHTML += '<input type ="text" name ="campoequipo' + i + '" style=" text-align:center;width:60px;height:40px;">';
		var txtEquipo = document.getElementsByName("campoequipo" + i)[0];
		var btnEquipo = document.getElementsByName("btnequipo" + i)[0];
		if(txtEquipo.value !== ""){
			txtEquipo.setAttribute("readonly", "readonly");
			btnEquipo.setAttribute("style", "visibility: hidden");
		}
	}
	
	// Cargando la tabla
	var tabla = document.getElementById("tabla");
	var fila = "";
	for (let i = 1; i < 5; i++) {
		fila = "";
		fila += '<tr style="text-align:center;"><td>'; 
        fila += '<input type="text" name="resultado' + i +'" readonly="readonly" value=" vs " style=" text-align:center"></td><td>';
        fila += '<input type="text" name="nombrep' + i + 'Equipo1" readonly="readonly" style=" text-align:center"><br>';
        fila += '<input type="text" name="nombrep' + i + 'Equipo2" readonly="readonly" style=" text-align:center"></td><td>';
        fila += '<input type="text" name="resp' + i + 'Equipo1" readonly="readonly" style=" text-align:center" ><br>';
        fila += '<input type="text" name="resp' + i + 'Equipo2" readonly="readonly" style=" text-align:center" ></td><td>';
        fila += '<input type="text" name="restcp' + i + 'Equipo1" readonly="readonly" style=" text-align:center"><br>';
        fila += '<input type="text" name="restcp' + i + 'Equipo2" readonly="readonly" style=" text-align:center""></td><td>';
        fila += '<input type="text" name="respp' + i + 'Equipo1" readonly="readonly" style=" text-align:center"><br>';
        fila += '<input type="text" name="respp' + i + 'Equipo2" readonly="readonly" style=" text-align:center"></td></tr>';
		tabla.innerHTML +=fila;
	}
	
	// Cargando los campos de los finalistas
	var campo = document.getElementById("campofinalista1");
	campo.innerHTML += '<input type ="text" name ="finalista1" readonly="readonly" style=" text-align:center;width:60px;height:40px;">';
	campo = document.getElementById("campofinalista2");
	campo.innerHTML += '<input type ="text" name ="finalista2" readonly="readonly" style=" text-align:center;width:60px;height:40px;">';
	campo = document.getElementById("campoperdedor1");
	campo.innerHTML += '<input type ="text" name ="perdedor1" readonly="readonly" style=" text-align:center;width:60px;height:40px;">';
	campo = document.getElementById("campoperdedor2");
	campo.innerHTML += '<input type ="text" name ="perdedor2" readonly="readonly" style=" text-align:center;width:60px;height:40px;">';
	
	// Ocultando los botones de registro de resultados
	ocultar();
	
}

window.onload = inicializar;

function ocultar(){
	if(document.getElementsByName("finalista1")[0].value !== "" || (document.getElementsByName("campoequipo1")[0].value === "" || document.getElementsByName("campoequipo2")[0].value === "")){
		var btnEquipo = document.getElementsByName("partido1")[0];
		btnEquipo.setAttribute("style", "visibility: hidden");
	}else{
		var btnEquipo = document.getElementsByName("partido1")[0];
		btnEquipo.setAttribute("style", "visibility: visible");
	}
	if(document.getElementsByName("finalista2")[0].value !== "" || (document.getElementsByName("campoequipo3")[0].value === "" || document.getElementsByName("campoequipo4")[0].value === "")){
		var btnEquipo = document.getElementsByName("partido2")[0];
		btnEquipo.setAttribute("style", "visibility: hidden");
	}else{
		var btnEquipo = document.getElementsByName("partido2")[0];
		btnEquipo.setAttribute("style", "visibility: visible");
	}
	if(document.getElementsByName("puesto1")[0].value !== "" || (document.getElementsByName("finalista1")[0].value === "" || document.getElementsByName("finalista2")[0].value === "")){
		var btnEquipo = document.getElementsByName("partido3")[0];
		btnEquipo.setAttribute("style", "visibility: hidden");
	}else{
		var btnEquipo = document.getElementsByName("partido3")[0];
		btnEquipo.setAttribute("style", "visibility: visible");
	}
	if(document.getElementsByName("puesto3")[0].value !== "" || (document.getElementsByName("perdedor1")[0].value === "" || document.getElementsByName("perdedor2")[0].value === "")){
		var btnEquipo = document.getElementsByName("partido4")[0];
		btnEquipo.setAttribute("style", "visibility: hidden");
	}else{
		var btnEquipo = document.getElementsByName("partido4")[0];
		btnEquipo.setAttribute("style", "visibility: visible");
	}
}

function registrar(equipo) {
	var txtEquipo = document.getElementsByName("campo"+equipo)[0];
	var btnEquipo = document.getElementsByName("btn"+equipo)[0];
	if(txtEquipo.value !== ""){
		txtEquipo.setAttribute("readonly", "readonly");
		btnEquipo.setAttribute("style", "visibility: hidden");
		if(equipo === "equipo1" || equipo === "equipo2"){
			var eq1 = document.getElementsByName("campoequipo1")[0];
			var eq2 = document.getElementsByName("campoequipo2")[0];
			document.getElementsByName("resultado1")[0].setAttribute("value", eq1.value + " vs " + eq2.value);
			document.getElementsByName("nombrep1Equipo1")[0].setAttribute("value", eq1.value);
			document.getElementsByName("nombrep1Equipo2")[0].setAttribute("value", eq2.value);
		}else{
			var eq1 = document.getElementsByName("campoequipo3")[0];
			var eq2 = document.getElementsByName("campoequipo4")[0];
			document.getElementsByName("resultado2")[0].setAttribute("value", eq1.value + " vs " + eq2.value);
			document.getElementsByName("nombrep2Equipo1")[0].setAttribute("value", eq1.value);
			document.getElementsByName("nombrep2Equipo2")[0].setAttribute("value", eq2.value);
		}
		ocultar();
	}else{
		alert("Por favor digite un nombre para el equipo");
	}
}

function abrir(texto,equipo1, equipo2, partido) {
	// referenciando los elementos del cuadro de dialogo
	var dialog = document.getElementsByTagName("dialog")[0];
	var aux = document.getElementsByName("partido")[0];
	var aux2 = document.getElementsByName("texto")[0];
	var eq1 = document.getElementsByName("equipo1")[0];
	var eq2 = document.getElementsByName("equipo2")[0];
	var geq1 = document.getElementsByName("Gequipo1")[0];
	var geq2 = document.getElementsByName("Gequipo2")[0];
	
	// Asignando los valores requeridos
	geq1.value = "";
	geq2.value = "";
	aux.setAttribute("value", partido);
	aux2.setAttribute("value", texto);
	eq1.setAttribute("value", document.getElementsByName(equipo1)[0].value);
	eq2.setAttribute("value", document.getElementsByName(equipo2)[0].value);
	dialog.setAttribute("open", "open");
}

function registrarResultado(partido, a, b){
	var eq1;
	var eq2;
	var res1;
	var res2;
	if(partido === "1"){
		eq1 = document.getElementsByName("campoequipo1")[0];
		eq2 = document.getElementsByName("campoequipo2")[0];
		res1 = document.getElementsByName("finalista1")[0];
		res2 = document.getElementsByName("perdedor1")[0];
		res3 = document.getElementsByName("finalista2")[0];
		res4 = document.getElementsByName("perdedor2")[0];
		
		if(a > b){
			res1.setAttribute("value", eq1.value);
			res2.setAttribute("value", eq2.value);
			document.getElementsByName("nombrep3Equipo1")[0].setAttribute("value", eq1.value);
			document.getElementsByName("nombrep4Equipo1")[0].setAttribute("value", eq2.value);
		}else{
			res1.setAttribute("value", eq2.value);
			res2.setAttribute("value", eq1.value);
			document.getElementsByName("nombrep3Equipo1")[0].setAttribute("value", eq2.value);
			document.getElementsByName("nombrep4Equipo1")[0].setAttribute("value", eq1.value);
		}
		document.getElementsByName("resultado3")[0].setAttribute("value", res1.value + " vs " + res3.value);
		document.getElementsByName("resultado4")[0].setAttribute("value", res2.value + " vs " + res4.value);
		
	}else if(partido === "2"){
		eq1 = document.getElementsByName("campoequipo3")[0];
		eq2 = document.getElementsByName("campoequipo4")[0];
		res1 = document.getElementsByName("finalista2")[0];
		res2 = document.getElementsByName("perdedor2")[0];
		res3 = document.getElementsByName("finalista1")[0];
		res4 = document.getElementsByName("perdedor1")[0];
		if(a > b){
			res1.setAttribute("value", eq1.value);
			res2.setAttribute("value", eq2.value);
			document.getElementsByName("nombrep3Equipo2")[0].setAttribute("value", eq1.value);
			document.getElementsByName("nombrep4Equipo2")[0].setAttribute("value", eq2.value);
		}else{
			res1.setAttribute("value", eq2.value);
			res2.setAttribute("value", eq1.value);
			document.getElementsByName("nombrep3Equipo2")[0].setAttribute("value", eq2.value);
			document.getElementsByName("nombrep4Equipo2")[0].setAttribute("value", eq1.value);
		}
		document.getElementsByName("resultado3")[0].setAttribute("value", res3.value + " vs " + res1.value);
		document.getElementsByName("resultado4")[0].setAttribute("value", res4.value + " vs " + res2.value);
	}else if(partido === "3"){
		eq1 = document.getElementsByName("finalista1")[0];
		eq2 = document.getElementsByName("finalista2")[0];
		res1 = document.getElementsByName("puesto1")[0];
		res2 = document.getElementsByName("puesto2")[0];
		if(a > b){
			res1.setAttribute("value", eq1.value);
			res2.setAttribute("value", eq2.value);
		}else{
			res1.setAttribute("value", eq2.value);
			res2.setAttribute("value", eq1.value);
		}
	}else if(partido === "4"){
		eq1 = document.getElementsByName("perdedor1")[0];
		eq2 = document.getElementsByName("perdedor2")[0];
		res1 = document.getElementsByName("puesto3")[0];
		res2 = document.getElementsByName("puesto4")[0];
		if(a > b){
			res1.setAttribute("value", eq1.value);
			res2.setAttribute("value", eq2.value);
		}else{
			res1.setAttribute("value", eq2.value);
			res2.setAttribute("value", eq1.value);
		}
	}
	
	
	ocultar();
}

function cerrar() {
	// referenciando los elementos del cuadro de dialogo
	var dialog = document.getElementsByTagName("dialog")[0];
	var aux = document.getElementsByName("partido")[0];
	var aux2 = document.getElementsByName("texto")[0];
	var geq1 = document.getElementsByName("Gequipo1")[0];
	var geq2 = document.getElementsByName("Gequipo2")[0];
	
	if (isNaN(geq1.value) || isNaN(geq2.value) || (geq1.value < 0) || (geq2.value < 0) || (geq1.value.length === 0) || (geq2.value.length === 0)) {
		alert("digite solo numeros mayores que 0");
	} else {
		if (aux2.value === "Penales:") {
			if (geq1.value === geq2.value){
				alert("No se puede quedar en empate");
			}else{
				var respeq1 = document.getElementsByName("respp"+ aux.value + "Equipo1")[0];
				var respeq2 = document.getElementsByName("respp"+ aux.value + "Equipo2")[0];
				var eq1 = document.getElementsByName("equipo1")[0];
				var eq2 = document.getElementsByName("equipo2")[0];

				respeq1.setAttribute("value", geq1.value);
				respeq2.setAttribute("value", geq2.value);
				
				registrarResultado(aux.value, geq1.value, geq2.value);
				dialog.close();
			}
		} else if (aux2.value === "Tiempo complementario:") {
			var restceq1 = document.getElementsByName("restcp"+ aux.value + "Equipo1")[0];
			var restceq2 = document.getElementsByName("restcp"+ aux.value + "Equipo2")[0];
			var eq1 = document.getElementsByName("equipo1")[0];
			var eq2 = document.getElementsByName("equipo2")[0];
			
			restceq1.setAttribute("value", geq1.value);
			restceq2.setAttribute("value", geq2.value);
			
			if (geq1.value === geq2.value){
				abrir("Penales:",eq1.value, eq2.value, aux.value);
			}else{
				registrarResultado(aux.value, geq1.value, geq2.value);
				dialog.close();
			}
			
		} else {
			var reseq1 = document.getElementsByName("resp"+ aux.value + "Equipo1")[0];
			var reseq2 = document.getElementsByName("resp"+ aux.value + "Equipo2")[0];
			var eq1 = document.getElementsByName("equipo1")[0];
			var eq2 = document.getElementsByName("equipo2")[0];
			
			reseq1.setAttribute("value", geq1.value);
			reseq2.setAttribute("value", geq2.value);
			
			if (geq1.value === geq2.value){
				abrir("Tiempo complementario:",eq1.value, eq2.value, aux.value);
			}else{
				registrarResultado(aux.value, geq1.value, geq2.value);
				dialog.close();
			}
		}
	}
}