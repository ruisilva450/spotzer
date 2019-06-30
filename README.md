# spotzer-x

> Front End Dev Assigment for Spotzer

## Build Setup

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

- components
    - recomendation
        - list
            - List.vue
            - Detail.vue
        - Resume.vue
    - ui
        - TheFooter.vue
        - TheHeader.vue
    - wizard
        - Wizard.vue
        - Question.vue

Techonology used:
- https://buefy.org/documentation/layout
- https://nuxtjs.org

TODO:
- Unit test
- Server api with questions data
- Server api with vehicles data
- Multi-language support (i18n)
