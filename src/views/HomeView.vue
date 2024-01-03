<script setup lang="ts">
import { ref } from 'vue';
import { getGifs } from '../CallApi'
import ListImageView from './ListImageView.vue';
import { useFavStore } from '../stores/favorites'
import { useHistoryStore } from '../stores/history'

const search = ref("")
const results = ref()
const showResults = ref(false)
const store =  useFavStore()
const storeHistory = useHistoryStore()

async function submit (){
  if(search.value.length > 0){
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

function addHistory (){
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
        <button class="bg-blue-400 px-3 py-2 text-white rounded pt-2 md:pt-0 hover:opacity-75" :class="{'hover:not-allowed':search.length ===0}" @click="submit" type="button">Buscar</button>
      </div>
      <ListImageView v-show="!showResults"/>
    </div>



<div v-if="showResults">
  <div class="flex flex-wrap gap-2 justify-evenly">
    <section v-if="store.gifList" class="flex flex-wrap gap-4 px-8">
    <div v-for="g in store.gifList" :key="g.id" v-if="results">
        <img class="max-h-40 rounded-lg" :src="g.images.fixed_height.webp" :alt="g.title">

      <div class="flex flex-col gap-2 justify-center">
        <button class="text-blue-400 px-3 py-2 rounded pt-2 md:pt-0 p-2" @click="addFav(g)" type="button" v-if="!g.isFav">Añadir a Favoritos</button>
        <button class="text-red-400 px-3 py-2 rounded pt-2 md:pt-0 p-2" type="button" @click="removeFav(g.id)" v-else>Eliminar Fav</button>
      </div>
    </div>
    </section>
  </div>
</div>
</template>
