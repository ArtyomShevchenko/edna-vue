
import { defineStore } from "pinia";

export const useLangStore = defineStore("langStore", {
    state: () => {
        return {
            lang: "en"
        }
    },
})