export function Footer() {
  return (
    <footer className="mt-8 text-center text-xs text-green-500 border-t border-green-500 pt-4">
      <p>Sistema desarrollado en React + Tailwind. Powered by pasión por la informática.</p>
      <p className="mt-1">&copy; {new Date().getFullYear()} - Todos los derechos reservados</p>
    </footer>
  )
}
