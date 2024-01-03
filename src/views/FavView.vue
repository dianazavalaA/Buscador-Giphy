<script setup lang="ts">
import { getGifs } from '../CallApi'
import { useFavStore } from '../stores/favorites'

const store =  useFavStore()


function removeFav(id: string) {
  store.removeFav(id)
}

</script>

<template>
  <div class="flex items-center flex-col max-w-screen-xl mx-auto">
    <h2 class="underline decoration-sky-600 md:decoration-blue-400 text-2xl p-2">Mis Favoritos</h2>
    <section v-if="store.favorites" class="flex flex-wrap gap-4 px-8 p-3">
      <div class="flex flex-col gap-2 justify-center" v-for="g in store.favorites" :key="g.id">
        <img :src="g.url" loading="lazy" />
        <button class="text-red-400 px-3 py-2 rounded pt-2 md:pt-0 p-2" type="button" @click="removeFav(g.id)">Eliminar Fav</button>
      </div>
    </section>
  </div>
</template>
