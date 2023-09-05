import React, { createContext, useState } from 'react';
import { loadDb } from '../FakeDB/fakeDB';
export const ProductsContext = createContext(null)

const ProductsProvider = ({children}) => {
    const [cart,setCart] = useState(loadDb)
    return (
        <ProductsContext.Provider value={{cart}}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;