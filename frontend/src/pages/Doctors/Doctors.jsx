import {React,useEffect,useState} from "react";
import DoctorCard from "./DoctorCard";

// {
//     id: "01",
//     name: "Dr. Alfaz Ahmed",
//     specialty: "Surgeon",
//     avgRating: 4.8,
//     totalRating: 272,
//     photo: doctorImg01,
//     totalPatients: 1500,
//     hospital: "Mount Adora Hospital, Sylhet.",
//   },
function Doctors() {
  const [doctors,setDoctors]=useState([])
  useEffect(() => {
    getDoctors();
  }, []);
  const getDoctors = async () => {
    let result = await fetch("http://localhost:5001/getdoctors");
    result = await result.json();
    setDoctors(result);
  };

  return (
    <div>
      <div className="bg-[#F3F5CC] p-10 flex flex-col items-center justify-center">
        <h1 className="text-center text-[30px] font-[600]">Find a doctor</h1>
        <input
          type="text"
          placeholder="Search Doctor"
          className="searchwidth p-2 border border-gray-400 rounded-2xl mt-[20px]"
        ></input>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ml-[20px] mt-[20px]">
        {doctors.map((item, index) => {
          return <DoctorCard key={index} doctor={item} />;
        })}
      </div>
    </div>
  );
}

export default Doctors;
