<template>
  <q-table
    :loading="loading"
    :rows="Characters"
    v-model:pagination="pagination"
    @request="onRequest"
    :rows-per-page-options="[10]"
    :columns="columns"
  >
    <template v-slot:body="props">
      <q-tr :props="props" @click="goCharacter(props.row.id)">
        <q-td key="image" :props="props">
          <img :src="props.row.image" height="50" />
        </q-td>
        <q-td key="name" :props="props">{{ props.row.name }}</q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import CharacterService from '../services/CharacterService';
import { Character } from '../models/Character';
import router from '../router/index';

export default defineComponent({
  name: 'CharacterTable',

  setup() {
    let Characters: Ref<Character[]> = ref([]);
    let pagination = ref({
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 0
    });
    let loading = ref(true);
    const columns = [
      { name: 'image', label: 'Image', field: 'image', align: 'left' },
      { name: 'name', label: 'Name', field: 'name', align: 'left' }
    ];

    function getPage(page: number) {
      CharacterService.getCharactersByPage(page, 10).then(res => {
        Characters.value = res.characters;
        pagination.value.rowsNumber = res.total;
        loading.value = false;
      });
    }

    function goCharacter(charName: string) {
      router().push({ path: '/characters/' + charName });
    }

    function onRequest(props: any) {
      const newPage = props.pagination.page;
      loading.value = true;
      pagination.value.page = newPage;
      getPage(newPage);
    }

    getPage(1);
    return { columns, Characters, pagination, onRequest, loading, goCharacter };
  }
});
</script>
