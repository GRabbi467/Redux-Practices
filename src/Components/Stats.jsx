import React from 'react';

const Stats = ({count}) => {
    return (
       <div className='max-w-md mx-auto mt-10 space-y-5'>
         <div className="p-4 h-40 mt-5 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">Total count: {count}</div>
        </div>
       </div>
        
    );
};

export default Stats;