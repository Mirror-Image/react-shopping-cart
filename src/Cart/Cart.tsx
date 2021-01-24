import CartItem from "../CartItem/CartItem";

import { CartItemType } from "../App";

import { Wrapper } from './Cart.styles';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({
  cartItems,
  addToCart,
  removeFromCart
}) => {
  const calculateTotalPrice = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your shopping cart</h2>
      {cartItems.length === 0
        ? <p>No items in the cart.</p>
        : null}
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotalPrice(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
