import { React, useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page refresh)
    if (!email ||!password) {
      setError("Please fill in all the fields.");
      return;
    }
    let result = await fetch("http://localhost:5001/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert(result.result);
    }
  }
  return (
    <div>
    <div className='bg-[#BCF3F9] w-[40rem] p-4 ml-[32rem] mt-[4rem] loginBox rounded-lg'>
      <h1 className="text-3xl text-center">Welcome Back!</h1>
    
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
  
  <button onClick={handleSubmit} className="p-2 btn btn-primary mt-[20px]">
    Log In
  </button>
</form>
</div>

<p className='ml-[32rem] mt-[1rem]'>New User? Consult our doctors who are best in the country <Link to="/signup">
              <p className='font-[500] text-primaryColor'>
                Sign Up here
              </p>
            </Link></p>
</div>
  )
}

export default Login
