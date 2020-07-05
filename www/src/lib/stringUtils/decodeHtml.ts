import { AllHtmlEntities } from 'html-entities';

const entities = new AllHtmlEntities();

export default (str = '') => {
  if (!str) {
    return str;
  }
  return entities.decode(str);
};
