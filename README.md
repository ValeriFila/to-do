### Запуск проекта

1) Если у Вас не установлены Node.js и git, установите их - https://nodejs.org/en/download/package-manager и https://git-scm.com/download/
2) Откройте терминал и перейдите в папку, в которой будет находиться этот проект, либо другим удобным для Вас методом.
3) Выполните команду `git clone https://github.com/ValeriFila/to-do`
4) Выполните команду `cd to-do`
5) Выполните команду `npm i`
6) Выполните команду `npm.cmd run start:dev`
7) В браузере откроется окно с проектом, либо перейдите по ссылке http://localhost:3000


### Стек и архитектура проекта

_Стек разработки:_ TypeScript, React, Redux Toolkit, RTK Query

_Стек тестирования:_ Jest, Testing Library

Проект написан в соответствии с методологией **Feature Sliced Design**

_Ссылка на документацию_ - https://feature-sliced.design/docs/get-started/overview


### Дополнительные функциональности

1. Локализация (библиотека i18next)
2. Изменение темы приложения (темная / светлая)
3. Отображение нерабочих дней (isDayOff API)


### Скрипты

- `start:dev`: запуск проекта в dev режиме
- `start:prod`: запуск проекта в prod режиме
- `build:dev`: сборка проекта в dev режиме
- `build:prod`: сборка проекта в prod режиме
- `lint`: - запуск линтера по js, jsx, ts, tsx файлам
- `lint:fix`: - исправление js, jsx, ts, tsx файлов линтером
- `lint:scss`: - запуск линетра по файлам .scss
- `lint:scss:fix`: исправление .scss файлов линтером
- `unit`: - запуск тестов
