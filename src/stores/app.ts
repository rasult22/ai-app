import { defineStore } from 'pinia';
import { getStyles, generateDallEImage } from 'src/api/generate';

interface Style {
  name: string;
  file: string;
}

export const useAppStore = defineStore('app', {
  state: () => ({
    styles: [] as Style[],
    image: '',
  }),
  getters: {
    // giving the copy of original array
    getStyles: (s): Style[] => JSON.parse(JSON.stringify(s.styles)),
  },
  actions: {
    async fetchStyles() {
      const data: Style[] = await getStyles();
      this.styles = data;
    },
    async generateImage(styleName: string, phrase: string) {
      const imageSrc = await generateDallEImage(phrase, styleName);

      this.image = imageSrc;
    },
  },
});
