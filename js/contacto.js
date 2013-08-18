function filematch (file) {
	// body...

	good = 	new Array (".doc",".docx");
	if (file == "") {

		return true;
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
		nombre = $('input[name="nombre"]').val();
		correo = $('input[name="email"]').val();
		chkmail = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
		asunto = $('input[name="asunto"]').val();
		mensaje = $('textarea[name="mensaje"]').val();
		cv = $('input[name="cv"]').val();
		$('div#response').empty();
		if (nombre == "") {

			$('div#response').append('Campo de nombre vacio\n');
			$('input[name="nombre"]').focus();
			return false;
		}

		if (correo == "" || !chkmail.test(correo)) {

			$('div#response').append('Correo Inválido\n');
			$('input[name="email"]').focus();
			return false;
		}
		if (asunto == "") {

			$('div#response').append('Campo de asunto vacio\n');
			$('input[name="asunto"]').focus();
			return false;
		}
		if (mensaje == "") {

			$('div#response').append('No hay mensaje\n');
			$('input[name="mensaje"]').focus();
			return false;
		}
		if (!filematch(cv)) {

			$('div#response').append('Archivo Inválido\n');
			$('input[name="cv"]').focus();
			return false;
		} else {

			$.post('mail.php', $('form').serialize());
			return false;
		};
	});
	
});