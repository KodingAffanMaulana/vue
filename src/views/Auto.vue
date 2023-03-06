<script setup lang="ts">
import VAutocomplete from '@gits-id/autocomplete';
import Navbar from '@/components/Navbar.vue'

// Validation
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import { object } from 'yup';
import type { Item } from '@gits-id/autocomplete/dist/types/VAutocomplete.vue';
import type VAlert from '@gits-id/alert';

const schema = object({
    genre: object().required().label('Genre'),
});

const { handleSubmit, resetForm, values } = useForm({
    validationSchema: schema,
})

const onSumbit = handleSubmit((values) => {
    alert(JSON.stringify(values));
});

const genres = ref<Item[]>([
    {
        text: 'Pop',
        value: 'pop',
    },
    {
        text: 'Roct',
        value: 'rock',
    },
    {
        text: 'Jazz',
        value: 'jazz',
    }
]);

// Event
function onModelValueChange(value: Item) {
    console.log('Selected item:', value);
}
</script>

<template>
    <Navbar />
    <div class="px-6 pt-6">
        <h1>Auto Complate</h1><br />
        <h2>Basic</h2>
        <VAutocomplete></VAutocomplete><br />
        <h2>Clereable</h2>
        <VAutocomplete clearable /><br />

        <div>
            <form @submit="onSumbit" class="border-none">
                <VAutocomplete name="genre" label="Genre" placeholder="Chose your prefered genres" :items="genres" />
                <div class="mt-4">
                    <v-btn type="submit">Submit</v-btn>
                    <v-btn type="button" text @click="resetForm">Reset</v-btn>
                </div>
                <pre>{{ values }}</pre>
            </form>
        </div><br />

        <h2>Event</h2>
        <VAutocomplete @update:modelValue="onModelValueChange" />
    </div>
</template>

