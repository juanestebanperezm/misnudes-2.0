import Header from '../components/Header'

function Layout ({ children }) {
  return (
    <div className='layout'>
      <Header />
      {children}
      <footer>Mis-nudes inc®️</footer>
    </div>
  )
}

export default Layout
