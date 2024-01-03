<script lang="ts">
  export default {
    data() {
      return {
        imageUrls: [
          'https://media3.giphy.com/media/HndXVZjb2ivAnGaIRu/giphy.gif?cid=339f4906vx4pdl04448ij8xi42ql53v319v2tkwsvi902ov1&ep=v1_gifs_search&rid=giphy.gif&ct=g',
          'https://media2.giphy.com/media/NoHe3HpB1Mg8w/200.gif?cid=339f4906vx4pdl04448ij8xi42ql53v319v2tkwsvi902ov1&ep=v1_gifs_search&rid=200.gif&ct=g',
          'https://media2.giphy.com/media/26hisTycIYYjQ4zjq/200.gif?cid=339f4906vx4pdl04448ij8xi42ql53v319v2tkwsvi902ov1&ep=v1_gifs_search&rid=200.gif&ct=g',
          'https://media2.giphy.com/media/rXzOY4RpSA0Ug/200.gif?cid=339f4906vx4pdl04448ij8xi42ql53v319v2tkwsvi902ov1&ep=v1_gifs_search&rid=200.gif&ct=g',
          'https://media3.giphy.com/media/11ZQAhLIwtWklq/200.gif?cid=339f4906vx4pdl04448ij8xi42ql53v319v2tkwsvi902ov1&ep=v1_gifs_search&rid=200.gif&ct=g'
          
        ]
      };
    }
  };
  </script>

  <template>
    <div class="flex flex-wrap gap-2 justify-evenly ">
      <img class="max-h-40 rounded-lg" v-for="(imageUrl, index) in imageUrls" :key="index" :src="imageUrl" alt="Imagen" />
    </div>
</template>