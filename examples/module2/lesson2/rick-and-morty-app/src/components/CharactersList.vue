<template>
  <div
    class="characters-list"
    ref="charactersListContainer"
    @scroll="handleScroll"
  >
    <Character
      v-for="character in characters"
      :key="character.id"
      :character="character"
    />
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import Character from './Character.vue';
import { fetchData, characters } from '../store/CharactersData.ts';

export default {
  components: {
    Character,
  },
  name: 'CharactersList',
  setup() {
    const charactersListContainer = ref(null);

    const handleScroll = () => {
      const container = charactersListContainer.value;
      if (!container) return;

      const atBottom =
        container.scrollHeight - container.scrollTop <=
        container.clientHeight + 1;
      if (atBottom) {
        fetchData(true);
      }
    };

    onMounted(fetchData);

    return {
      charactersListContainer,
      handleScroll,
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
  overflow-y: scroll;
  max-height: 80vh;
}
</style>
