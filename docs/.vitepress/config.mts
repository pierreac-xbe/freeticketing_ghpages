import { DefaultTheme, defineConfig } from "vitepress"

const title = "Send e-Tickets Selectively and Securely, Every Time"
const description =
  "FreeTicketing is a secure, and flexible e-Ticketing solution that simplifies submission and distribution of e-Tickets across multiple systems and recipients."
const logoURL = "/xbe-logo-black.svg"
const ogImageURL = "/og-image.png"

export default defineConfig({
  title,
  description,
  titleTemplate: "FreeTicketing: :title",
  lang: "en-US",
  cleanUrls: true,
  // If this is disabled, when building it it will give deadlink errors if your markdown has the wrong links
  ignoreDeadLinks: true,

  head: [
    ["link", { rel: "icon", href: logoURL }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: title }],
    ["meta", { name: "twitter:description", content: description }],
    ["meta", { name: "twitter:image", content: ogImageURL }],
    ["meta", { property: "og:title", content: title }],
    ["meta", { property: "og:description", content: description }],
    ["meta", { property: "og:image", content: ogImageURL }],
  ],

  themeConfig: {
    logo: logoURL,
    siteTitle: "FreeTicketing",

    // Navbar Link
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/overview" },
      { text: "Reference", link: "/reference/cli" },
    ],

    // Sidebar
    sidebar: [...sidebarGuide(), ...sidebarReference()],
    footer: {
      message: "Take control of your e-Ticketing process today!",
      copyright: "Copyright © 2024-present XBE",
    },
    search: {
      provider: "local",
    },
    // Mobile Config only
    returnToTopLabel: "Go to Top",
    sidebarMenuLabel: "Menu",
  },
})

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      base: "/guide/",
      text: "Guide",
      collapsed: false,
      items: [
        { text: "Overview", link: "overview" },
        { text: "Prerequisites", link: "prerequisites" },
        { text: "ODBC Setup", link: "odbc-setup" },
        { text: "Usage with XBE", link: "usage-with-xbe" },
        { text: "Usage without XBE", link: "usage-without-xbe" },
        { text: "Running as Service", link: "running-as-service" },
        { text: "Troubleshooting", link: "troubleshooting" },
      ],
    },
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      base: "/reference/",
      text: "Reference",
      collapsed: false,
      items: [
        { text: "CLI", link: "cli" },
        { text: "local_config.json", link: "local-config" },
        { text: "config.json", link: "config" },
        { text: "Templates", link: "templates" },
      ],
    },
  ]
}
