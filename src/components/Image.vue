<script lang="ts">

export default{
    props: {
        url: String, 
        id: String,
        title: String
    }
        
};

</script>

<template>
    <img  class="max-h-40 rounded-lg"  :src="url"  :alt="title" />
</template>