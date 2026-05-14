import { mkdir, copyFile } from 'node:fs/promises'
import path from 'node:path'

const routes = [
  '/',
  '/what-s-in-it-for-crypto-users',
  '/what-s-in-it-of-crypto-developers-project-owners',
  '/what-s-in-it-for-donors-sponsors-and-backers',
  '/what-s-in-it-for-participating-countries-their-regulators-and-central-banks',
  '/get-involved',
  '/make-a-donation',
  '/donate-fiat',
  '/blank-page',
  '/volunteer-your-time',
  '/about',
  '/white-paper',
  '/frequently-asked-questions',
  '/blog',
  '/login',
  '/post/analysis-on-universal-basic-income-and-the-future-of-the-world',
  '/post/beyond-bucks-10-ways-to-make-a-difference',
  '/post/paving-the-path-to-a-brighter-future',
  '/post/finding-support-and-help-how-your-community-can-make-a-difference',
]

const distDir = new URL('../dist/', import.meta.url)
const indexFile = new URL('index.html', distDir)

await copyFile(indexFile, new URL('404.html', distDir))

for (const route of routes) {
  if (route === '/') continue
  const routeDir = new URL(`.${route}/`, distDir)
  await mkdir(routeDir, { recursive: true })
  await copyFile(indexFile, path.join(routeDir.pathname, 'index.html'))
}
