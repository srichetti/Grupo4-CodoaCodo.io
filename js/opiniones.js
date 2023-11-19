let contenido = document.querySelector('#contenido')
function traerMultiples() {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(res => {
            console.log(res)
            let contenidoHTML = ''

            for (let i = 0; i < res.results.length; i++) {
                contenidoHTML += `
                    <div class="usuario">
                        <img src="${res.results[i].picture.large}" width="100px" class="img-fluid rounded-circle">
                        <h4> ${res.results[i].name.first} ${res.results[i].name.last}</h4>
                        <h6> ${res.results[i].location.country}</h6>
                        <a href="${res.results[i].email}" target="_blank">${res.results[i].email}</a></p>
                    </div>
                `
            }

            contenido.innerHTML = contenidoHTML
        })
        .catch(error => console.log("Ocurrió un error", error))
}
traerMultiples()