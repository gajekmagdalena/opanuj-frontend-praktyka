<template>
  <div class="character-container">
    <img
      class="character-image"
      :src="character.image"
      alt="Character Image"
      @mouseover="showCharacterInfo = true"
      @mouseleave="showCharacterInfo = false"
    />
    <div
      v-if="showCharacterInfo"
      class="character-info"
      @mouseover="showCharacterInfo = true"
      @mouseleave="showCharacterInfo = false"
    >
      <span>Name: {{ character.name }}</span>
      <span>Status: {{ character.status }}</span>
      <span>Species: {{ character.species }}</span>
      <span>Type: {{ character.type }}</span>
      <span>Gender: {{ character.gender }}</span>
      <span>Origin: {{ character.origin && character.origin.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { Character as ICharacter } from '../api/models/Character.ts';

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
  width: 100%;
}

.character-image {
  width: 100%;
}

.character-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  align-content: center;
  span {
    display: block;
  }
}

.character-container:hover .character-info {
  display: block;
}
</style>
