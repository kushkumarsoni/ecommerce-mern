/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemsProps = {
    cartItem: any;
};

const CartItem = ({cartItem}:CartItemsProps) => {
    const {productId,photo,name,price,quantity} = cartItem;
  return (
    <div className="cart-item">
        <img src={`${photo}`} alt={name} />
        <article>
            <Link  to={`/product/${productId}`} >{name}</Link><br/>
            <span>₹ {price}</span>
        </article>
        <div>
            <button>-</button>
            <p>{quantity}</p>
            <button>+</button>
        </div>
        <button><FaTrash className="red"/></button>
    </div>
  )
}

export default CartItem;