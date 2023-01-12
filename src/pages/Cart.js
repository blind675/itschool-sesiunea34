import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { removeFromCart } from "../store/Cart/actions";
import { CartContext } from "../store/Cart/context";

export function Cart() {
  const { cartState, cartDispatch } = useContext(CartContext);

  function handleCartRemove(id) {
    const actionResult = removeFromCart(id);

    cartDispatch(actionResult);
  }

  return (
    <div>
      {cartState.products.length === 0 ? (
        <p>Nu ai produse in cos.</p>
      ) : (
        cartState.products.map((product) => {
          return (
            <div key={product.id} className="m-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <img src={product.image} alt="" />
                <strong>{product.name}</strong>
                <p>
                  {product.quantity} x {product.price} = {product.price}$
                </p>
              </div>
              <Button
                variant="danger"
                onClick={() => handleCartRemove(product.id)}
              >
                Sterge din cos
              </Button>
            </div>
          );
        })
      )}
    </div>
  );
}
