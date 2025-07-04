
        function abrirLogin() {
            document.getElementById("modal-login").style.display = "block";
        }

        function abrirRegistro() {
            document.getElementById("modal-registro").style.display = "block";
        }

        function cerrarModales() {
            document.getElementById("modal-login").style.display = "none";
            document.getElementById("modal-registro").style.display = "none";
        }

        // Cerrar si se hace clic fuera
        window.onclick = function (e) {
            if (e.target.classList.contains("modal")) {
                cerrarModales();
            }
        };
