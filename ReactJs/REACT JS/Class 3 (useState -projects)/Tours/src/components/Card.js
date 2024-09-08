import React, { useState } from 'react';

function Card({ id, image, name, info, price, removeTour }) {
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 100)}...`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className='card m-auto mt-4 mb-4 border border-gray-300 bg-gray-100 p-3 rounded-md shadow-md max-w-md'>
            <div className="relative w-full h-64 overflow-hidden rounded-md mb-4">
                <img
                    src={image}
                    alt={name}
                    className='w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-110'
                />
            </div>
            <div className='text-center'>
                <h3 className='text-lg font-bold text-gray-700 mb-2'>Rs. {price}</h3>
                <h2 className='text-xl font-semibold text-gray-900 mb-2'>{name}</h2>
            </div>
            <div className='mb-4'>
                <p className='text-gray-600'>
                    {description}
                    <span className='text-blue-500 cursor-pointer ml-2' onClick={readmoreHandler}>
                        {readmore ? 'show less' : 'read more'}
                    </span>
                </p>
            </div>
            <div className='text-center'>
                <button onClick={() => removeTour(id)} className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600'>
                    Not Interested
                </button>
            </div>
        </div>
    );
}

export default Card;
