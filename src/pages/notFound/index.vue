<template>
  <div class="not-found-page">
    <section class="not-found-page__section">
      <div class="not-found-page__section">
        <h1 class="not-found-page__section-code">404</h1>
        <h3 class="not-found-page__section-text">PAGE NOT FOUND</h3>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup() {},
})
</script>

<style lang="scss" scoped>
.not-found-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 1024px;
  min-width: 360px;
  margin: auto;

  @media screen and (max-width: 460px) {
    padding: 10px;
  }

  &__section {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    min-height: calc(100vh);
    background-color: var(--bg-color);
    box-shadow: var(--shadow-color) 0px 3px 10px -5px;
    border-radius: var(--border-radius);
    padding: 20px;

    @media screen and (max-width: 460px) {
      padding: 10px;
    }

    &-code {
      font-size: 80px;
      padding-right: 30px;
      padding-left: 30px;

      @media screen and (max-width: 460px) {
        font-size: 50px;
      }
    }

    &-text {
      font-size: 30px;
      padding-right: 30px;
      color: var(--text-color-3);

      @media screen and (max-width: 460px) {
        font-size: 20px;
      }
    }
  }
}
</style>
