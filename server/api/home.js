export default defineEventHandler((event) => {
  const offers = [
    {
      id: 1, 
      title: 'Шенген виза',
      subtitle: 'Виза в Европу',
      title_2: 'Мы ценим ваше время',
      text: 'Именно поэтому собрали всю информацию косательно виз в одном месте.',
      list: [
        'Консультируем и проверяем документы.',
        'Бронируем авиабилеты и отель.',
        'Заполняем все документы, в соответсвии с требованиями посольства.',
      ],
      img: 'visa.webp',
    },
    {
      id: 2, 
      title: 'Рабочая виза',
      subtitle: 'Виза в Европу',
      title_2: 'Рабочая виза это просто',
      text: 'Узнайте подробности про рабочую визу, список необходимых документов, условия и стоимость.',
      list: [
        'Консультируем и проверяем документы.',
        'Находим работодателя.',
        'Готовим приглашение на работу, страховку.',
        'Бронируем авиабилеты и отель.',
        'Заполняем все документы, в соответсвии с требованиями посольства.',
      ],
      img: 'visa.webp',
    },
    {
      id: 3, 
      title: 'ВНЖ Словакия/Чехия',
      subtitle: 'Вид на жительство',
      title_2: 'ВНЖ до 2х лет',
      text: 'Узнайте подробности вид на жительство в Европе, список необходимых документов, условия и стоимость.',
      list: [
        'Консультируем и проверяем документы.',
        'Бронируем авиабилеты и отель.',
        'Заполняем все документы, в соответсвии с требованиями посольства.',
        'Записываем в посольство.',
      ],
      img: 'visa.webp',
    },

  ]
  return offers
})