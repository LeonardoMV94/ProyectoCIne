const inputText = document.querySelector('#username')
const labelText = document.querySelector('#basic-addon1')
const carteleraElement = document.querySelector('#cartelera')

if(inputText != null){
    inputText.addEventListener('keyup', (event) => {
        console.log(event.key)
        labelText.innerHTML +=  event.key
        if(event.key === "Backspace" || event.key === "Delete"){
            labelText.innerHTML = 'Nombre ' + inputText.value
        }
    })
}

const cartelera = [
    {  nombre: "Wolverine", imagenUrl: "url", descripcion: ""},
    {  nombre: "Wolverine", imagenUrl: "url", descripcion: ""},
    {  nombre: "Wolverine", imagenUrl: "url", descripcion: ""},
    {  nombre: "Wolverine", imagenUrl: "url", descripcion: ""},
    {  nombre: "Wolverine", imagenUrl: "url", descripcion: ""},
    {  nombre: "Wolverine", imagenUrl: "url", descripcion: ""},
    {  nombre: "Wolverine", imagenUrl: "url", descripcion: ""},
    {  nombre: "Wolverine", imagenUrl: "url", descripcion: ""},
    {  nombre: "Wolverine", imagenUrl: "url", descripcion: ""},
]

const llenarDatos = (pelicula) => {
    const template = `
     <div class="card ">
          <img
            src="${pelicula.imagenUrl}"
            class="card-img-top img-fluid w-150 h-300" alt="...">
          <div class="card-body">
            <h5 class="card-title">${pelicula.nombre}</h5>
            <p class="card-text">${pelicula.descripcion}
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Ultima funcion</small>
          </div>
        </div>
    `
    return template
}

cartelera.map((pelicula) => {
    carteleraElement.innerHTML += llenarDatos(pelicula)
})
