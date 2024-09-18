<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input type="text" placeholder="Search For A City or State"
      @input="getSearchResults" v-model="searchQuery" class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none 
      focus:shadow-[0px_1px_0_0_#004E71]"/>
      <ul v-if="mapboxSearchResults" class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66px]">
        <li v-for="searchResult in mapboxSearchResults" :key="searchResult.id" class="py-2 cursor-pointer">
          {{ searchResult.place_name }}
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
  import axios from 'axios';
  import { ref } from 'vue'

  const mapboxAPIKey = 'pk.eyJ1IjoiYW5uYW5mcmVkZHkiLCJhIjoiY20xN3ljMDB2MHRuaTJxcXpnMTgydjhwZiJ9.hJ3qKVy3o2sfou7KcGbccA'

  const searchQuery = ref("")
  const queryTimeout = ref(null)
  const mapboxSearchResults = ref(null);

  const getSearchResults = () => {
    clearTimeout(queryTimeout.value);
    queryTimeout.value = setTimeout(async () => {
      if (searchQuery !== ""){
        const result = await axios.get('https://api.mapbox.com/search/geocode/v6/forward?q=${searchQuery.value}.json?access_token=${mapboxAPIKey}&types=place');
        mapboxSearchResults.value = result.data.features;
      }
      mapboxSearchResults.value = null;
      return;
    }, 300);
  }
</script>

