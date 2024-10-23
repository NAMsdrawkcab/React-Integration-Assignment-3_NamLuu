import { create } from "zustand";
import axios from "axios";

export const useStore = create((set, get) => ({
    randomJoke: {},
    randomJokeStatus: "",
    typeJoke: {},
    typeJokeStatus: "",
    fetchRandomJoke: async() =>{
        set({randomJokeStatus: 'PENDING'})
        try{
            const res = await axios.get('/random_joke')
            set({randomJoke: res.data, randomJokeStatus: 'SUCCESS'})
        }catch(err){
            set({randomJokeStatus: 'FAILURE'})
            console.log(err)
        }
    },
    fetchJokeByType: async(newJoketype) =>{
        set({typeJokeStatus: 'PENDING'})
        axios.get(`/jokes/${!newJoketype ? "general" : newJoketype}/random`)
        .then((res) => {
            set({typeJoke: res.data, typeJokeStatus: 'SUCCESS'})
        })
        .catch(() =>{
            set({typeJokeStatus: 'FAILURE'})
        })
    },
}))