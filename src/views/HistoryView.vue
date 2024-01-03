<script setup lang="ts">
import { getGifs } from '../CallApi'
import { useHistoryStore } from '../stores/history'

const storeHistory = useHistoryStore()

</script>

<template>
    <div class="flex items-center flex-col max-w-screen-xl mx-auto">
      <h2 class="underline decoration-sky-600 md:decoration-blue-400 text-2xl p-2">Mi Historial</h2>
      <section v-if="storeHistory.history" class="flex flex-wrap gap-4 px-8 p-3">
        <div class="flex flex-col gap-2 justify-center" v-for="(g, index) in storeHistory.history" :key="index">
          <button>{{g}}</button>
          <button class="text-red-400 px-3 py-2 rounded pt-2 md:pt-0 p-2" type="button" @click="storeHistory.removeHistory(g)">Eliminar del Historial</button>
        </div>
      </section>
    </div>
  </template>