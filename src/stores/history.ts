import { defineStore } from 'pinia'

const HISTORY = 'history'

const getHistory = () => {
    const history = localStorage.getItem(HISTORY)
    return history ? JSON.parse(history) : []
}

const setHistory = (history: any[]) => {
    localStorage.setItem(HISTORY, JSON.stringify(history))
}

export const useHistoryStore = defineStore('history', {
    state: () => ({
      historyS: getHistory() as string[],
      gifs: [] as any[]
    }),
    getters: {
        history: (state) => state.historyS,
        gifList: (state) => {
          return (() => {
            
          })
        }
      },
      actions: {

        entry(search: string){
            console.log('Historial:', search)
            const validation = this.history.includes(search)
            if(!validation){
                 this.historyS.push(search)
                setHistory(this.historyS)
            }
           
        },

        removeHistory(search: string){
            const filtered = this.history.filter(history=> history !== search)
            this.historyS = filtered
            setHistory(filtered)
        }
      }
})
