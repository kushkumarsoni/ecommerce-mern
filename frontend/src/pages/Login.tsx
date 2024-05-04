import { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [gender,setGender] = useState<string>("");
    const [dob,setDob] = useState<string>("");
  return (
    <div className='login'>
        <button className="back-button" onClick={()=>navigate("/")}><BiArrowBack /></button>
        <form>
            <h1>Login</h1>
            <label htmlFor="gender">Gender: </label>
            <select id="gender" name="gender" value={gender} onChange={(e)=>{setGender(e.target.value)}} required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <label htmlFor="date-of-birth">Date of Birth: </label>
            <input type="date" id="date-of-birth" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} required/>
            <p>Already signed In Once</p>
            <button type="submit"><FaGoogle /><span>Sign in with Google</span></button>
        </form>
    </div>
  )
}

export default Login