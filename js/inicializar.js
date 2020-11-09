const cidades = [
  {
      id: 0,
      cidade: 'Curitiba, Bra',
      img: 'images/img-curitiba.jpg',
  },
  {
      id: 1,
      cidade: 'Natal, Bra',
      img: 'images/img-natal.jpg',
  },
  {
      id: 2,
      cidade: 'Fortaleza, Bra',
      img: 'images/img-fortaleza.jpg',
  },
  {
    id: 3,
    cidade: '',
    img: 'images/blank.png',
},
]

const infoClimaticas = [
  {
    id: 0,
    dia: 'Domingo',
    data: '08 de Novembro',
    chuvaIcon: 'font/droplet.png',
    chuvaValor: 54,
    climaIcon: 'font/sun.png',
    temperaturaMinima: 23,
    temperaturaMaxima: 30,
    temperaturaMedia: 27,
    sensacaoTermica: 26,
    porDoSol: '17:15',
    chanceDeChuva: {
      faixa1: 100,
      faixa2: 80,
      faixa3: 60,
      faixa4: 80,
      faixa5: 120,
      faixa6: 135,
    },
  }, /* Dom */
  {
    id: 1,
    dia: 'Segunda',
    data: '09 de Novembro',
    chuvaIcon: 'font/droplet.png',
    chuvaValor: 60,
    climaIcon: 'font/cloud-rain.png',
    temperaturaMinima: 16,
    temperaturaMaxima: 29,
    temperaturaMedia: 23,
    sensacaoTermica: 22,
    porDoSol: '17:10',
    chanceDeChuva: {
      faixa1: 115,
      faixa2: 95,
      faixa3: 75,
      faixa4: 60,
      faixa5: 85,
      faixa6: 120,
    },
  }, /* Seg */
  {
    id: 2,
    dia: 'Terça',
    data: '10 de Novembro',
    chuvaIcon: 'font/droplet.png',
    chuvaValor: 51,
    climaIcon: 'font/sun.png',
    temperaturaMinima: 25,
    temperaturaMaxima: 33,
    temperaturaMedia: 29,
    sensacaoTermica: 27,
    porDoSol: '17:20',
    chanceDeChuva: {
      faixa1: 85,
      faixa2: 65,
      faixa3: 45,
      faixa4: 70,
      faixa5: 90,
      faixa6: 85,
    },
  }, /* Ter */
  {
    id: 3,
    dia: 'Quarta',
    data: '11 de Novembro',
    chuvaIcon: 'font/droplet.png',
    chuvaValor: 49,
    climaIcon: 'font/sun.png',
    temperaturaMinima: 18,
    temperaturaMaxima: 32,
    temperaturaMedia: 25,
    sensacaoTermica: 27,
    porDoSol: '17:15',
    chanceDeChuva: {
      faixa1: 80,
      faixa2: 60,
      faixa3: 40,
      faixa4: 60,
      faixa5: 75,
      faixa6: 70,
    },
  }, /* Qua */
  {
    id: 4,
    dia: 'Quinta',
    data: '12 de Novembro',
    chuvaIcon: 'font/droplet.png',
    chuvaValor: 54,
    climaIcon: 'font/sun.png',
    temperaturaMinima: 20,
    temperaturaMaxima: 32,
    temperaturaMedia: 28,
    sensacaoTermica: 26,
    porDoSol: '17:15',
    chanceDeChuva: {
      faixa1: 100,
      faixa2: 80,
      faixa3: 60,
      faixa4: 80,
      faixa5: 120,
      faixa6: 135,
    },
  }, /* Qui */
  {
    id: 5,
    dia: 'Sexta',
    data: '13 de Novembro',
    chuvaIcon: 'font/droplet.png',
    chuvaValor: 54,
    climaIcon: 'font/cloud-lightning.png',
    temperaturaMinima: 20,
    temperaturaMaxima: 30,
    temperaturaMedia: 28,
    sensacaoTermica: 26,
    porDoSol: '17:15',
    chanceDeChuva: {
      faixa1: 85,
      faixa2: 95,
      faixa3: 75,
      faixa4: 60,
      faixa5: 65,
      faixa6: 80,
    },
  }, /* Sex */
  {
    id: 6,
    dia: 'Sábado',
    data: '14 de Novembro',
    chuvaIcon: 'font/droplet.png',
    chuvaValor: 54,
    climaIcon: 'font/cloud.png',
    temperaturaMinima: 20,
    temperaturaMaxima: 32,
    temperaturaMedia: 28,
    sensacaoTermica: 26,
    porDoSol: '17:15',
    chanceDeChuva: {
      faixa1: 100,
      faixa2: 80,
      faixa3: 60,
      faixa4: 80,
      faixa5: 120,
      faixa6: 135,
    },
  }, /* Sab */
]

mostrarCidades = () => {
  var cidade = document.getElementById('cities');
  cidades.map((val)=>{
    cidade.innerHTML+= `

    <div class="img-single">
      <img src="`+val.img+`" alt="`+val.cidade+`" />
      <p class="single-label">`+val.cidade+`</p>
    </div>
    
    `;
  })
}

mostrarCidades();

mostrarInfoSemana = () => {
  var infoDia = document.getElementById('forecasts');
  infoClimaticas.map((val)=>{
    infoDia.innerHTML+= `

    <li>
      <div class="forecast">
        <p class="weekday">`+val.dia+`</p>
        
        <div class="humidity">
          <img class="humidity-icon" src="`+val.chuvaIcon+`" />
          <p class="humidity-value">`+val.chuvaValor+`%</p>
        </div>

        <div class="weather">
          <img class="weather-icon" src="`+val.climaIcon+`" />

          <div class="min-value">`+val.temperaturaMinima+` °C</div>

          <div class="min-graphic">
            <div class="max-dotbar"></div>
            <div class="min-value-dotbar"></div>
            <div class="clear"></div>
          </div>

          <div class="max-graphic">
            <div class="max-dotbar"></div>
            <div class="max-value-dotbar"></div>
          </div>

          <div class="max-value">`+val.temperaturaMaxima+` °C</div>
        </div>
      </div>
    </li>
    
    `;
  })
}

mostrarInfoSemana();

mostrarInfoDataHoje = () => {
  var dataHoje = document.getElementById('dateToday');
  dataHoje.innerHTML+= `
  
    <div class="date-container">
      <div class="icon-weather">
        <img src="`+infoClimaticas[1].climaIcon+`" />
      </div>

      <div class="today-weather">
        <h1>Hoje</h1>
        <p>Segunda, `+infoClimaticas[1].data+`</p>
      </div>
    </div>
  `;
}

mostrarInfoDataHoje();

mostrarClimaCidadeHoje = () => {
  var climaHoje = document.getElementById('weatherToday');
  climaHoje.innerHTML+= `
  
    <div class="value-container">
      <h1>`+infoClimaticas[1].temperaturaMedia+`</h1>
      <span>°C</span>
    </div>

    <div class="cidade-container">
      <p>`+cidades[1].cidade+`</p>
    </div>

    <div class="sensacao-container">
      <p>Sensação de `+infoClimaticas[1].sensacaoTermica+` °C</p>
      <div class="dot"></div>
      <p>Por do sol `+infoClimaticas[1].porDoSol+`</p>
    </div>
  `;
}

mostrarClimaCidadeHoje();
