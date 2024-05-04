import { Link } from "react-router-dom"
import ProductCard from "../components/productCard"


const Home = () => {
  const addToCartHandler = () => {

  }
  return (
    <div className="home">
      <section></section>
      <h1>Latest Product <Link to={"/search"} className="findmore">More</Link></h1>
      <main>
        <ProductCard 
          productId="sdfojosfd" 
          photo="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SR270,180_QL70_.jpg" 
          name="Macbook" 
          price={900} 
          stock={20} 
          handler={addToCartHandler}
        />
      </main>
    </div>
  )
}

export default Home;