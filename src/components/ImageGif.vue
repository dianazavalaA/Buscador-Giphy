<script lang="ts">
export default {
  props: {
    url: String,
    id: String,
    title: String
  }
}
</script>

<template>
  <img class="max-h-40 rounded-lg h-40 block" :src="url" :alt="title" />
</template>
