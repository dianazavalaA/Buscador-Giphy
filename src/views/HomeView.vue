<script setup lang="ts">
import { ref } from 'vue'
import { getGifs } from '../CallApi'
import ListImageView from './ListImageView.vue'
import { useFavStore } from '../stores/favorites'
import { useHistoryStore } from '../stores/history'
import Gif from '../components/Gif.vue'

const search = ref('')
const results = ref()
const showResults = ref(false)
const store = useFavStore()
const storeHistory = useHistoryStore()

async function submit() {
  if (search.value.length > 0) {
    results.value = await getGifs(search.value.trim())
    store.setGifs(results.value.data)
    showResults.value = true
    addHistory()
  }
}

function addFav(item: any) {
  console.log('Agregando..', item)
  store.addFav(item)
}

function addHistory() {
  storeHistory.entry(search.value.trim())
}

function removeFav(id: string) {
  store.removeFav(id)
}
</script>

<template>
  <div class="my-8">
    <div class="py-8 bg-white max-w-md mx-auto w-full rounded-lg px-4 mb-8 flex gap-3 flex-col">
      <div class="flex-col">
        <label class="p-2">Search:</label>
        <input class="p-2 border-b-blue-400 border-b-2" required v-model.trim="search" />
      </div>
      <button
        class="bg-blue-400 px-3 py-2 text-white rounded pt-2 md:pt-0 hover:opacity-75"
        :class="{ 'hover:not-allowed': search.length === 0 }"
        @click="submit"
        type="button"
      >
        Buscar
      </button>
    </div>
    <ListImageView v-show="!showResults" />
  </div>

  <div v-if="showResults">
    <div class="flex flex-wrap gap-2 justify-evenly">
      <section v-if="store.gifList" class="flex flex-wrap gap-4 px-8">
        <Gif v-for="g in store.gifList" :key="g.id" :gif="g" />
      </section>
    </div>
  </div>
</template>
