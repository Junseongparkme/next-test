// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UXev Wiki',
  tagline: 'UXev Wiki',
  url: 'https://uxev-wiki.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'UXev',
  projectName: 'UXev Wiki',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-3NL9WMZ6P4',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'UXev Wiki',
        items: [
          {
            type: 'doc',
            docId: 'how-to/how-to-intro',
            position: 'left',
            label: 'How to',
          },
          {
            type: 'doc',
            docId: 'ref/ref-intro',
            position: 'left',
            label: 'Reference',
          },
          {
            type: 'doc',
            docId: 'exp/exp-intro',
            position: 'left',
            label: 'Explanation',
          },
          {
            href: 'https://github.com/uxev',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
    }),
};

module.exports = config;
