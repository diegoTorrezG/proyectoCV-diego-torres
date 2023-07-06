console.log("load JS final aqui es........")

function saveForm(){

    let nameForm = document.getElementById("name");
    let lastNameForm = document.getElementById("lastName");
    let countryForm = document.getElementById("country");
    let emailForm = document.getElementById("email");


    let form = {
        name: nameForm.value,
        lastName: lastNameForm.value,
        email: emailForm.value,
        country: countryForm.value
    }

    console.log(form);

    let url = "http://localhost:8000/api/form";
    let params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(form),
    }

    fetch(url, params).then(response =>{
        console.log(response);

        if(response.status == 201){
            alert("Formulario enviado");
        }else{
            alert("Error en el envio del formuario");
        }
    });
    return true;
}