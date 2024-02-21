import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center my-20  md:w-3/12'>
            <p className='text-yellow-600 mb-3 italic'>---{subHeading}---</p>
            <p className='text-3xl uppercase border-y-4 py-4'>{heading}</p>
        </div>
    );
};

export default SectionTitle;