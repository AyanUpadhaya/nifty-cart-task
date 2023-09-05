import React from 'react';

const Backdrop = ({show,handleShow}) => {
    return (
        <div className={show?'backdrop backdrop-open':'backdrop'} onClick={handleShow}></div>
    );
};

export default Backdrop;