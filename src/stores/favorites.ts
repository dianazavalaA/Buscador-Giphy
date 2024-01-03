import { defineStore } from 'pinia'

interface Fav {
  id: string
  title: string
  url: string
}

const FAVORITES = 'favorites'


const getFavorites = () => {
  const favorites = localStorage.getItem(FAVORITES)

  return favorites ? JSON.parse(favorites) : []
}


const setFavorites = (favs: any[]) => {
  localStorage.setItem(FAVORITES, JSON.stringify(favs))
}

export const useFavStore = defineStore('favs', {
  state: () => ({
    favs: getFavorites() as Fav[],
    gifs: [] as any[]
  }),
  getters: {
    favorites: (state) => state.favs,
    gifList: (state) => {
      return state.gifs.map((i) => {
        const findFav = state.favs.find((fav: any) => fav.id === i.id)
        return {
          ...i,
          isFav: findFav ? true : false
        }
      })
    }
  },

  actions: {
    setGifs(data: any[]) {
      this.gifs = data
    },
    addFav(item: any) {
      const { id, title, images } = item
      this.favs.push({
        id,
        title,
        url: images.fixed_height.webp
      })
      setFavorites(this.favs)
    },
        removeFav(id:string){
            const filtered = this.favs.filter(item => item.id !== id)
            this.favs = filtered
            setFavorites(filtered)
        }
  }
})

