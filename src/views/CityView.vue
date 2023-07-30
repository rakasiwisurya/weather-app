<template>
  <div>
    <Suspense>
      <AsyncCityView />

      <template #fallback>
        <div class="flex items-center justify-center h-screen">
          <Spinner />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import AsyncCityView from "@/components/AsyncCityView.vue";
import Spinner from "../components/Spinner.vue";
</script>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

.animate-pulse {
  animation: pulse 1.5s infinite;
}
</style>
