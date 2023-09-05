import React, { useContext } from 'react';
import { addToDB, loadDb } from '../FakeDB/fakeDB';
import { ProductsContext } from '../ProductsProvider/ProductsProvider';

const MealCard = ({ meal,toast }) => {
    const { setCart } = useContext(ProductsContext)
    const handleAddToCart = (id) => {
        toast('Added to Cart')
        const addProduct = addToDB(id)
        if (addProduct == 1) {
            setCart(loadDb)
        }

    }
    return (

        <>
            <div className="card">
                <img src={meal.strMealThumb} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{meal.strMeal}</h5>
                    <div className='d-flex justify-content-between align-items-center my-3'>
                        <p className="card-text">Price: {meal.price}$</p>
                        <div className='d-flex ms-5'>
                            <button className="btn btn-outline-danger" onClick={() => handleAddToCart(meal.idMeal)}>Add Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default MealCard;