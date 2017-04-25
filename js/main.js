function translate(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];

	title.innerHTML = "Por favor inicia sesión";
	email.placeholder = "Correo electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar sesión";
}

translate();

function mostrar(){
	var mail = document.getElementById("inputEmail").value;
	var passw = document.getElementById("inputPassword").value;
	alert ("Datos de formulario" + "\n" + "El correo ingresado es: " + "\n"+ mail +"\n" + "La clave ingresada es: " + "\n" + passw);
};


       