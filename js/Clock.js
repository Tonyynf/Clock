

function relogioMundial() {
    const data = new Date()

    const horas = data.getHours()
    const minutos = data.getMinutes()
    const segundos = data.getSeconds()

    const hora = `${horas}` < 10 ? `0${horas}` : `${horas}`
    const minuto = `${minutos}` < 10 ? `0${minutos}` : `${minutos}`
    const segundo = `${segundos}` < 10 ? `0${segundos}` : `${segundos}`

    const clock = document.getElementById("clock")
    clock.innerHTML = `${hora}:${minuto}:${segundo}`
}

setInterval(() => relogioMundial(), 1000)

function horaDia() {
    const img = document.getElementById("image")
    const time = document.getElementById("text")

    const date = new Date()
    const hour = date.getHours()



    if (hour >= 0 && hour <= 4) {
        time.innerHTML = `Boa madrugada! <br> Dev👨‍💻`
    } else if (hour >= 5 && hour <= 11) {
        time.innerHTML = `Bom dia! <br> ☕🍳`
        img = img.src = "./imgs/Morning.jpg"

    } else if (hour >= 12 && hour <= 17) {
        time.innerHTML = `Boa tarde! <br> 🌞🍽️`
        img = img.src = "./imgs/Afternoon.jpg"

    } else {
        time.innerHTML = `Boa noite! <br> 🌃✨`
        img = img.src = "./imgs/Evening.jpg"
    }
}


