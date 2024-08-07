<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  options: string[],
  modelValue: string
}
>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

</script>
<template>
  <div>
    <label>Pilih Opsi: </label>
    <select v-model="value">
      <option v-for="option in options" :key="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>