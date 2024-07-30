import { useSelector, useDispatch } from 'react-redux';
import { updateCart, subCart } from '../../ReduxMaterial/StateSlicers/cartSlice';
import { decrement } from '../../ReduxMaterial/StateSlicers/counterSlice';
import { addBill, subBill } from '../../ReduxMaterial/StateSlicers/billSlice';
import './Cart.css';

function Cart() {
  const cart = useSelector((state) => state.cart.value)
  const bill = useSelector((state) => state.bill.value)
  const pizzaList = useSelector((state) => state.pizzaList.list)
  const dispatch = useDispatch()

  const handleCart = (id, size, qty, price) => {
    const existingItem = cart.find((cartItem) => cartItem.id === id && cartItem.size === size);
    if (existingItem.qty + qty === 0){
        dispatch(decrement());
        dispatch(subBill(-(price)));
        dispatch(subCart({id: id, size: size}));
    }
    else {
        dispatch(addBill(price));
        dispatch(updateCart({id: id, size: size, qty: qty, price: price}));
    }
  }

  const deleteItem = (id, size, price) => {
    dispatch(decrement());
    dispatch(subBill(price));
    dispatch(subCart({id: id, size: size}))
  }

  if (cart.length === 0) {
    return (
      <h1 className='emptyCart'>Cart is Empty!</h1>
    );
  }

  return (
    <div className='Cart'>
      <h2>Total Amount: {bill} Rs/-</h2>
      {cart.map((cartItem, i) => {
        const pizzaPrice = pizzaList[cartItem.id].prices[cartItem.size];
        return (
          <div className='CartItem' key={i}>
            <div className='CartItemDetails'>
              <h2>{cartItem.title} [{cartItem.size}]</h2>
              <p>Price: {cartItem.qty} * {pizzaPrice} = {cartItem.price}</p>
              <p>Quantity: 
                <button type='button' onClick={() => handleCart(cartItem.id, cartItem.size, -1, -(pizzaPrice))}>-</button>
                {cartItem.qty} 
                <button type='button' onClick={() => handleCart(cartItem.id, cartItem.size, 1, pizzaPrice)}>+</button>
              </p>
            </div>
            <img src={cartItem.img} alt={cartItem.title} className='CartItemImg' />
            <div className='CartItemQtyChanger'>
              <button type='button' className='delete' onClick={() => deleteItem(cartItem.id, cartItem.size, cartItem.price)}>🗑</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;