// Задание 1.
// Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео). При клике на кнопку иконка должна меняться на icon_02. Повторный клик меняет иконку обратно.

const btn = document.querySelector('.j-btn-test');
const btnIcon1 = document.querySelector('.btn_icon1');
const btnIcon2 = document.querySelector('.btn_icon2');

btn.addEventListener('click', () => {
  btnIcon1.classList.toggle('hide');
  btnIcon2.classList.toggle('hide');
});