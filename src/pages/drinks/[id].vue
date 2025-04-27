<template>
  <layout class="drinks-detail-page">
    <div class="drinks-detail-page__menu">
      <drinks-menu />
    </div>

    <div class="drinks-detail-page__content">
      <div v-if="drinksStore.isLoading" class="drinks-detail-page__spinner">
        <span class="loader"></span>
      </div>

      <template
        v-if="!drinksStore.isLoading && drinksStore.data?.length"
        v-for="drink in drinksStore.data"
        :key="drink.idDrink"
      >
        <drink-detail :drink="drink" />
      </template>

      <div class="drinks-detail-page__content-data-empty" v-if="!drinksStore.isLoading && !drinksStore.data?.length">
        DRINKS NOT FOUND
      </div>
    </div>
  </layout>
</template>

<script lang="ts">
import { useRootStore } from '@/stores/RootStore'
import { useDrinksStore } from '@/stores/DrinksStore'

import layout from '@/layouts/home.vue'

export default defineComponent({
  components: {
    DrinksMenu: defineAsyncComponent(() => import('@/components/DrinksMenu.vue')),
    DrinkDetail: defineAsyncComponent(() => import('@/components/DrinkDetail.vue')),
    layout,
  },
  setup() {
    const rootStore = useRootStore()
    const drinksStore = useDrinksStore()
    const route = useRoute()

    const onFetch = async (name: string = '') => {
      await drinksStore.fetch(name).catch((err: unknown) => rootStore.alert.caught(err))
    }

    watchEffect(() => {
      const { id } = route.params as { id: string }
      onFetch(id)
    })

    return {
      drinksStore,
    }
  },
})
</script>

<style lang="scss" scoped>
.drinks-detail-page {
  &__menu {
    width: 20%;
  }

  &__content {
    width: 80%;
    display: flex;
    flex-direction: column;

    &-data-empty {
      margin-top: 20px;
      font-size: 20px;
      text-align: center;

      @media screen and (max-width: 400px) {
        font-size: 14px;
      }
    }
  }

  &__spinner {
    width: 100%;
    text-align: center;
    padding-top: 200px;
  }
}
</style>
