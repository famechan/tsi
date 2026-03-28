import React, { useState } from 'react';
import Item from '../components/Item';
import AddModal from '../components/AddModal';

const Home = () => {
    const [items, setItems] = useState<string[]>(['Элемент 1', 'Элемент 2']);
    const [showModal, setShowModal] = useState(false);

    const addItem = (newItem: string) => {
        setItems([...items, newItem]);
    };

    return(
        <div className='max-w-md mx-auto mt-20 p-4 text-center'>
            <h1 className='text-2xl font-bold mb-6'>Список элементов</h1>
            <div className='mb-6'>
                {items.map((item, idx) => <Item key={idx} name={item} />)}
            </div>

            <button 
                onClick={() => setShowModal(true)} 
                className='bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600'
            >
                Добавить
            </button>
            {showModal && (
                <AddModal
                    onClose={() => setShowModal(false)}
                    onAdd={(name) => {
                        addItem(name);
                        setShowModal(false);
                    }}
                />
            )}
        </div>
    )
}

export default Home;