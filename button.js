// Получаем элементы
const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');
const closeButton = document.querySelector('.close-button');

// Обработчик события для отправки формы
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем стандартное поведение формы

    // Здесь вы можете добавить код для отправки данных на сервер.

    // Показываем модальное окно
    successModal.style.display = 'block';
});

// Обработчик события для закрытия модального окна
closeButton.addEventListener('click', function() {
    successModal.style.display = 'none';
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', function(event) {
    if (event.target === successModal) {
        successModal.style.display = 'none';
    }
});

