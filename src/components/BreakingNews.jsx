import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 p-2 rounded container mx-auto'>
            <button className='btn bg-red-700 text-white'>Latest News</button>
            <Marquee pauseOnHover={true}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt aliquam sed placeat corrupti ipsum animi sit fugit! Saepe fugiat accusamus quam nobis laboriosam dolores, voluptatibus hic nostrum tempore facere praesentium et. Odit facere ea doloribus velit fugiat amet, et, accusantium aut officiis accusamus doloremque id perferendis hic maiores saepe temporibus.
            </Marquee>
        </div>
    );
};

export default BreakingNews;