import metadata from '../../config/metadata.json';
import stripHtml from './stripHtmlTag';
export type HTMLMetaKey = 'title' | 'description' | 'image';

export default (
  meta: Record<HTMLMetaKey | string, any>,
): Record<string, any> => {
  const parsedMeta: Record<string, any> = {
    title: metadata.title,
    meta: [
      {
        name: 'twitter:card',
        content: 'summary',
      },
    ],
  };

  Object.keys(meta).forEach((metaKey) => {
    let content = meta[metaKey];
    switch (metaKey as HTMLMetaKey) {
      case 'title':
        if (!content) {
          break;
        }
        parsedMeta.title = meta[metaKey] + ' - ' + parsedMeta.title;
        parsedMeta.meta.push({
          name: 'twitter:title',
          itemprop: 'name',
          property: 'og:title',
          content: content + ' - ' + parsedMeta.title,
        });
        break;
      case 'description':
        content = stripHtml(content);
        parsedMeta.meta.push({
          name: 'twitter:description',
          property: 'og:description',
          itemprop: 'description',
          content,
        });
        break;
      case 'image':
        parsedMeta.meta.push({
          property: 'og:image',
          content,
        });
        break;
      default:
        break;
    }
  });

  return parsedMeta;
};
