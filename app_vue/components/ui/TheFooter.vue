<template>
  <footer class="footer">
    <div class="content">
      <div class="columns is-vcentered">
        <div class="column is-one-quarter">
          <div class="title">
            Company X
          </div>
        </div>
        <div class="column">
          <div class="columns">
            <div class="column">
              This is an example page made for the frontend assigment by
              <a href="https://www.spotzer.com/">Spotzer</a>
            </div>
          </div>
        </div>
        <div class="column is-narrow">
          <b-button
            icon-left="chevron-up"
            size="is-large"
            type="is-text"
            @click="scrollToTop()"
          ></b-button>
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
