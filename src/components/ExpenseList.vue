<script setup lang="ts">
import { useBudgetStore } from "@/stores/budget";
import { ref, computed } from "vue";
import { formatter } from "@/utils";

const store = useBudgetStore();

const search = ref("");

const filteredList = computed(() => {
  return store.list.filter((item) => {
    if (!search.value) {
      return true;
    } else {
      const reg = new RegExp(search.value, "i");
      return reg.test(item.name);
    }
  });
});
</script>

<template>
  <h2>Expense List</h2>
  <div class="mb-3">
    <input
      class="txt-input"
      placeholder="Search..."
      type="text"
      v-model="search"
    />
  </div>
  <ul class="list-group">
    <li
      class="list-group-item d-flex"
      v-for="item of filteredList"
      :key="item.id"
    >
      <span>{{ item.name }}</span>
      <span class="ms-auto">
        <span class="rounded-pill p-1 bg-y">
          {{ formatter.format(item.value) }}
        </span>
        <span
          class="ms-2 fs-6 fas fa-times c-pointer"
          aria-hidden="true"
          @click="store.removeFromList(item.id)"
        >
        </span>
      </span>
    </li>
    <div class="text-center hint" v-if="store.list.length < 1">
      You have no items in your list
    </div>
  </ul>
</template>
