# spotzer-x

> Front End Dev Assignment for Spotzer

## Build Setup

### Frontend + Backend (part 1)
``` bash
# open app_vue folder
$ cd app_vue

# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

### Backend (part 2)
``` bash
# install json-server
$ npm install -g json-server

# open data folder
$ cd data

# build and start db server
$ json-server db.js
```
For detailed explanation on how things work, checkout [JSON Server](https://github.com/typicode/json-server).

## Some Remarks

My self organization cares for:

- Brainstorming on domain of the issue (use cases, etc)
- UX
- UI
    - Components
    - Styling
- Analysis
- Tests
- Implementation
    - Store (Vuex)
    - Logic
    - Components
    - Styling

This project uses separation of concerns when it comes to the folder organization of components.

![components organization](/docs/components.png)

- /components
    - /recommendation
        - /list
            - List.vue
            - Detail.vue
        - Resume.vue
    - /ui
        - TheFooter.vue
        - TheHeader.vue
    - /wizard
        - Wizard.vue
        - Question.vue

Technology used:
- https://buefy.org/documentation/layout
- https://nuxtjs.org

TODO:
- Unit test
- Server api with questions data
- Server api with vehicles data
- Multi-language support (i18n)
