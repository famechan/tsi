import React from 'react';

interface ItemProps {
    name: string;
}

const Item: React.FC<ItemProps> = ({ name }) => {
    return(
        <div className="bg-gray-100 p-3 rounded-md shadow mb-3 font-medium">
            { name }
        </div>);
};

export default Item;
