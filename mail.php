<?php
	//Recoger las variables provenientes de contacto.js
	$nombre = $_POST['nombre'];
	$correo = $_POST['correo'];
	$asunto = $_POST['asunto'];
	$mensaje = $_POST['mensaje'];
	$cv = $_POST['cv']; //Esta variable la conservo para hacer la validacion del mimetype

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
				
				//Aqui es donde realmente subo el archivo al servidor
				move_uploaded_file($_FILES['cv']['tmp_name'],'curricula/upload/'.$_FILES['cv']['name']);
				$msg = "Remitente: ".$nombre;
				$msg .= "\nCorreo Electrónico: ".$correo;
				$msg .= "\nMensaje: ".$mensaje;
				
				mail("remo.loaiza@go-sharp.net", $asunto, $msg);
				echo "Bien!"

			} else {echo "Error en el archivo subido";}

		} else { echo "Error en el correo dado"; }

	} else { echo "Error en los campos"; }

