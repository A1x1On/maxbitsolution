<template>
  <div class="drink" v-if="mappedDrink">
    <div class="drink__info">
      <div class="drink__info-main">
        <div class="drink__info-main-description">
          <h3 class="drink__info-main-title">{{ mappedDrink.title }}</h3>

          <div class="text-decoration-none">{{ mappedDrink.category }}</div>

          <div>{{ mappedDrink.alcoholic }}</div>

          <div>{{ mappedDrink.glass }}</div>
        </div>

        <div class="drink__info-main-visual">
          <img :src="mappedDrink.image" class="drink__info-main-visual-image" loading="lazy" />
        </div>
      </div>

      <div v-if="mappedDrink.instructions.length" class="drink__info-instructions">
        <h3 class="drink__info-instructions-title">Instructions</h3>
        <div class="drink__info-instructions-list">
          <div
            v-for="instruction in mappedDrink.instructions"
            :key="instruction"
            class="drink__info-instructions-list-item"
          >
            {{ instruction }}
          </div>
        </div>
      </div>

      <div v-if="mappedDrink.ingredients.length || mappedDrink.measures.length" class="drink__info-extra">
        <h3 class="drink__info-extra-title">List of ingredients:</h3>

        <div class="drink__info-extra-data">
          <div v-if="mappedDrink.ingredients.length" class="drink__info-ingredients">
            <div v-for="ingredient in mappedDrink.ingredients" :key="ingredient">{{ ingredient }}</div>
          </div>

          <div v-if="mappedDrink.measures.length" class="drink__info-measures">
            <div v-for="measure in mappedDrink.measures" :key="measure">{{ measure }}</div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <hr class="v-divider" />
    </div>
  </div>
  <div class="drink-not-found" v-else="!mappedDrink">DRINKS NOT FOUND</div>
</template>

<script lang="ts">
import type { IDrink } from "@/types/drink";

const DRINK_PLACEHOLDER = "./src/assets/img/drink-placeholder.png";

export default defineComponent({
  props: {
    drink: {
      type: Object as PropType<IDrink>,
      default: () => null,
    },
  },

  setup(props) {
    const mappedDrink = computed(() => {
      if (!props.drink) return;

      const { strDrink, strCategory, strAlcoholic, strGlass, strDrinkThumb } = props.drink;
      const extraData = getExtraData(props.drink);

      return {
        title: strDrink,
        category: strCategory,
        alcoholic: strAlcoholic,
        glass: strGlass,
        image: strDrinkThumb || DRINK_PLACEHOLDER,
        ...extraData,
      };
    });

    const getExtraData = (drink: IDrink) => {
      const keys = Object.keys(drink) as Array<keyof typeof drink>;

      const instructions: string[] = [];
      const ingredients: string[] = [];
      const measures: string[] = [];
      keys.forEach((key) => {
        const property = drink[key];

        if (/strInstructions/.test(key) && property) {
          instructions.push(property);
        } else if (/strIngredient/.test(key) && property) {
          ingredients.push(property);
        } else if (/strMeasure/.test(key) && property) {
          measures.push(property);
        }
      });

      return {
        instructions,
        ingredients,
        measures,
      };
    };

    return {
      mappedDrink,
    };
  },
});
</script>

<style lang="scss" scoped>
.drink-not-found {
  &__empty {
    font-size: 20px;
    text-align: center;
  }
}
.drink {
  &__info {
    font-size: 18px;
    padding: 0px 20px;

    @media screen and (max-width: 800px) {
      font-size: 16px;
    }

    @media screen and (max-width: 400px) {
      font-size: 14px;
    }

    &-main {
      display: flex;
      justify-content: space-between;
      width: 100%;

      &-description {
        width: 60%;
        padding-right: 20px;
      }

      &-visual {
        width: 40%;

        &-image {
          background-color: #fff;
          border-radius: 10px;
          width: 100%;
        }
      }
    }

    &-instructions {
      margin-top: 20px;
      &-list-item {
        margin-top: 10px;
      }
    }

    &-extra {
      margin-top: 20px;

      &-data {
        display: flex;
        width: 100%;

        &-instructions,
        &-measure {
          width: 50%;

          &-list {
            font-size: 10px;
          }

          @media screen and (max-width: 400px) {
            padding: 0px 10px;
          }
        }
      }
    }
  }
}
</style>
