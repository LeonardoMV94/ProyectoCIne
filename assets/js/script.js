

const inputText = document.querySelector('#username')
const labelText = document.querySelector('#basic-addon1')

if(inputText != null){
    inputText.addEventListener('keyup', (event) => {
        console.log(event.key)
        labelText.innerHTML +=  event.key
        if(event.key === "Backspace" || event.key === "Delete"){
            labelText.innerHTML = 'Nombre ' + inputText.value
        }
    })
}