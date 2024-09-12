import { defineConfig } from "vitepress"

const title = "Send e-Tickets Selectively and Securely, Every Time"
const description =
  "FreeTicketing is a secure, and flexible e-Ticketing solution that simplifies submission and distribution of e-Tickets across multiple systems and recipients."
const logoURL = "/logo.png"
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
    logo: "/logo.png",
    siteTitle: "FreeTicketing",

    // Navbar Link
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/documentation" },
    ],

    // Sidebar
    sidebar: [{}],
    footer: {
      message: "Take control of your e-Ticketing process today!",
      copyright: "Copyright © 2024-present XBE",
    },
    search: {
      provider: "local",
    },
    // you can disable the previous and next page here
    docFooter: {
      prev: false,
      next: true,
    },
    // Mobile Config only
    returnToTopLabel: "Go to Top",
    sidebarMenuLabel: "Menu",
  },
})
