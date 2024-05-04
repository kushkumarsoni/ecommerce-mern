import { FaPlus } from "react-icons/fa"

type productsPropps = {
  productId:string;
  photo: string;
  name: string;
  price:  number;
  stock: number;
  handler: () => void;
};

const ProductCard = ({productId,photo,name,price,stock,handler}: productsPropps) => {
  return (
    <>
      <div className="product-card">
          <img src={`${photo}`} alt="no image" />
          <p>{name} {productId} {stock}</p>
          <span>{price}</span>
          <div>
              <button onClick={()=>handler()}><FaPlus /></button>
          </div>
      </div>
    </>
  )
}

export default ProductCard;