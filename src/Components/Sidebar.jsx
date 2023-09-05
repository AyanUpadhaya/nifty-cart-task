import React, { useContext, useState } from 'react';
import { ProductsContext } from '../ProductsProvider/ProductsProvider';

const Sidebar = ({show}) => {
    const {cart,setCart } = useContext(ProductsContext)
    const [totalQty,setTotalQty] = useState(cart.reduce((a,item)=>a+item.qty,0))
    const [totalPrice,setTotalPrice] = useState(0)
    console.log(show)
    return (
        <div className={show?'sidebar collapseSidebar p-3':'sidebar p-3'}>
            <div className="row d-flex flex-column gap-3 ">
                <div className="p-2">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                        <h6 className="mb-0 text-muted">{cart?.length || 0} items</h6>
                    </div>
                </div>

                <div className="p-2">
                    <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                  <hr className="my-2"/>
                    <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">items {totalQty}</h5>
                        <h5>${totalPrice}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;