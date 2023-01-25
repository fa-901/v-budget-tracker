import type { IItem } from "@/utils/models";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useBudgetStore = defineStore("budget", () => {
  const budget: Ref<number> = ref(0);

  const list: Ref<IItem[]> = ref([]);

  const setAmount = (num: number) => {
    budget.value = num;
  };

  const addToList = (item: IItem) => {
    list.value.push(item);
  };

  const removeFromList = (key: number) => {
    const index = list.value.findIndex((item) => item.id === key);
    list.value.splice(index, 1);
  };

  return { budget, setAmount, list, addToList, removeFromList };
});
