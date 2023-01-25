<script setup lang="ts">
import ButtonGroup from "@/components/ButtonGroup.vue";
import ExpenseFormVue from "@/components/ExpenseForm.vue";
import ExpenseList from "./components/ExpenseList.vue";
</script>

<template>
  <div class="container d-flex flex-column h-100 py-3">
    <h1 class="text-center form-group">Budget Planner</h1>
    <ButtonGroup />
    <ExpenseFormVue />
    <ExpenseList />
    <div class="text-center mt-auto form-text text-muted">
      <small
        >Created by
        <a
          class="text-r"
          href="https://github.com/fa-901"
          rel="noopener noreferrer"
          target="_blank"
          >fa-901</a
        ></small
      >
    </div>
  </div>
</template>
