const cidadesTeste = [
  {
      id: 0,
      cidade: 'Curitiba, Bra',
      img: 'images/img-curitiba.jpg',
      data: {
        domingo: {
          data: '08 de Novembro',
          chuvaIcon: 'font/droplet.png',
          chuvaValor: 54,
          climaIcon: 'font/sun.png',
          temperaturaMinima: 23,
          temperaturaMaxima: 30,
          temperaturaMedia: 27,
          sensacaoTermica: 26,
          porDoSol: '17:15',
          chanceDeChuva: [ 100, 80, 60, 80, 120, 135 ],
        },
        segunda: {
          data: '09 de Novembro',
          chuvaIcon: 'font/droplet.png',
          chuvaValor: 60,
          climaIcon: 'font/cloud-rain.png',
          temperaturaMinima: 16,
          temperaturaMaxima: 29,
          temperaturaMedia: 23,
          sensacaoTermica: 22,
          porDoSol: '17:10',
          chanceDeChuva: [ 115, 95, 75, 60, 85, 120 ],
        },
        terca: {
          data: '10 de Novembro',
          chuvaIcon: 'font/droplet.png',
          chuvaValor: 51,
          climaIcon: 'font/sun.png',
          temperaturaMinima: 25,
          temperaturaMaxima: 33,
          temperaturaMedia: 29,
          sensacaoTermica: 27,
          porDoSol: '17:20',
          chanceDeChuva: [ 85, 65, 45, 70, 90, 85 ],
        },
        quarta: {
          data: '11 de Novembro',
          chuvaIcon: 'font/droplet.png',
          chuvaValor: 49,
          climaIcon: 'font/sun.png',
          temperaturaMinima: 18,
          temperaturaMaxima: 32,
          temperaturaMedia: 25,
          sensacaoTermica: 27,
          porDoSol: '17:15',
          chanceDeChuva: [ 80, 60, 40, 60, 75, 70 ],
        },
        quinta: {
          data: '12 de Novembro',
          chuvaIcon: 'font/droplet.png',
          chuvaValor: 54,
          climaIcon: 'font/sun.png',
          temperaturaMinima: 20,
          temperaturaMaxima: 32,
          temperaturaMedia: 28,
          sensacaoTermica: 26,
          porDoSol: '17:15',
          chanceDeChuva: [ 100, 80, 60, 80, 120, 135 ],
        },
        sexta: {
          data: '13 de Novembro',
          chuvaIcon: 'font/droplet.png',
          chuvaValor: 54,
          climaIcon: 'font/cloud-lightning.png',
          temperaturaMinima: 20,
          temperaturaMaxima: 30,
          temperaturaMedia: 28,
          sensacaoTermica: 26,
          porDoSol: '17:15',
          chanceDeChuva: [ 85, 95, 75, 60, 65, 80 ],
        },
        sabado: {
          data: '14 de Novembro',
          chuvaIcon: 'font/droplet.png',
          chuvaValor: 54,
          climaIcon: 'font/cloud.png',
          temperaturaMinima: 20,
          temperaturaMaxima: 32,
          temperaturaMedia: 28,
          sensacaoTermica: 26,
          porDoSol: '17:15',
          chanceDeChuva: [ 100, 80, 60, 80, 120, 135 ],
        },
      },
  },
  {
      id: 1,
      cidade: 'Natal, Bra',
      img: 'images/img-natal.jpg',
      data: {
        domingo: {
          data: '08 de Novembro',
          chuvaIcon: 'font/droplet.png',
          chuvaValor: 54,
          climaIcon: 'font/sun.png',
          temperaturaMinima: 23,
          temperaturaMaxima: 30,
          temperaturaMedia: 27,
          sensacaoTermica: 26,
          porDoSol: '17:15',
          chanceDeChuva: [ 100, 80, 60, 80, 120, 135 ],
        },
        segunda: {
          data: '09 de Novembro',
          chuvaIcon: 'font/droplet.png',
          chuvaValor: 60,
          climaIcon: 'font/cloud-rain.png',
          temperaturaMinima: 16,
          temperaturaMaxima: 29,
          temperaturaMedia: 23,
          sensacaoTermica: 22,
          porDoSol: '17:10',
          chanceDeChuva: [ 115, 95, 75, 60, 85, 120 ],
        },
        terca: {
          data: '10 de Novembro',
          chuvaIcon: 'font/droplet.png',
          chuvaValor: 51,
          climaIcon: 'font/sun.png',
          temperaturaMinima: 25,
          temperaturaMaxima: 33,
          temperaturaMedia: 29,
          sensacaoTermica: 27,
          porDoSol: '17:20',
          chanceDeChuva: [ 85, 65, 45, 70, 90, 85 ],
        },
        quarta: {
          data: '11 de Novembro',
          chuvaIcon: 'font/droplet.png',
          chuvaValor: 49,
          climaIcon: 'font/sun.png',
          temperaturaMinima: 18,
          temperaturaMaxima: 32,
          temperaturaMedia: 25,
          sensacaoTermica: 27,
          porDoSol: '17:15',
          chanceDeChuva: [ 80, 60, 40, 60, 75, 70 ],
        },
        quinta: {
          data: '12 de Novembro',
          chuvaIcon: 'font/droplet.png',
          chuvaValor: 54,
          climaIcon: 'font/sun.png',
          temperaturaMinima: 20,
          temperaturaMaxima: 32,
          temperaturaMedia: 28,
          sensacaoTermica: 26,
          porDoSol: '17:15',
          chanceDeChuva: [ 100, 80, 60, 80, 120, 135 ],
        },
        sexta: {
          data: '13 de Novembro',
          chuvaIcon: 'font/droplet.png',
          chuvaValor: 54,
          climaIcon: 'font/cloud-lightning.png',
          temperaturaMinima: 20,
          temperaturaMaxima: 30,
          temperaturaMedia: 28,
          sensacaoTermica: 26,
          porDoSol: '17:15',
          chanceDeChuva: [ 85, 95, 75, 60, 65, 80 ],
        },
        sabado: {
          data: '14 de Novembro',
          chuvaIcon: 'font/droplet.png',
          chuvaValor: 54,
          climaIcon: 'font/cloud.png',
          temperaturaMinima: 20,
          temperaturaMaxima: 32,
          temperaturaMedia: 28,
          sensacaoTermica: 26,
          porDoSol: '17:15',
          chanceDeChuva: [ 100, 80, 60, 80, 120, 135 ],
        },
      },
  },
  {
      id: 2,
      cidade: 'Fortaleza, Bra',
      img: 'images/img-fortaleza.jpg',
      data: {
        domingo: {
          data: '08 de Novembro',
          chuvaIcon: 'font/droplet.png',
          chuvaValor: 54,
          climaIcon: 'font/sun.png',
          temperaturaMinima: 23,
          temperaturaMaxima: 30,
          temperaturaMedia: 27,
          sensacaoTermica: 26,
          porDoSol: '17:15',
          chanceDeChuva: [ 100, 80, 60, 80, 120, 135 ],
        },
        segunda: {
          data: '09 de Novembro',
          chuvaIcon: 'font/droplet.png',
          chuvaValor: 60,
          climaIcon: 'font/cloud-rain.png',
          temperaturaMinima: 16,
          temperaturaMaxima: 29,
          temperaturaMedia: 23,
          sensacaoTermica: 22,
          porDoSol: '17:10',
          chanceDeChuva: [ 115, 95, 75, 60, 85, 120 ],
        },
        terca: {
          data: '10 de Novembro',
          chuvaIcon: 'font/droplet.png',
          chuvaValor: 51,
          climaIcon: 'font/sun.png',
          temperaturaMinima: 25,
          temperaturaMaxima: 33,
          temperaturaMedia: 29,
          sensacaoTermica: 27,
          porDoSol: '17:20',
          chanceDeChuva: [ 85, 65, 45, 70, 90, 85 ],
        },
        quarta: {
          data: '11 de Novembro',
          chuvaIcon: 'font/droplet.png',
          chuvaValor: 49,
          climaIcon: 'font/sun.png',
          temperaturaMinima: 18,
          temperaturaMaxima: 32,
          temperaturaMedia: 25,
          sensacaoTermica: 27,
          porDoSol: '17:15',
          chanceDeChuva: [ 80, 60, 40, 60, 75, 70 ],
        },
        quinta: {
          data: '12 de Novembro',
          chuvaIcon: 'font/droplet.png',
          chuvaValor: 54,
          climaIcon: 'font/sun.png',
          temperaturaMinima: 20,
          temperaturaMaxima: 32,
          temperaturaMedia: 28,
          sensacaoTermica: 26,
          porDoSol: '17:15',
          chanceDeChuva: [ 100, 80, 60, 80, 120, 135 ],
        },
        sexta: {
          data: '13 de Novembro',
          chuvaIcon: 'font/droplet.png',
          chuvaValor: 54,
          climaIcon: 'font/cloud-lightning.png',
          temperaturaMinima: 20,
          temperaturaMaxima: 30,
          temperaturaMedia: 28,
          sensacaoTermica: 26,
          porDoSol: '17:15',
          chanceDeChuva: [ 85, 95, 75, 60, 65, 80 ],
        },
        sabado: {
          data: '14 de Novembro',
          chuvaIcon: 'font/droplet.png',
          chuvaValor: 54,
          climaIcon: 'font/cloud.png',
          temperaturaMinima: 20,
          temperaturaMaxima: 32,
          temperaturaMedia: 28,
          sensacaoTermica: 26,
          porDoSol: '17:15',
          chanceDeChuva: [ 100, 80, 60, 80, 120, 135 ],
        },
      },
  },
  {
    id: 3,
    cidade: '',
    img: 'images/blank.png',
    data: {
      domingo: {
        data: '08 de Novembro',
        chuvaIcon: 'font/droplet.png',
        chuvaValor: 54,
        climaIcon: 'font/sun.png',
        temperaturaMinima: 23,
        temperaturaMaxima: 30,
        temperaturaMedia: 27,
        sensacaoTermica: 26,
        porDoSol: '17:15',
        chanceDeChuva: [ 100, 80, 60, 80, 120, 135 ],
      },
      segunda: {
        data: '09 de Novembro',
        chuvaIcon: 'font/droplet.png',
        chuvaValor: 60,
        climaIcon: 'font/cloud-rain.png',
        temperaturaMinima: 16,
        temperaturaMaxima: 29,
        temperaturaMedia: 23,
        sensacaoTermica: 22,
        porDoSol: '17:10',
        chanceDeChuva: [ 115, 95, 75, 60, 85, 120 ],
      },
      terca: {
        data: '10 de Novembro',
        chuvaIcon: 'font/droplet.png',
        chuvaValor: 51,
        climaIcon: 'font/sun.png',
        temperaturaMinima: 25,
        temperaturaMaxima: 33,
        temperaturaMedia: 29,
        sensacaoTermica: 27,
        porDoSol: '17:20',
        chanceDeChuva: [ 85, 65, 45, 70, 90, 85 ],
      },
      quarta: {
        data: '11 de Novembro',
        chuvaIcon: 'font/droplet.png',
        chuvaValor: 49,
        climaIcon: 'font/sun.png',
        temperaturaMinima: 18,
        temperaturaMaxima: 32,
        temperaturaMedia: 25,
        sensacaoTermica: 27,
        porDoSol: '17:15',
        chanceDeChuva: [ 80, 60, 40, 60, 75, 70 ],
      },
      quinta: {
        data: '12 de Novembro',
        chuvaIcon: 'font/droplet.png',
        chuvaValor: 54,
        climaIcon: 'font/sun.png',
        temperaturaMinima: 20,
        temperaturaMaxima: 32,
        temperaturaMedia: 28,
        sensacaoTermica: 26,
        porDoSol: '17:15',
        chanceDeChuva: [ 100, 80, 60, 80, 120, 135 ],
      },
      sexta: {
        data: '13 de Novembro',
        chuvaIcon: 'font/droplet.png',
        chuvaValor: 54,
        climaIcon: 'font/cloud-lightning.png',
        temperaturaMinima: 20,
        temperaturaMaxima: 30,
        temperaturaMedia: 28,
        sensacaoTermica: 26,
        porDoSol: '17:15',
        chanceDeChuva: [ 85, 95, 75, 60, 65, 80 ],
      },
      sabado: {
        data: '14 de Novembro',
        chuvaIcon: 'font/droplet.png',
        chuvaValor: 54,
        climaIcon: 'font/cloud.png',
        temperaturaMinima: 20,
        temperaturaMaxima: 32,
        temperaturaMedia: 28,
        sensacaoTermica: 26,
        porDoSol: '17:15',
        chanceDeChuva: [ 100, 80, 60, 80, 120, 135 ],
      },
    },
},
]

mostrarChanceDeChuvaHora = () => {
  var hora = document.getElementById('rateRainHour');
  var color;
  var faixaHora;

  for(var i = 0; i < 6; i++) {
    if (i == 0) {
      faixaHora = '08AM';
    } else if(i == 1) {
      faixaHora = '12PM';
    } else if (i == 2) {
      faixaHora = '16PM';
    } else if (i == 3) {
      faixaHora = '20PM';
    } else if (i == 4) {
      faixaHora = '00AM'; 
    } else if (i ==5) {
      faixaHora = '04AM';
    }

    if (cidadesTeste[1].data['domingo'].chanceDeChuva[i] <= 70) {
      var color = 'yellow';
    } else {
      var color = 'purple';
    }

    hora.innerHTML+= `

    <div class="graphic-area">
      <div class="graphic-bar">
        <div class="max-dotbar"></div>
        <div class="value-dotbar h`+cidadesTeste[1].data['domingo'].chanceDeChuva[i]+` `+color+`"></div>
      </div>

      <div class="x-Area">
        <p>`+faixaHora+`</p>
      </div>
    </div>
    
    `;
  }
}

mostrarChanceDeChuvaHora();
