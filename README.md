# spotzer-x

> [Front End Dev Assignment for Spotzer](/docs/Spotzer-FrontEndDeveloper-Assignment.pdf)

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

### Backend (part 2) - Data
#### On a second terminal
``` bash
# install json-server
$ npm install -g json-server

# open data folder
$ cd data

# install dependencies
$ yarn install

# build and start db server
$ json-server db.js -p 3001
```
For detailed explanation on how things work, checkout [JSON Server](https://github.com/typicode/json-server).

## Some Remarks

My usual self organization methology cares for:

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
- https://buefy.org
- https://nuxtjs.org
- https://github.com/typicode/json-server

TODO:
- More complete unit test cases
- Multi-language support (i18n)

I made some more steps than necessary to showcase a more complete challenge on the project organization and to apply some patterns that help ensure the scalability.
