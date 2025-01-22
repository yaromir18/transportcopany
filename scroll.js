// Функция для проверки видимости элементов
function checkVisibility() {
    const hiddenElements = document.querySelectorAll('.hidden');

    hiddenElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

        // Проверяем, виден ли элемент на экране
        if (rect.top <= windowHeight - 100 && rect.bottom >= 0) {
            el.classList.add('visible');
        }
    });
}

// Запускаем проверку при загрузке страницы
document.addEventListener('DOMContentLoaded', checkVisibility);

// Запускаем проверку при прокрутке страницы
window.addEventListener('scroll', checkVisibility);
//=---------------------






