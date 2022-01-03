# Проект: Место

### Интерактивная страница, куда можно будет добавлять фотографии, удалять их и ставить лайки.
______

1. Сверстана страница согласно макету [https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1].
   * Верстка адаптивная. 
   * На странице несколько секций: Хедер  с логотипом; Профиль с возможностью редактирования; Блок с 6 карточками(сами карточки загружаются по шаблону  с помощью JavaScript), на которых фотография места, название,  кнопка лайк, кнопка удаления карточки; Футер.
   * Добавлены попап редактирования профиля, попап добавления  новой карточки, попап просмотра картинки.
   * При переполнении содержимого блока обрезается текст и появляется многоточие.
   * Для иконки лайка  предусмотрено активное состояние.
______
2. Файловая структура организована согласно БЭМ.
______
3.  * Попап редактирования профиля: открывается диалоговое окно, в которм можно редактировать имя и профессию, внесенные изменения сохраняются в профиле. Попап открыватся и закрывается при помощи кода Java Script, который добавляет попапу модификатор, изменяющий правило видимости.
    * Попап добавления карточки: открывается диалоговое  окно,  в котором можно добавить  название и ссылку на картинку, при нажатии на Создать, на страницу  добавляется новая  карточка.
    * Попап просмотра  картинки: при клике на изображение откорывается  окно с изображением и названием.
    * Все попапы  плавно всплывают и исчезают.
    * Любые карточки можно лайкнуть, нажавна сердечко и удалить, нажав на корзиночку.
    * В поля форм добавлена валидация. Если поля не валидны, отображаются ошибки. Кнопка отправки формы становится активной и прредоставляется возможность отправки формы, если все поля прошли валидацию.
    * Добавлена  возможность закрывать попапы  кликом  по оверлею ипо нажатию  клавиши Escape.
______
[Ссылка на проект](https://ekaterinamanuilova.github.io/mesto/).
