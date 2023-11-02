import {React,useState, useEffect} from 'react'
import signup from "../assets/images/signup.gif"
import { Link, useNavigate } from 'react-router-dom'
function Signup() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error,setError]=useState('')
  let [role,setRole]=useState("patient")
  let [photo,setPhoto]=useState("blob:http://localhost:5173/ce9dc836-fa62-4b6e-ba3c-2c24f37eaad6")
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page refresh)
    if (!name || !email || !password) {
      setError('Please fill in all the fields.');
      return;
    }

    let result = await fetch("http://localhost:5001/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password,role,photo }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    setError("")
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/");
    console.warn(result);
  
  }
  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole); // Update the gender based on the selection
};
const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      if (selectedFile.type.startsWith('image/')) {
        // It's an image file
        const fileURL = URL.createObjectURL(selectedFile);
        console.log(fileURL)
        setPhoto(fileURL);
      } }else {
        // Not an image, handle the error or provide feedback
        alert('Please select an image file');
      }
    }
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  return (
    <div className='flex p-10 ml-[40px]'>
      <div>
        <img src={signup} alt="/" className='h-[500px] ml-[20px]' />
      </div>
    
    <div>
    <div className='bg-[#BCF3F9] w-[40rem] ml-[50px] p-4 mt-[4rem] loginBox rounded-lg'>
      <h1 className="text-3xl text-center">Sign Up here!</h1>
    
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Name
    </label>
    <input
      type="name"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    
  </div>
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
  
  <div className="dropdown mt-[10px]">
      <p className="ml-[3px]">Role</p>
      <button
        className="btn btn-secondary dropdown-toggle mt-[3px] ml-[3px] p-2"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        
      >
        {role}
      </button>
      <ul className="dropdown-menu">
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleRoleChange('patient')}
          >
            patient
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleRoleChange('doctor')}
          >
            doctor
          </a>
        </li>
      </ul>
    </div>
    <div className="image mt-[20px]">
            <h2>Add Image:</h2>
            <input type="file" onChange={handleFileChange} />
            <img src={photo} className='w-[50px] h-[50px]' />
 
        </div>

  {error!=="" && <p className='text-[#F0121C]'>{error}</p>}
  <button className="p-2 btn btn-primary mt-[20px]" onClick={handleSubmit}>
    Signup
  </button>
</form>
</div>

<p className='ml-[3rem] mt-[1rem]'>Already a user? Consult our doctors who are best in the country <Link to="/login">
              <p className='font-[500] text-primaryColor'>
                Log In here
              </p>
            </Link></p>
</div>
</div>

  )
}

export default Signup


