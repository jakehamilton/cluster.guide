module.exports = {
  title: "cluster.guide",
  tagline: "Learn to create your own automated Kubernetes cluster.",
  url: "https://cluster.guide",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "intergalactic",
  projectName: "cluster.guide",
  themeConfig: {
    navbar: {
      title: "cluster.guide",
      logo: {
        alt: "cluster.guide logo",
        src: "img/cluster.guide.png"
      },
      links: [
        {
          to: "docs/getting-started",
          label: "Getting Started",
          position: "left"
        },
        {
          to: "docs/faq",
          label: "FAQ",
          position: "left"
        }
      ]
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/getting-started"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/jakehamiltondev"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jake Hamilton.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js")
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
