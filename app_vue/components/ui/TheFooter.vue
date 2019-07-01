<template>
  <footer class="footer has-background-light">
    <div class="content">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-one-quarter">
            <div class="title has-text-grey-dark">
              Spotzer X
            </div>
          </div>
          <div class="column">
            <div class="columns">
              <div class="column">
                <p class="has-text-grey-dark">
                  This is an example page made for the frontend assigment by
                  <a href="https://www.spotzer.com/">Spotzer</a>
                </p>
              </div>
            </div>
          </div>
          <div class="column is-narrow">
            <b-button
              class="has-text-grey-dark"
              rounded
              icon-left="chevron-up"
              size="is-large"
              type="is-text"
              @click="scrollToTop()"
            ></b-button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
