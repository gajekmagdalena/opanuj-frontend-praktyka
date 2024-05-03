import { Character as ICharacter } from '../api/models/Character.ts';
import { DefaultApi } from '../api/apis/DefaultApi';
import { ref } from 'vue';

const pageCount = ref(1);
const characters = ref<ICharacter[]>();
const api = new DefaultApi();

const fetchData = async (onScroll = false) => {
  if (onScroll) {
    pageCount.value += 1;
  }
  const { results } = await api.getCharacters(pageCount.value);
  if (!results) return;
  if (!onScroll) {
    characters.value = results;
    return;
  }
  characters.value?.push(...results);
};

export { fetchData, characters };
