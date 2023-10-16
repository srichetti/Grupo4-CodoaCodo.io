// JavaScript for the image carousel
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel img');

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Initial display
showImage(currentImageIndex);

// Auto-advance the carousel
setInterval(nextImage, 3000); // Change image every 3 seconds

//Get Btn And Create Function
document.getElementById('myBtn').addEventListener('click', getData)

function getData() {

    //Get API
    fetch('https://randomuser.me/api/?results=100')
        .then(res => res.json())
        .then(data => {
            // console.log(data)

            let author = data.results
            // console.log(author)

            //Get Data Value
            let output = "<h2><center>Get User Data</center></h2>"

            //Get Data Loop Through
            author.forEach(function (lists) {
                output += `
                <div class="container">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">
                            <li class="list-group-item"><h2>Nombre: ${lists.name.first}</h2></li>
                            <li class="list-group-item"><img src="${lists.picture.large}"></li>
                            <li class="list-group-item">Teléfono: ${lists.cell}</li>
                            <li class="list-group-item">Correo electrónico: ${lists.email}</li>
                        </ul>
                    </div>
                </div> `
            })

            //Show On Our Screen All Data
            document.getElementById('output').innerHTML = output
        })
}
