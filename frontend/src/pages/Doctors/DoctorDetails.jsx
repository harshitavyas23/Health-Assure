import {React,useState} from 'react'
// import {DoctorIntro} from './DoctorIntro'
// import { Link } from 'react-router-dom';
import img from "../../assets/images/avatar-icon.png";
import hero01 from "../../assets/images/doctor-img01.png";
import star from "../../assets/images/star.png";

const doctor = {
  name: "Charles Dickens",
  specialty: "Cardiologist",
  avgRating: 3.5,
  reviews: [
    {
      name: "Henry Jhones",
      img: img,
      rating: 4,
      review:
        "jfn ejndjeub nwione jenfbjbi iwdnfub eufhb oedinf jbfbewj nedufb jbfbei jwindow jbfjebf",
    },
    {
      name: "Henry Jhones",
      img: img,
      rating: 3,
      review:
        "jfn ejndjeub nwione jenfbjbi iwdnfub eufhb oedinf jbfbewj nedufb jbfbei jwindow jbfjebf",
    },
    {
      name: "Henry Jhones",
      img: img,
      rating: 2,
      review:
        "jfn ejndjeub nwione jenfbjbi iwdnfub eufhb oedinf jbfbewj nedufb jbfbei jwindow jbfjebf",
    },
    {
      name: "Henry Jhones",
      img: img,
      rating: 5,
      review:
        "jfn ejndjeub nwione jenfbjbi iwdnfub eufhb oedinf jbfbewj nedufb jbfbei jwindow jbfjebf",
    },
  ],
  totalRating: 4,

  about:
    "jfn ejndjeub nwione jenfbjbi iwdnfub eufhb oedinf jbfbewj nedufb jbfbei jwindow jbfjebf nv jeb I am doctor detial. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est neque accusamus id eaque culpa inventore cumque reiciendis minus velit unde quo debitis itaque repellat officia beatae magni eos adipisci qui cum, veritatis, reprehenderit doloribus labore. Eveniet optio aliquam dolores vel id soluta assumenda accusantium placeat non, perferendis labore, velit corporis dignissimos maxime quia, libero voluptate officia veritatis harum vitae similique?",
  hospital: "Mount Abu Hospital",
  education: [
    {
      year: "2012-2014",
      course: "Bachelor in heart",
      college: "California University",
    },
    {
      year: "2012-2014",
      course: "Bachelor in heart",
      college: "California University",
    },
    {
      year: "2012-2014",
      course: "Bachelor in heart",
      college: "California University",
    },
    {
      year: "2012-2014",
      course: "Bachelor in heart",
      college: "California University",
    },
  ],
  experience: [
    {
      year: "2012-2014",
      post: "Senior Surgeon",
      hospital: "California University",
    },
    {
      year: "2012-2014",
      post: "Senior Surgeon",
      hospital: "California University",
    },
    {
      year: "2012-2014",
      post: "Senior Surgeon",
      hospital: "California University",
    },
    {
      year: "2012-2014",
      post: "Senior Surgeon",
      hospital: "California University",
    },
  ],
  timeSlots: [
    {
      day: "Monday",
      time: "12am-5pm",
    },
    {
      day: "Wednesday",
      time: "12am-5pm",
    },
    {
      day: "Friday",
      time: "12am-5pm",
    },
    {
      day: "Saturday",
      time: "12am-5pm",
    },
  ],
  ticketPrice: "INR 1000",
};
function doctors() {
    let [doctor,setDoctor]=useState([])
    const getSingleDoctor = async () => {
      let doctor = await fetch(`http://localhost:5001/doctor/${params.id}`);
      doctor = await doctor.json();
      setDoctor(doctor);
      
    };
    
    
    const [active, setActive] = useState("about");
  return (
    <div>
      <div className="flex mt-[50px]">
        <div className="ml-[180px] w-[50rem]">
          {/* ===============doctor card intro start========================== */}
          <div className="flex" style={{ width: "18rem" }}>
            <img
              src={hero01}
              className="card-img-top h-[200px] w-[200px]"
              alt="..."
            />
            <div className="ml-[30px]">
              <h5 className="mt-[25px] text-[25px] font-[600]">
                {doctor.name}
              </h5>
              <div className="flex mt-[30px]">
                <span className="badge bg-yellowColor h-[33px] w-[132px] flex items-center justify-center">
                  {doctor.specialty}
                </span>
                <div className="flex ml-[100px]">
                  <img src={star} alt="" />
                  <p className="ml-[4px] mt-[5px]">
                    ({doctor.totalRating})
                  </p>
                </div>
              </div>
              <p className="card-text mt-[20px] text-[23px] font-[400]">
                {doctor.hospital}
              </p>
            </div>
          </div>
          {/* ===============doctor card intro end========================== */}
          <div className="flex mt-[30px]">
            {/* ===============the two buttons start========================== */}
            
            <button className="text-[25px] mr-[45px]" onClick={() => setActive("about")}>
              <div>
                <p>
                  About
                </p>
                <span className={`mt-[3px] w-[70px] h-2 bg-yellowColor rounded-full block mt-[-14px] ${active==="about"?"":"hidden"}`}></span>
              </div>
            </button>
            <button className="text-[25px] mr-[45px]" onClick={() => setActive("feedback")}>
              <div>
                <p>
                  Feedback
                </p>
                <span className={`mt-[3px] w-[130px] h-2 bg-yellowColor rounded-full block mt-[-14px] ${active==="feedback"?"":"hidden"}`}></span>
              </div>
            </button>
            
            
            
            

            {/* ===============the two buttons end========================== */}
          </div>
          {/* ===============sections start========================== */}
          <div className='mt-[40px]'>
            {active === "about" ? (
              <div className='mt-[50px] text-[20px]'>
                <p>{doctor.about}</p>
                {/* =====================Education begin================================ */}
                <div className=''>
                  <p className='text-[27px] mt-[40px]'>Education</p>
                  <div>
                    <ul>
                      {
                        doctor.education.map((item,index)=>(
                          <li key={index} className='bg-[#F9F9A6] mt-[10px] p-3 rounded-2xl'>
                            <div className='flex'>
                              <div>
                                <p className='w-[38rem] text-[17px]'>{item.course}</p>
                                <p className='text-[15px]'>{item.college}</p>
                              
                              </div>
                              <p className="ml-[35px] text-[17px]">
                                {item.year}
                              </p>
                            </div>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
                      {/* =====================Education end================================ */}
                <div className='row-span-3'>
                  <p className='text-[27px] mt-[40px]'>Experience</p>
                  <div className=''>
                    <ul>
                      {
                        doctor.experience.map((item,index)=>(
                          <li key={index} className='bg-[#F9F9A6] mt-[10px] p-3 rounded-2xl'>
                            <div className='flex'>
                              <div>
                                <p className='w-[38rem] text-[17px]'>{item.post}</p>
                                <p className='text-[15px]'>{item.hospital}</p>
                              
                              </div>
                              <p className="ml-[35px] text-[17px]">
                                {item.year}
                              </p>
                            </div>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                  
                  <div className=''>
                    <ul>
                      {
                        doctor.reviews.map((item,index)=>(
                          <li key={index} className='bg-[#F9F9A6] mt-[10px] p-3 rounded-2xl'>
                            <div className='flex'>
                              <div>
                                
                              <div className='flex'>
                                <img src={item.img} alt="" />
                                <p className='w-[38rem] text-[17px] ml-[7px]'>{item.name}</p>
                                {/* <p className='text-[15px]'>{item.hospital}</p> */}
                              
                              </div>
                              <p className='w-[37rem] mt-[10px] ml-[32px]'>
                                {item.review}
                              </p>
                              </div>
                              <div>
                                <ul className='flex'>
                                  {
                                    Array.from({length:5},(_,index)=>(
                                      <li key={index} className="text-lg text-yellow-500">
                                        {/* <img src={star} alt="."/> */}
                                        {index+1<=item.rating ? (<span class="fa fa-star"></span>):(<span class="fa fa-star unchecked"></span>)}

                                      </li>
                                    ))
                                  }
                                </ul>
                              </div>
                              <p className="ml-[11px] text-[17px]">
                                {item.rating}
                              </p>
                            </div>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  
                </div>
            )}
          </div>
          {/* ===============sections end========================== */}
        </div>
        <div>
          <div
            className="bg-[#BCF3F9] p-6 rounded-2xl ml-[30px]"
            style={{ width: "18rem" }}
          >
            <div className="">
              <h5 className="text-[40px]">{doctor.ticketPrice}</h5>
              <h6 className="mb-2 text-body-secondary">
                Book before all slots are full!
              </h6>
              <h2 className="text-[20px] mt-[17px]">Time Slots</h2>
              <ul className="mt-[15px]">
                {doctor.timeSlots.map((item, index) => (
                  <li className="mt-[5px]">
                    <div className="flex">
                      <p className="w-[100px]">{item.day}</p>
                      <p className="text-left ml-[45px]">{item.time}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <button
                class="btn btn-primary w-[100px] h-[40px] mt-[20px]"
                type="submit"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default doctors
