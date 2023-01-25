<script setup lang="ts">
import { useBudgetStore } from "@/stores/budget";
import { ref } from "vue";

const store = useBudgetStore();

const name = ref("");
const cost = ref(0);
const isFocused = ref(false);

const submitForm = () => {
  store.addToList({
    name: name.value,
    value: Number(cost.value),
    id: new Date().getTime(),
  });
  name.value = "";
  cost.value = 0;
};

const toggleFocus = () => {
  isFocused.value = !isFocused.value;
};
</script>

<template>
  <div class="mb-4">
    <h2 class="">Add Expense</h2>
    <div class="d-flex">
      <div class="flex-fill me-2">
        <input
          class="txt-input"
          placeholder="Name"
          type="text"
          v-model="name"
          @keyup.enter="submitForm()"
          @focus="toggleFocus()"
          @blur="toggleFocus()"
        />
      </div>
      <div class="flex-fill mx-2">
        <input
          class="txt-input"
          placeholder="Cost"
          type="number"
          v-model="cost"
          @keyup.enter="submitForm()"
          @focus="toggleFocus()"
          @blur="toggleFocus()"
        />
      </div>
      <button @click="submitForm()">
        <i class="far fa-save" aria-hidden="true"></i>
      </button>
    </div>
    <div class="text-center hint" v-if="isFocused">
      Press 'Enter' to save. Or use the button
    </div>
  </div>
</template>
