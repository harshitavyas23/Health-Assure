import React from 'react'
import img from "../../assets/images/avatar-icon.png";
import hero01 from "../../assets/images/doctor-img01.png";
import star from "../../assets/images/star.png";
const doctorDetail = {
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
      rating: 4,
      review:
        "jfn ejndjeub nwione jenfbjbi iwdnfub eufhb oedinf jbfbewj nedufb jbfbei jwindow jbfjebf",
    },
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
      rating: 4,
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
      course: "Senior Surgeon",
      hospital: "California University",
    },
    {
      year: "2012-2014",
      course: "Senior Surgeon",
      hospital: "California University",
    },
    {
      year: "2012-2014",
      course: "Senior Surgeon",
      hospital: "California University",
    },
    {
      year: "2012-2014",
      course: "Senior Surgeon",
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
function DoctorIntro() {
  return (
    <div className="flex" style={{ width: "18rem" }}>
      <img
        src={hero01}
        className="card-img-top h-[200px] w-[200px]"
        alt="..."
      />
      <div className="ml-[30px]">
        <h5 className="mt-[25px] text-[25px] font-[600]">
          {doctorDetail.name}
        </h5>
        <div className="flex mt-[30px]">
          <span className="badge bg-yellowColor h-[33px] w-[132px] flex items-center justify-center">
            {doctorDetail.specialty}
          </span>
          <div className="flex ml-[100px]">
            <img src={star} alt="" />
            <p className="ml-[4px] mt-[5px]">({doctorDetail.totalRating})</p>
          </div>
        </div>
        <p className="card-text mt-[20px] text-[23px] font-[400]">
          {doctorDetail.hospital}
        </p>
      </div>
    </div>
  );
}

export default DoctorIntro
