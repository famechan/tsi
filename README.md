
import React, { useState, useEffect, useRef } from 'react';

interface AddModalProps {
  onAdd: (name: string) => void;
  onClose: () => void;
}

const AddModal: React.FC<AddModalProps> = ({ onAdd, onClose }) => {
  const [input, setInput] = useState('');
  const [show, setShow] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null); // реф на инпут

  useEffect(() => {
    setShow(true); // анимация появления
    inputRef.current?.focus(); // фокус на инпут сразу при открытии
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 200); // ждём конца анимации
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 transition-opacity duration-200">
      <div
        className={`bg-white p-6 rounded-lg w-80 shadow-lg transform transition-all duration-200 ${
          show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
        }`}
      >
        <h2 className="text-lg font-semibold mb-4 text-center">Добавить элемент</h2>
        <input
          ref={inputRef} // подключаем реф
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Название"
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div className="flex justify-between">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            onClick={() => { if(input.trim()) { onAdd(input); setInput(''); handleClose(); } }}
          >
            Добавить
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            onClick={handleClose}
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;