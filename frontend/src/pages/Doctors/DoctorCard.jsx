import React from "react";
import star from "../../assets/images/Star.png";
function DoctorCard(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.doctor.photo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.doctor.name}</h5>
        <div className="flex">
          <span className="badge bg-yellowColor">{props.doctor.specialty}</span>
          <div className="flex ml-[100px]">
            <img src={star} alt="" />
            <p className="ml-[5px]">({props.doctor.totalRating})</p>
          </div>
        </div>
        <p className="card-text mt-[20px]">{props.doctor.hospital}</p>
        <a href="#" className="btn btn-primary p-2 bg-primaryColor mt-[9px]">
          Book Appointment
        </a>
      </div>
    </div>
  );
}

export default DoctorCard;
