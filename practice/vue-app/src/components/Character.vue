<template>
  <div class="character-container">
    <img
      class="character-image"
      :src="character.image"
      alt="Character Image"
      @mouseover="showCharacterInfo = true"
      @mouseleave="showCharacterInfo = false"
    />
    <div v-if="showCharacterInfo" class="character-info">
      <p>Name: {{ character.name }}</p>
      <p>Status: {{ character.status }}</p>
      <p>Species: {{ character.species }}</p>
      <p>Type: {{ character.type }}</p>
      <p>Gender: {{ character.gender }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { Character as ICharacter } from '../openapi-generator/api';

export default defineComponent({
  props: {
    character: {
      type: Object as PropType<ICharacter>,
      required: true,
    },
  },
  name: 'Character',
  setup() {
    const showCharacterInfo = ref(false);

    return {
      showCharacterInfo,
    };
  },
});
</script>

<style scoped>
.character-container {
  position: relative;
  width: 100%; /* adjust as necessary */
}

.character-image {
  width: 100%;
}

.character-info {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5); /* semi-transparent black */
  color: white;
  padding: 10px;
  display: none;
}

.character-container:hover .character-info {
  display: block;
}
</style>
