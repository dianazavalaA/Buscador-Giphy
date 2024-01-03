const API_KEY = import.meta.env.VITE_API_KEY

export const getGifs = async(query:string) =>{
    try{ 
      const response = await fetch (`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
        return response.json()
    }catch(error){}
}

 