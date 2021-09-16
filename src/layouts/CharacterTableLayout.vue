<template>
  <q-table
    :loading="loading"
    :rows="Characters"
    v-model:pagination="pagination"
    @request="onRequest"
    :rows-per-page-options="[20]"
  ></q-table>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, toRefs } from 'vue';
import CharacterService from '../services/CharacterService';
import { Character } from '../models/Character';
export default defineComponent({
  name: 'CharacterTable',

  setup() {
    let Characters: Ref<Character[]> = ref([]);
    let pagination = ref({
      page: 1,
      rowsPerPage: 20,
      rowsNumber: 0
    });
    let loading = ref(true);

    function getPage(page: number) {
      CharacterService.getCharactersByPage(page).then(res => {
        Characters.value = res.characters;
        pagination.value.rowsNumber = res.total;
        loading.value = false;
      });
    }

    function onRequest(props: any) {
      const newPage = props.pagination.page;
      loading.value = true;
      pagination.value.page = newPage;
      getPage(newPage);
    }

    getPage(1);
    return { Characters, pagination, onRequest, loading };
  }
});
</script>
