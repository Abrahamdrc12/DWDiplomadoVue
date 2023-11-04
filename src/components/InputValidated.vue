<template>
    <Input v-model="value" :error-message="errorMessage" :error="!!errorMessage">
    <template #prefix>
        <slot></slot>
    </template>
    </Input>
</template>
  
<script setup lang="ts">
import { defineProps, toRef } from 'vue';
import { useField } from 'vee-validate';
import { Button, Input } from 'flowbite-vue'


const props = defineProps({
    name: {
        type: String,
        required: true,
    },
});

const { errorMessage, value } = useField(toRef(props, 'name'));
</script>