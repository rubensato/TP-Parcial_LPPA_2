//ARCHIVO JS PARA LA APP DEL CLIMA - PARCIAL 2 DE UAI LPPA 2021


//******* VARIABLES *********/
//inicializo el codigo de ciudad con el de Rosario, Santa Fe
var codigoCiudad = 3838583;


// function climaActual(codigoCiudad) {
    fetch('http://api.openweathermap.org/data/2.5/weather?id='+ codigoCiudad +'&lang=es&appid=9faa10eb7e7327f87d533a5993817491')
    .then(response => response.json())
    .then(data => {
        //todos los datos
        console.log(data);

        //icono de tiempo
        console.log(data.weather[0].icon);
        var iconcode = data.weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        var imagenClima = document.getElementById('imagenClimaActual');
        imagenClima.src = iconurl;

        //temperatura convertida de kelvin a grados centigrados
        console.log(Math.round(data.main.temp - 273));
        var temperatura = document.getElementById('tempNumero');
        temperatura.textContent = Math.round(data.main.temp - 273);
        //condicion de tiempo
        console.log(data.weather[0].description);
        var nubosidad = document.getElementById('textoNubosidad');
        nubosidad.textContent = data.weather[0].description;


        //Indicadores
        //sensacion termica
        console.log(Math.round(data.main.feels_like - 273));
        var temperaturaST = document.getElementById('valorST');
        temperaturaST.textContent = Math.round(data.main.feels_like - 273) + '°C';
        //vientos
        console.log(data.wind.speed);
        var vientos = document.getElementById('valorVientos');
        vientos.textContent = data.wind.speed + ' km/h';
        //Salida y Puesta del Sol
        console.log(data.sys.sunrise);
        console.log(data.sys.sunset);
        
        var sec1 = data.sys.sunrise;
        var date1 = new Date(sec1 * 1000);
        var horaSalida = date1.toLocaleTimeString();
        console.log(horaSalida);

        var sec2 = data.sys.sunset;
        var date2 = new Date(sec2 * 1000);
        var horaPuesta = date2.toLocaleTimeString();
        console.log(horaPuesta);

        var horariosol = document.getElementById('valorHoras');
        horariosol.textContent = horaSalida + ' hs ' + horaPuesta + ' hs';

        //humedad
        console.log(data.main.humidity);
        var humedad = document.getElementById('valorHumedad');
        humedad.textContent = data.main.humidity + ' %';
        //visibilidad
        console.log(data.visibility/1000);
        var visibilidad = document.getElementById('valorVisibilidad');
        visibilidad.textContent = data.visibility/1000 + ' km';
        //presio
        console.log(data.main.pressure);
        var presion = document.getElementById('valorPresion');
        presion.textContent = data.main.pressure + ' hPa';
    })
// }


