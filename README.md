# goit-js-hw-07

##Завдання 1 - галерея зображень
Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. Подивися демо відео роботи галереї.

Виконуй це завдання у файлах `01-gallery.html` і `01-gallery.js`. Розбий його на декілька підзавдань:

1. Створення і рендер розмітки на підставі масиву даних `galleryItems` і наданого шаблону елемента галереї.
1. Реалізація делегування на div.gallery і отримання url великого зображення.
1. Підключення скрипту і стилів бібліотеки модального вікна [basicLightbox](https://basiclightbox.electerious.com/). Використовуй [CDN сервіс jsdelivr](https://www.jsdelivr.com/package/npm/basiclightbox?path=dist) і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
1. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
1. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
1. Розмітка елемента галереї
1. Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі `<img>`, і вказуватися в href посилання. Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

  <div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="small-image.jpg"
        data-source="large-image.jpg"
        alt="Image description"
      />
    </a>
  </div>

Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.

Закриття з клавіатури

  УВАГА
  Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.

Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. Бібліотекаи basicLightbox містить метод для програмного закриття модального вікна.

##Завдання 2 - бібліотека SimpleLightbox
Зроби таку саму галерею як в першому завданні, але використовуючи бібліотеку [SimpleLightbox](https://simplelightbox.com/), яка візьме на себе обробку кліків по зображеннях, відкриття і закриття модального вікна, а також гортання зображень за допомогою клавіатури.

Необхідно трохи змінити розмітку картки галереї, використовуй цей шаблон.

  <a class="gallery__item" href="large-image.jpg">
    <img class="gallery__image" src="small-image.jpg" alt="Image description" />
  </a>
  
Виконуй це завдання у файлах `02-lightbox.html` і `02-lightbox.js`. Розбий його на декілька підзавдань:

1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.
1. Підключення скрипту і стилів бібліотеки, використовуючи [CDN сервіс cdnjs](https://cdnjs.com/libraries/simplelightbox). Необхідно додати посилання на два файли: `simple-lightbox.min.js` і `simple-lightbox.min.css`.
1. Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. Для цього ознайомся з [документацією SimpleLightbox](https://simplelightbox.com/) - насамперед секції «Usage» і «Markup».
1. Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута `alt`. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.
