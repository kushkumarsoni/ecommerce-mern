import { ChangeEvent, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Shipping = () => {

  const navigate = useNavigate();

  const [shippingInfo,setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: ""
  });

  const inputHandler = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setShippingInfo({...shippingInfo,[e.target.name]: e.target.value});
    }

  const submitShipping = () => {
    console.log(shippingInfo);
  }
  
  return (
    <div className="shipping">
      <button className="back-button" onClick={()=>navigate("/cart")}><BiArrowBack /></button>
      <form  onSubmit={submitShipping}>
        <h1>Shipping Address</h1>
        <input 
        type="text" 
        name="address" 
        value={shippingInfo?.address} 
        onChange={inputHandler} 
        placeholder="address"
        required/><br/>
        <input 
        type="text" 
        name="city" 
        value={shippingInfo?.city} 
        onChange={inputHandler} 
        placeholder="City"
        required/><br />
        <input 
        type="text" 
        name="state" 
        value={shippingInfo?.state} 
        onChange={inputHandler} 
        placeholder="State" 
        required/><br />
        <select 
        name="country" 
        value={shippingInfo?.country} 
        onChange={inputHandler}
        required>
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="uk">United Kingdom</option>
          <option value="us">United State</option>
        </select><br/>
        <input 
        type="text" 
        name="pinCode" 
        value={shippingInfo?.pinCode} 
        onChange={inputHandler}
        placeholder="Pin Code" required/>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  )
}

export default Shipping