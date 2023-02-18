// Задание 2.
// Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert.

const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click', () => {
  alert(`Размеры этого экрана: ${window.screen.width}x${window.screen.height}px`);
});