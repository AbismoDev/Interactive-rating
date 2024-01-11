function submitFeedback(){
    //Aqui pegamos todos os inputs, eles voltam como NodeList
    let inputRadio = document.querySelectorAll('input[type="radio"]')
    let rating
    //Aqui percorremos os inputs até pegar o selecionado que precisamos
    inputRadio.forEach((radio) => {
        if(radio.checked){
            rating = radio.value
        }
    })    

    if(rating == undefined){
        alert('Please give us feedback')
    }else{
        document.getElementById('frating').style.display = 'none'
        document.getElementById('fthank').style.display = 'flex'
        document.getElementById('ratingNota').innerHTML = rating
    }       
}