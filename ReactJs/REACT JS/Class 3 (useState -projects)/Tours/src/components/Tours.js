import React from 'react';
import Card from './Card';

const Tours = ({ tours, removeTour }) => {
    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className='flex justify-center items-center text-3xl font-bold mb-8'>
                <h2>Tour with Vivek</h2>
            </div>

            <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {
                    tours.map((tour) => {
                        return (
                            <Card key={tour.id} {...tour} removeTour={removeTour} />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Tours;
