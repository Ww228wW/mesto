//  Открытие и закрытие блока popup
 let ButtonEdit = document.querySelector('.profile__edit-button');
 let popup = document.querySelector('.popup');
 let editlock = document.querySelector('.popup-close__btn');
ButtonEdit.onclick = function() {
popup.classList.toggle('popup__opened'); 
}
editlock.onclick = function() { 
popup.classList.toggle('popup__opened');
window.addEventListener('click', e => { // при клике в любом месте окна браузера
    const target = e.target // находим элемент, на котором был клик
    if (!target.closest('.popup-container') && !target.closest('.profile__edit-button')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
      popup.classList.remove('popup__opened') // то закрываем окно навигации, удаляя активный класс
    }
  })

}

// Редактирование профиля
let formElement = document.querySelector ('.popup-fields');
// Находим поля формы в DOM
let nameInput = document.querySelector ('.popup-form__input_name');
let jobInput = document.querySelector ('.popup-form__input_bio');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.               
    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
 let name = document.querySelector('.profile__name').textContent = nameInput.value;
 let bio = document.querySelector('.profile__bio').textContent = jobInput.value ;
    // Вставьте новые значения с помощью textContent
    name.textContent = nameInput;
    bio.textContent = jobInput;
}

// Прикрепляем обработчик к форме:

// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);


// // Открыть добавление 
// let ButtonProfile = document.querySelector('.profile__add-button');
// let emptylock = document.querySelector('.popup__empty');
// let emptylocks = document.querySelector('.popup-close__btn');
// ButtonProfile.onclick = function() {
// emptylock.classList.add('popup__opened'); 
// }
// emptylocks.onclick = function() {
// emptylock.classList.remove('popup__opened');
// }
