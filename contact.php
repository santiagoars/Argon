<?php

    if (isset($_POST['submit'])) {
        $nombre = $_POST['nombre'];
        $telefono = $_POST['telefono'];
        $email = $_POST['email'];
        $mensaje = $_POST['mensaje'];

        $mailTo = "santiagoaragon@grupoargon.co";
        $mailTo2 = "diego@grupoargon.co";
        $headers = "From: ".$email;
        $txt = "Mensaje ".$nombre.".\n\n".$mensaje.".\n\n"."Mi telefono es: ".$telefono;
        $asunto = "Haz recibido una oferta de: ".$nombre;

        mail($mailTo, $asunto, $txt, $headers);
        mail($mailTo2, $asunto, $txt, $headers);
        header("Location: index.html?mailsend");
}
