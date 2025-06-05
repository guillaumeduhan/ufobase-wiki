import { visit } from 'unist-util-visit';
import type { Plugin } from 'unified';
import type { Root } from 'mdast';

const remarkUtmSource: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, 'link', (node: any) => {
      const url = new URL(node.url, 'https://dummy.base');
      if (url.hostname && !url.hostname.endsWith('astrodirectory.dev')) {
        url.searchParams.set('utm_source', 'astrodirectory.dev');
        node.url = url.href.replace('https://dummy.base', '');
      }
    });
  };
};

export default remarkUtmSource;