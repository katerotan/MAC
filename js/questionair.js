 const randomImageElement = document.getElementById('randomImage');

  randomImageElement.addEventListener('click', () => {
    // Генерация случайного числа для выбора изображения
    const randomImageNumber = Math.floor(Math.random() * 10) + 1; // Замените 10 на количество изображений

    // Формирование пути к изображению
    const imagePath = `url('./images/allegories-deck/allegories_0${randomImageNumber}.jpg')`;

    // Установка фонового изображения
    randomImageElement.style.background = `${imagePath}, linear-gradient(180deg, #5b5a8f 0.09%, #c18fc5 99.91%)`;
  });