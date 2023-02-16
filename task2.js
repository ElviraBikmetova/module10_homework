// Задание 2.
// Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert.

const btn = document.querySelector('.j-btn-test');
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

btn.addEventListener('click', () => {
  alert(`Размеры этого экрана: ${screenWidth}x${screenHeight}`);
});