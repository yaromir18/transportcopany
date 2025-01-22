// Переменные для карусели
const images = document.querySelectorAll('.carousel-img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Текущий индекс изображения
let currentIndex = 0;

// Функция для отображения текущего изображения
function showImage(index) {
    // Скрыть все изображения
    images.forEach((img) => {
        img.classList.remove('active');
    });
    // Показать текущее изображение
    images[index].classList.add('active');
}

// Функция для перехода к следующему изображению
function nextImage() {
    // Увеличить индекс
    currentIndex = (currentIndex + 1) % images.length; // Перейти к следующему или вернуться к первому
    showImage(currentIndex);
}

// Функция для перехода к предыдущему изображению
function prevImage() {
    // Уменьшить индекс
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Перейти к предыдущему или к последнему
    showImage(currentIndex);
}

// Обработчики событий для кнопок
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Показать первое изображение при загрузке
showImage(currentIndex);

//-------------------------------------------------------------------------------------------


