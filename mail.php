<?php
	//Recoger las variables provenientes de contacto.js
	$nombre = $_POST['nombre'];
	$correo = $_POST['correo'];
	$asunto = $_POST['asunto'];
	$mensaje = $_POST['mensaje'];
	$cv = $_POST['cv'];

	//Sanitizacion de campos

	$nombre = htmlentities($nombre);
	$correo = htmlentities($correo);
	$asunto = htmlentities($asunto);
	$mensaje = htmlentities($mensaje);

	//Revalidacion de Campos

	if ($nombre != '' && $correo != '' && $asunto != '' && $mensaje != '') {
		
		//Validacion del correo electronico
		if (preg_match("/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/", $correo)) {
			
			//Validacion del MIMETYPE
			if (mime_content_type($cv) == "application/msword" || mime_content_type($cv) == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
				
				$msg = "Remitente: ".$nombre;
				$msg .= "\nCorreo Electrónico: ".$correo;
				$msg .= "\nMensaje: ".$mensaje;
				$msg .= "\nCurriculum: ".$cv;
				mail("remo.loaiza@go-sharp.net", $asunto, $cv);
			}
		}

	}

