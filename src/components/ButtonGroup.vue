<script setup lang="ts">
import { useBudgetStore } from "@/stores/budget";
import { formatter } from "@/utils";
import type { ComputedRef } from "vue";
import { computed, ref } from "vue";

const store = useBudgetStore();

const isEdit = ref(false);

const total: ComputedRef<number> = computed(() => {
  return store.list.reduce((acc, value) => {
    return acc + value.value;
  }, 0);
});

const remaining: ComputedRef<number> = computed(() => {
  return store.budget - total.value;
});

const toggleEdit = () => {
  isEdit.value = !isEdit.value;
};
</script>

<template>
  <div class="row my-4 g-3">
    <div class="col-md-4">
      <div class="budget d-flex align-items-center">
        <div class="me-3">
          <template v-if="!isEdit">
            Budget: {{ formatter.format(store.budget) }}
          </template>
          <input
            type="number"
            class="num-input"
            v-if="isEdit"
            v-model="store.budget"
            @keyup.enter="toggleEdit()"
          />
        </div>
        <button class="ms-auto" @click="toggleEdit()">
          <i class="far" :class="isEdit ? 'fa-save' : 'fa-edit'"></i>
        </button>
      </div>
    </div>
    <div class="col-md-4">
      <div class="rem d-flex align-items-center">
        <div class="me-3">
          Remaining: {{ formatter.format(remaining) }}
          <!-- <ng-container *ngIf="this.remaining >= 0">
            {{ this.remaining | currency: "USD":"symbol":"0.0-2" }}
          </ng-container>
          <ng-container *ngIf="this.remaining < 0"> over limit </ng-container> -->
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="total d-flex align-items-center">
        <div class="me-3">Total spent: {{ formatter.format(total) }}</div>
      </div>
    </div>
  </div>
</template>
