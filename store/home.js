
import { defineStore } from 'pinia';

export const useHomeStore = defineStore('home', {
  state: () => ({
    email: 'peppino'
  }),
  getters: {
    getEmail: (state) => state.email,
  },
  actions: {
    init(data) {
      for( const col in data)
        this[col] = data[col]
    },
  },
})