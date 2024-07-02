import './style.scss'
import Alpine from 'alpinejs'
import Logo from './components/Logo'

function main() {
  (window as unknown as { Alpine: typeof Alpine }).Alpine = Alpine
  Alpine.data('logo', Logo)
  Alpine.start()
}

main()
