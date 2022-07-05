function Header () {
  return (
    <>
      <header className='flex min-w-xs bg-primary-dark h-20'>
        <div className='w-full flex text-gray-200 justify-between items-center'>
          <p className='pl-4'>Mis Nudes</p>
          <ul className='flex justify-between w-3/5 pr-4'>
            <li className='pl-2'>Inicio</li>
            <li className='pl-2'>Categorias</li>
            <li className='pl-2'>Cuenta</li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
