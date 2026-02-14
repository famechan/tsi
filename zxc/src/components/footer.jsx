const Footer = () => {
    const Year = new Date().getFullYear();
    return (
        <footer className='bg-gray-800 text-gray-300'>
            <div className='container mx-auto p-4 text-center text-sm'>
                <p>©{Year} Все права бла бла</p>
            </div>
        </footer>
    )
}

export default Footer