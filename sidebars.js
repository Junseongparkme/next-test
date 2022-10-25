/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'Introduction',
    {
      type: 'category',
      label: 'React',
      items: [
        {
          type: 'autogenerated',
          dirName: 'react',
        },
      ],
    },
    {
      type: 'category',
      label: 'Next.js',
      items: [
        {
          type: 'autogenerated',
          dirName: 'nextjs',
        },
      ],
    },
    {
      type: 'category',
      label: 'Astro',
      items: [
        {
          type: 'autogenerated',
          dirName: 'astro',
        },
      ],
    },
  ],
};

module.exports = sidebars;
