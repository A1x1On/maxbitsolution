<template>
  <div class="menu">
    <template v-for="item in DRINKS_MENU" :key="item.value">
      <router-link :to="'/drinks/' + item.value" class="menu__item"> {{ item.title }} </router-link>
    </template>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    return {
      DRINKS_MENU: inject("DRINKS_MENU") as IDrinksMenu[],
    };
  },
});
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: column;

  &__item {
    text-decoration: none;
    font-size: 18px;

    @media screen and (max-width: 800px) {
      font-size: 16px;
    }

    @media screen and (max-width: 400px) {
      font-size: 14px;
    }

    &:hover {
      color: red;
    }
  }
}
</style>
