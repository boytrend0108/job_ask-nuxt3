export default defineEventHandler((event) => {
  const countries = [
    {
      id: 'slovakii', 
      title: 'Словакия',
      text: [
        'Словакия - вторая после Чехии богатая страна Вышеградской четверки. По данным Международного валютного фонда, ее номинальное ВВП на душу населения составляет 15 992 доллара. Это немного меньше, чем в Чехии (17257), однако больше, чем в Польше (12495 долл.) И Венгрии (12 240 долл.).',
        'Среди посткоммунистических стран-членов ЕС, выше, чем в Словакия показатель ВВП на душу населения имеет только Словения, Чехия и Эстония.',
      ], 
      img: 'slovakii.webp',
      price: 3550,
    },
    {
      id: 'ch', 
      title: 'Чехия',
      text: [
        'В Чехии существуют отличные условия, защищающие малый и крупный бизнес, поэтому Ваши дела в этой стране пойдут в гору.',
        'Безупречное европейское законодательство стоит на страже Ваших прав и интересов.',
      ], 
      img: 'cheh.webp',
      price: 3700,
    }
  ]


  return countries
})