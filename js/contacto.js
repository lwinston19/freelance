function filematch (file) {
	// body...

	good = 	new Array (".doc",".docx");
	if (file == "") {

		return false;
	} else {

		ext = (file.substring(file.lastIndexOf("."))).toLowerCase();
		match = false;
		
		for (var i = 0; i < good.length; i++) {
			if (good[i] == ext) {

				match = true;
				break;
			};
		};

		if (!match) {

			return false;
		} else {

			return true;
		};

	};

}

$(document).ready(function () {
	// body...

	$('.sender').click(function () {
		// body...
		var nombre = $('input[name="nombre"]').val();
		correo = $('input[name="email"]').val();
		chkmail = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
		asunto = $('input[name="asunto"]').val();
		mensaje = $('textarea[name="mensaje"]').val();
		cv = $('input[name="cv"]').val();

		if (nombre == "") {

			alert("Campo de nombre vacio");
			$('input[name="nombre"]').focus();
			return false;
		} else if (correo == "" || !chkmail.test(correo)) {

			alert("Correo Inválido");
			$('input[name="email"]').focus();
			return false;
		} else if (asunto == "") {

			alert("Campo de asunto vacio");
			$('input[name="asunto"]').focus();
			return false;
		} else if (mensaje == "") {

			alert("No hay mensaje");
			$('input[name="mensaje"]').focus();
			return false;
		} else if (!filematch(cv)) {

			alert("Archivo Inválido");
			$('input[name="cv"]').focus();
			return false;
		} else {

			info = 'nombre='+ nombre + '&correo=' + correo + '&asunto=' + asunto + '&mensaje=' + mensaje + '&cv=' + cv;

			$.ajax({
				type : "POST",
				url : "mail.php",
				data : info,
				success : function () {
					// body...
					alert("Mensaje Enviado!");
				},
				error : function () {
					// body...
					alert("Error de envio");
				}
			});
			return false;
		};
	});
	
});