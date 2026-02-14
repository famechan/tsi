import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='bg-gray-900 text-white'>
            <nav className='container mx-auto flex items-center justify-between p-4'>
                <h1 classNmae='text-xl font-bold'>LABA 2</h1>

                <div className='space-x-4'>
                    <Link to='/' className='hover:text-blue-400 transition'>Главная</Link>
                    <Link to='/about' className='hover:text-blue-400 transition'>О нас</Link>
                    <Link to='/login' className='hover:text-blue-400 transition'>Вход</Link>
                    <Link to='/register' className='hover:text-blue-400 transition'>Регистрация</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header