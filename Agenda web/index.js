function getDatos(){
        fetch("http://www.raydelto.org/agenda.php").then(
            function(captura){
                return captura.json();
            }
        ).then(
            function(captura)
            {
               var txtNombre = document.getElementById("txtNombre");
               var txtApellido = document.getElementById("txtApellido");
               var txtTelefono = document.getElementById("txtTelefono");
                txtNombre.innerHTML = captura[0].nombre;
                txtApellido.innerHTML = captura[0].apellido;
                txtTelefono.innerHTML = captura[0].telefono;
            }
        )
    }   



