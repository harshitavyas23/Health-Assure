import {React,useState} from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import PatientAvatar from "../assets/images/patient-avatar.png"
// import {NgControl} from '
function UserDetail() {
    const auth = localStorage.getItem("user");
    const obj = JSON.parse(auth);
    let [active,setActive]=useState("appointments")
    let [name, setName] = useState(obj.name);
    const [photo, setPhoto] = useState(obj.photo);
  let [email, setEmail] = useState(obj.email);
  let [bloodType, setBloodType] = useState(obj.bloodType);
  let [phone,setPhone]=useState(obj.phone);
  let [role,setRole]=useState(obj.role);
  let [editOn,setEditOn]=useState(false)
  let [edit,setEdit]=useState(false)
  let [gender, setGender] = useState(obj.gender);
  const params=useParams();
  const updateUser = async () => {
    setEdit(false)
    let result = await fetch(
      `http://localhost:5001/updateuser/${obj._id}`,
      {
        method: "Put",
        body: JSON.stringify({ name, email, role, phone, bloodType, gender,photo }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    result = await result.json();
    localStorage.clear()
    localStorage.setItem("user", JSON.stringify(result));
    window.location.reload();
    
};
//   let [error,setError]=useState('')
const navigate= useNavigate()
const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
};
const handleSettingClick=()=>{
    setEditOn(true)
    setActive("settings")
}
const handleAppointmentClick=()=>{
    setEditOn(false)
    
    setActive("appointments")
}
const handleGenderChange = (selectedGender) => {
    setGender(selectedGender); // Update the gender based on the selection
};
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
  return (
        <div>
            <div className='flex flex-col items-center justify-center mt-[10px]'>
            
            <h1 className='text-[30px]'>Your profile</h1>
            </div>
      <div className='flex'>
        
        {/* =========user card begin================= */}
        <div className='flex flex-col items-center justify-center p-7 ml-[17rem] mt-[2rem]'>
            <img src={obj.photo} alt="" className="w-[8rem] h-[8rem]"/>
            <h1 className='mt-[23px]'>{obj.name}</h1>
            <h1 className='mt-[10px]'>{obj.email}</h1>
            <div className='mt-[30px]'>
            
            <button onClick={handleLogout} className='px-4 py-2 text-white border border-red-600 rounded bg-primaryColor hover:bg-red-600 hover:border-red-700 hover:text-white w-[13rem]'>
                Logout
            </button>
            </div>
            <div className='mt-[30px]'>
                
            <button className="px-4 py-2 text-white bg-red-500 border border-red-600 rounded hover:bg-red-600 hover:border-red-700 hover:text-white w-[13rem]">
                Delete Account
            </button>
            </div>
                
        </div>
        {/* =========user card end================= */}
        {/* ================================other section begin============================ */}
        <div className='bg-[#BCF3F9] w-[40rem] ml-[50px] p-4 mt-[4rem] loginBox rounded-lg'>
            
    <div>
    <button className="text-[25px] mr-[45px]" onClick={handleAppointmentClick}>
              <div>
                <p>
                  Appointments
                </p>
                <span className={`mt-[3px] w-[70px] h-2 bg-yellowColor rounded-full block mt-[3px] ${active==="appointments"?"":"hidden"}`}></span>
              </div>
            </button>
            <button className="text-[25px] mr-[45px]" onClick={handleSettingClick}>
              <div>
                <p>
                  Settings
                </p>
                <span className={`mt-[3px] w-[130px] h-2 bg-yellowColor rounded-full block mt-[-14px] ${active==="settings"?"":"hidden"}`}></span>
              </div>
            </button>
            
              <div className='w-[7rem] ml-[400px] mt-[-35px]'>
                {!edit ?<button onClick={()=>{setEdit(true)}} className={`p-1 bg-primaryColor text-[#fff] rounded-2xl h-[29px] w-[90px] ${editOn===true?"":"hidden"}`}>
                  Edit Info
                </button>:<button onClick={updateUser} className={`p-1 bg-primaryColor text-[#fff] rounded-2xl h-[29px] w-[90px] ${editOn===true?"":"hidden"}`}>
                  Save Info
                </button>}
              </div>
            
    </div>
    
    <form>
  <div className="mb-3 mt-[50px]">
    <p className='ml-[3px]'>Name</p>
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      value={name}
      onChange={(e) => setName(e.target.value)}
      disabled={!edit}
      />
    
  </div>
  <div className="mb-3">
  <p className='ml-[3px]'>Email</p>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      disabled={!edit}
      />
    
  </div>
  <div className="mb-3">
  <p className='ml-[3px]'>Phone</p>
    <input
      type="number"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      disabled={!edit}
      />
    
  </div>
  <div className="mb-3">
  <p className='ml-[3px]'>Blood Group</p>
    <input
      type="text"
      className="form-control"
      id="exampleInputPassword1"
      value={bloodType}
      onChange={(e) => setBloodType(e.target.value)}
      disabled={!edit}
    />
  </div>
  
  <div className="dropdown">
      <p className="ml-[3px]">Gender</p>
      <button
        className="btn btn-secondary dropdown-toggle mt-[3px] ml-[3px] p-2"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        disabled={!edit}
      >
        {gender}
      </button>
      <ul className="dropdown-menu">
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleGenderChange('male')}
          >
            Male
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleGenderChange('female')}
          >
            Female
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleGenderChange('other')}
          >
            Other
          </a>
        </li>
      </ul>
    </div>
  <div className="dropdown mt-[10px]">
      <p className="ml-[3px]">Role</p>
      <button
        className="btn btn-secondary dropdown-toggle mt-[3px] ml-[3px] p-2"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        disabled={!edit}
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
            <input type="file" onChange={handleFileChange} disabled={!edit
            }/>
            <img src={photo} className='w-[50px] h-[50px]' />
 
        </div>
  
</form>
</div>
        {/* ================================other section end============================ */}
        
    </div>
      </div>
  )
}

export default UserDetail