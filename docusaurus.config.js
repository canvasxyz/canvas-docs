// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight")
const darkCodeTheme = require("prism-react-renderer/themes/okaidia")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Canvas",
  tagline: "A programming framework for P2P applications",
  url: "https://docs.canvas.xyz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "canvasxyz", // Usually your GitHub org/user name.
  projectName: "canvas-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Canvas",
        logo: {
          alt: "Logo",
          src: "img/logo.png",
          srcDark: "img/logo_inv.png",
        },
        hideOnScroll: true,
        items: [
          {
            href: "#",
            label: "v0.3",
            position: "left",
            className: "navbar-badge",
          },
          {
            href: "https://github.com/canvasxyz/canvas",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://twitter.com/canvas_xyz",
            label: "Twitter",
            position: "right",
          },
          {
            href: "https://canvas.xyz",
            label: "Home",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        copyright: `Copyright © ${new Date().getFullYear()} Canvas Technologies, Inc.`,
      },
      prism: {
        theme: {
          ...lightCodeTheme,
          plain: { ...lightCodeTheme.plain, backgroundColor: "#faf0de" },
        },
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
      },
    }),
}

module.exports = config
