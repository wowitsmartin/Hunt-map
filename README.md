# Hunt map

Интерактивные кары для игры Hunt-Showdown

## FAQ

`можно добавить новые разделы?` - да, свяжитесь с автором  
`можно кружки маркеров заменить на иконки?` - да, если их нарисуют  
`почему расстояние меньше/больше (я точно знаю сколько там метров!)?` - из за разницы высот между точками, появляется погрешность  
`почему все на английском языке?` - если вы хотите сделать локализацию, свяжитесь с автором

`можно будет дополнительные поля для метки?` - да, будет сделано после обсуждения  
`можно будет дополнительно прикреплять скриншоты?` - в планах нет  
`можно будет отмечать на карте линии и полигоны?` - возможно будет добавлено позже

`на карте отмечены НЕ все объекты` - карта создана сообществом игроков, мы рады новым вкладам

## FAQ по вкладу

`почему моя точка не появилась (я ее добавил несколько раз!)?` - сначала она должна пройти модерацию, она появится после одобрения  
`я нашел ошибку` - свяжитесь с автором  
`я хочу быть модератором` - свяжитесь с автором  
`я frontend dev, хочу помочь` - свяжитесь с автором, проект OS с MIT лицензией, достаточно форкнуть и кинуть PR

`при перезагрузке страницы не сохраняется мой выбор групп маркеров` - будет исправлено

## Добавить новый тип метки

0. в `public/images/markers` добавить маркер
1. в `config.js` указать тип
1. в `css/marker.css` указать стили по имени типа
1. в `js/database/firebase.js` метод `addPoint` дополнить необходимой логикой

## Дополнительные возможности для меток

### Описание поддерживают метки

0. boss (особыый формат)
1. tower (особыый формат)
1. aviary (текст)
1. easter-egg (текст, html)
1. resupply-point (текст)

### Примеры форматирование

ссылка  
`<a href="***" target="_blank" rel="noopener noreferrer">***</a>`

картинка  
`<img height="100px" src="***">`

ссылка + картинка  
`***<br /><a href="***" target="_blank" class="cursor-zoom" rel="noopener noreferrer"><img height="100px" src="***"></a>`

### Дополнительные поля для маркеров

**tower**  
`X` - направление башни в часах  
1-11 - (num)

**resupply-point**  
`X` - тип дилижанса  
coach - карета (string)  
boat - лодка (string)

**aviary**  
`X` - тип вальера  
dogs - собаки (string)  
chickens - курицы (string)

**boss**  
`A,X,Y,Z` - тип маркера для босса  
`A` - местонахождение босса  
 0 - без уровня (num)  
 1 - подвал (num)  
 2 - 1 этаж (num)  
 3 - 2 этаж (num)  
`X` - наличие ассасина (num-bool)  
`Y` - наличие паука (num-bool)  
`Z` - наличие мясника (num-bool)
