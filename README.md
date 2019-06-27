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
