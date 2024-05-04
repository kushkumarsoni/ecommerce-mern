/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import ProductCard from "../components/productCard";

const Search = () => {

  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(100000);
  const [category, setCategory] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(10);

  const addToCartHandler = () => { }

  const isPrevBtn = ( page <= 1 ? true : false);
  const isNextBtn = (page >= totalPage ? true : false);
  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} 
            onChange={(e) => setSort(e.target.value)} >
            <option value="">None</option> 
            <option value="asc">Low to high</option> 
            <option value="dsc">High to Low</option> 
          </select>
        </div>
        <div>
          <h4>Max Price: {maxPrice || ""} </h4>
          <input type="range" 
          min={100}
          max={100000}
          value={maxPrice} 
          onChange={(e) => setMaxPrice(Number(e.target.value))} />
        </div>
        <div>
          <h4>Category</h4>
          <select value={category} 
            onChange={(e) => setCategory(e.target.value)} >
            <option value="">All</option> 
            <option value="electronic">Electronic</option> 
            <option value="fashion">Fashion</option> 
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input type="text" 
        placeholder="search by name"
        onChange={(e)=>setSearch(e.target.value)} />

        <div className="search-product-list">
          <ProductCard  
          productId="sdfojosfd" 
          photo="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SR270,180_QL70_.jpg" 
          name="Macbook" 
          price={900} 
          stock={20} 
          handler={addToCartHandler}/>
        </div>
        <article>
          <button onClick={()=>setPage(prev=>(prev <= 1) ? 1 : prev-1  )} disabled={isPrevBtn}>Prev</button>
          <span>{page} of {totalPage}</span>
          <button onClick={()=>setPage(prev=>(prev < totalPage) ?  prev+1 : prev)} disabled={isNextBtn}>Next</button>
        </article>
      </main>
    </div>
  )
}

export default Search