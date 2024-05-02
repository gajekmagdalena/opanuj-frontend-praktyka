<template>
  <div class="characters-list">
    <Character
      v-for="character in characters"
      :key="character.id"
      :character="character"
    />
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { Character as ICharacter, DefaultApi } from '../openapi-generator';
import Character from './Character.vue';

export default {
  components: {
    Character,
  },
  name: 'CharactersList',
  setup() {
    const characters = ref<ICharacter[] | undefined>([]);
    const api = new DefaultApi();

    const fetchData = async () => {
      const { data } = await api.getCharacters();
      if (!data) return;
      characters.value = data.results;
    };

    onMounted(fetchData);

    return {
      characters,
    };
  },
};
</script>
<style scoped>
.characters-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>
