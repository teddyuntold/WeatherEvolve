<template>
    <div>
      <Suspense>
        <template #default>
          <AsyncCityView />
        </template>
        <template #fallback>
          <CityViewSkeleton />
        </template>
        <template #error="{ error }">
        <div class="text-red-500">Error loading view: {{ error.message }}</div>
      </template>
      </Suspense>
    </div>
  </template>
  
  <script setup>
  import AsyncCityView from "../components/AsyncCityView.vue";
  import CityViewSkeleton from "../components/CityViewSkeleton.vue";
  </script>