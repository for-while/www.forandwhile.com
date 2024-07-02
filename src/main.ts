import './style.scss'
import Alpine from 'alpinejs'
import Logo from './components/Logo'
import Analytics from './components/Analytics'

function main() {
  (window as unknown as { Alpine: typeof Alpine }).Alpine = Alpine
  Alpine.data('analytics', Analytics(import.meta.env.VITE_ANALYTICS_WEBSITE_ID || ''))
  Alpine.data('logo', Logo)
  Alpine.start()
}

main()
