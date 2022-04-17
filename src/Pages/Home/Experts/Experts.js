import React from 'react';
import './Experts.css';

import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
    {id: 1, name: 'will smith', img: expert1},
    {id: 1, name: 'Chris rock', img: expert2},
    {id: 1, name: 'Don smith', img: expert3},
    {id: 1, name: 'Jack son', img: expert4},
    {id: 1, name: 'King boy', img: expert5},
    {id: 1, name: 'Jon son', img: expert6},
]
const Experts = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-5'>Our experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key ={expert.id}
                        expert={expert}
                    ></Expert>)
                }

            </div>
        </div>
    );
};

export default Experts;