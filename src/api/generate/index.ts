import { api } from 'src/boot/axios';

export const getStyles = async () => {
  const { data } = await api.get('dev/api/ai/styles');
  return data;
};

export const generateDallEImage = async (
  keyword: string,
  styleName: string
): Promise<string> => {
  const { data } = await api.post('dev/api/ai/generate', {
    key_word: keyword,
    style_name: styleName,
  });
  return data.image_path || '';
};
