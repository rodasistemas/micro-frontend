import { registerApplication, start } from 'single-spa'

registerApplication(
  'header',
  // @ts-ignore
  () => import('home-nav/Header'),
  (location) => location.pathname.startsWith('/'),
)

registerApplication(
  'footer',
  // @ts-ignore
  () => import('home-nav/Footer'),
  (location) => location.pathname.startsWith('/'),
)

start()