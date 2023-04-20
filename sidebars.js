// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    "intro",
    "roadmap",
    "architecture",
    {
      type: "category",
      label: "Tutorial",
      items: [{ type: "autogenerated", dirName: "tutorial" }],
      collapsible: true,
      collapsed: true,
    },
    "api",
    {
      type: "doc",
      id: "formats",
      label: "Basic Data Formats",
    },
    {
      type: "doc",
      id: "custom",
      label: "Custom Data Formats",
    },
    {
      type: "doc",
      id: "canvas/packages/hooks/README",
      label: "React Hooks",
    },
    {
      type: "doc",
      id: "canvas/packages/cli/README",
      label: "Command Line",
    },
    {
      type: "category",
      label: "Other Packages",
      items: [
        "canvas/packages/core/README",
        "canvas/packages/interfaces/README",
      ],
      collapsible: false,
      collapsed: false,
    },
  ],
}

module.exports = sidebars
