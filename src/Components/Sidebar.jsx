import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../ProductsProvider/ProductsProvider";
import { deleteFromDB, updateDB } from "../FakeDB/fakeDB";

const Sidebar = ({ show,handleShow }) => {
  const { cart, setCart, meals } = useContext(ProductsContext);
  const [totalQty, setTotalQty] = useState(
    cart.reduce((a, item) => a + item.qty, 0)
  );
  const [totalPrice, setTotalPrice] = useState(0);

  const increase = (id) => {
    const newState = cart.map((obj) => {
      if (obj.itemId === id) {
        return { ...obj, qty: obj.qty + 1 };
      }
      return obj;
    });

    setCart(newState);
    setTotalQty((prev) => prev + 1);
    updateDB(id, "increase");
  };
  const decrease = (id) => {
    const newState = cart.map((obj) => {
      if (obj.itemId === id) {
        return { ...obj, qty: obj.qty - 1 };
      }
      return obj;
    });

    setCart(newState);
    setTotalQty((prev) => prev - 1);
    updateDB(id, "decrease");
  };
  useEffect(() => {
    const productsPrices = cart.map((item) => {
      const product = meals.find((meal) => meal.idMeal == item.itemId);
      return product.price * item.qty;
    });

    const netPrice = productsPrices.reduce((start, next) => start + next, 0);
    setTotalPrice(netPrice);
  }, [totalQty]);

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((c) => c.itemId !== id));
    setTotalQty((prev) => prev - cart.find((c) => c.itemId == id).qty);
    deleteFromDB(id);
  };

  return (
    <div className={show ? "sidebar collapseSidebar p-3" : "sidebar p-3"}>
      <div className="row d-flex flex-column gap-3 ">
        <div className="p-2">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h2 className="fw-bold mb-0 text-black">Shopping Cart({cart?.length || 0})</h2>
            <button className="mb-0 btn" onClick={handleShow}>X</button>
          </div>
        </div>

        {cart.map((item) => {
          const product = meals.find((meal) => meal.idMeal == item.itemId);
          product.qty = item.qty;
          return (
            <div className="row mb-4 d-flex justify-content-between align-items-center">
              <div className="col-md-2 col-lg-2 col-xl-2">
                <img src={product.strMealThumb} className="img-fluid" alt="" />
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3 mb-2">
                <h6 className="text-muted">{product.strMeal}</h6>
                <h6 className="text-black ">Qty: {product.qty}</h6>
              </div>

              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button
                  className="btn btn-link px-2"
                  onClick={() => decrease(item.itemId)}
                >
                  <i className="bi bi-dash"></i>
                </button>

                <span className="text-black fw-bold p-3">{product.qty}</span>

                <button
                  className="btn px-2"
                  onClick={() => increase(item.itemId)}
                >
                  <i className="bi bi-plus"></i>
                </button>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h6 className="mb-2">${product.price}</h6>
              </div>
              <div className="col-md-1 col-lg-1 col-xl-1 text-start">
                <a
                  className="btn btn-danger my-2"
                  onClick={() => handleRemoveFromCart(item.itemId)}
                >
                  <i className="bi bi-x-lg"></i>
                </a>
              </div>
            </div>
          );
        })}

        <div className="p-2">
          <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
          <hr className="my-2" />
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
