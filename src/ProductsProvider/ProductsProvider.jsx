import React, { createContext, useEffect, useState } from 'react';
import { loadDb } from '../FakeDB/fakeDB';
export const ProductsContext = createContext(null)
import { foodProducts } from '../backend/data';
const ProductsProvider = ({children}) => {
    const [cart,setCart] = useState(loadDb);
    const [meals,setMeals] = useState(foodProducts);
    return (
        <ProductsContext.Provider value={{cart,setCart,meals}}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;