import './style.scss'
import Alpine from 'alpinejs'
import Analytics from './components/Analytics'
import Links from './components/Links'
import Logo from './components/Logo'

function main() {
  (window as unknown as { Alpine: typeof Alpine }).Alpine = Alpine
  Alpine.data('analytics', Analytics(import.meta.env.VITE_ANALYTICS_WEBSITE_ID || ''))
  Alpine.data('links', Links)
  Alpine.data('logo', Logo)
  Alpine.start()
}

main()
