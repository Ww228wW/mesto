// Попапы
const popEdit = document.querySelector(".popup_edit")
const popAdd = document.querySelector(".popup_add")
const popPhoto = document.querySelector(".popup_photo")

// Кнопки
const popEditBtn = document.querySelector(".profile__edit-button")
const popAddBtn = document.querySelector(".profile__add-button")
const popCloseBtn = document.querySelectorAll(".popup__container-close")

// Формы
const elems = document.querySelector(".elements")
const popform = document.querySelector(".popup__form")
const formAdd = popAdd.querySelector(".popup__form")

// Изменение значений 
const inpName = document.querySelector(".popup__form-input_name")
const inpBio = document.querySelector(".popup__form-input_bio")
const proName = document.querySelector(".profile__name")
const proBio = document.querySelector(".profile__bio")

// Значения для карточки 
const popAddTitle = popAdd.querySelector(".popup__form-input_title")
const popAddLink = popAdd.querySelector(".popup__form-input_link")

// Данные карточки
const popImage = popPhoto.querySelector(".popup__image")
const popImageText = popPhoto.querySelector(".popup__photo-text")

// Массив 
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
]

popEditBtn.addEventListener("click", function() {
	openPopup(popEdit)
	inpName.value = proName.textContent
	inpBio.value = proBio.textContent
})

function handleFormSubmit(evt) {
	evt.preventDefault()
	proName.textContent = inpName.value
	proBio.textContent = inpBio.value
	closePopup(popEdit)
}

function openPopup(e) {
	e.classList.add("popup_opened")
}
popAddBtn.addEventListener("click", function() {
	openPopup(popAdd)
})

function closePopup(popup) {
	popup.classList.remove("popup_opened")
}
popCloseBtn.forEach((closeButton) => {
	const popup = closeButton.closest(".popup")
	closeButton.addEventListener("click", () => closePopup(popup))
})
popform.addEventListener("submit", handleFormSubmit)

function openImagePop(image, text) {
	openPopup(popPhoto)
	popImage.setAttribute("src", image)
	popImageText.textContent = text
	popImage.setAttribute("alt", text)
}

function createElement(src, alt) {
	const template = document.querySelector("#element").content
	const element = template.querySelector(".element").cloneNode(true)
	const elemImage = element.querySelector(".element__image")
	elemImage.setAttribute("src", src)
	elemImage.setAttribute("alt", alt)
	element.querySelector(".element__title").textContent = alt
	element
		.querySelector(".element__like")
		.addEventListener("click", function(like) {
			like.target.classList.toggle("element__like-active")
		})
	element
		.querySelector(".element__delete")
		.addEventListener("click", function(del) {
			del.target.closest(".element").remove()
		})
	elemImage.addEventListener("click", function(event) {
		openImagePop(src, alt)
	})

	return element
}

function addElem(src, alt) {
	const card = createElement(src, alt)
	elems.prepend(card)
}

initialCards.forEach(function(Add) {
	addElem(Add.link, Add.name)
})

function saveElems(evt) {
	evt.preventDefault()
	const name = popAddTitle.value
	const linkImage = popAddLink.value
	addElem(linkImage, name)
	evt.target.reset()
	closePopup(popAdd)
}

formAdd.addEventListener("submit", saveElems)
