<script setup lang="ts">
import { useFavStore } from '../stores/favorites'

const store = useFavStore()

defineProps({
  gif: Object
})

function addFav(item: any) {
  console.log('Agregando..', item)
  store.addFav(item)
}

function removeFav(id: string) {
  store.removeFav(id)
}
</script>

<template>
  <div>
    <img class="max-h-40 rounded-lg" :src="gif?.images.fixed_height.webp" :alt="gif?.title" />

    <div class="flex flex-col gap-2 justify-center">
      <button
        class="text-blue-400 px-3 py-2 rounded pt-2 md:pt-0 p-2"
        @click="addFav(gif)"
        type="button"
        v-if="!gif?.isFav"
      >
        Añadir a Favoritos
      </button>
      <button
        class="text-red-400 px-3 py-2 rounded pt-2 md:pt-0 p-2"
        type="button"
        @click="removeFav(gif.id)"
        v-else
      >
        Eliminar Fav
      </button>
    </div>
  </div>
</template>
