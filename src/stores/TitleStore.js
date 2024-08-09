import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTitleStore = defineStore('title', () => {
    const title = ref(''); 
  
    const setTitle = (newTitle) => {
      title.value = newTitle;
    };
  
    return { title, setTitle };
  });