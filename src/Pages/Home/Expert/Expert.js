import React from 'react';

const Expert = ({expert}) => {
    const {name, img} = expert;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-3'>
            <div class="card" style={{width: "18rem"}}>
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">des</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
    );
};

export default Expert;