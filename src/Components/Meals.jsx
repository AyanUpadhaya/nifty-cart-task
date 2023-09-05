import React, { useContext } from 'react';
import { ProductsContext } from '../ProductsProvider/ProductsProvider';
import SwiperComponent from './SwiperComponent';

const Meals = ({}) => {
    const {meals} = useContext(ProductsContext)
    return (
        <div className='swiper-container'>
            <div className="my-4 d-flex flex-column justify-content-center align-items center text-center">
                <h4 className="text-warning">Get The Best</h4>
                <h2 className="display-3 fw-bold">Best Chickens</h2>         
            </div>
            <SwiperComponent meals={meals}/>
            
        </div>
    );
};

export default Meals;