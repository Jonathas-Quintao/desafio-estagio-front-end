<template>
    <p>testezada</p>
</template>


<script setup >
    import { useTitleStore } from '@/stores/TitleStore';
    import {ref} from 'vue';

    const titleStore = useTitleStore();

    onMounted(() => {
        titleStore.setTitle('IBGE');
    });
</script>

