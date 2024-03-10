import { env } from "@/env.mjs"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "EinfachFusion",
  description: "A feature-rich, highly customizable AI Chatbot Template, empowered by Next.js.",
  links: {
    x: "https://twitter.com/einfachalf",
    github: "https://github.com/einfachalf",
    docs: "",
  },
}

export const getURL = () => {
  let url = env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000/'
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`
  // Make sure to include a trailing `/`.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`
  return url
}
