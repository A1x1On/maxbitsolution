<!-- <script setup lang="ts">
import { RouterView } from 'vue-router'
import LayoutDefault from '@/components/layout/LayoutDefault.vue'
</script>

<template>
  <LayoutDefault>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </LayoutDefault>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> -->

<template>
  <router-view />
</template>

<script lang="ts" setup>
//
</script>
