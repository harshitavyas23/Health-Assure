const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number },
  photo: { type: String },
  ticketPrice: { type: Number },
  role: {
    type: String,
  },

  // Fields for doctors only
  specialization: { type: String },
  qualifications: {
    type: Array,
  },

  experiences: {
    type: Array,
  },

  bio: { type: String, maxLength: 50 },
  about: { type: String },
  timeSlots: { type: Array },
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
  averageRating: {
    type: Number,
    default: 0,
  },
  totalRating: {
    type: Number,
    default: 0,
  },
  isApproved: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "pending",
  },
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});

module.exports =  mongoose.model("doctors", DoctorSchema);

// {
//   "name": "Charles Dickens",
//   "email":"abc@gmail.com",
//   "password": "abc",
//   "specialty": "Cardiologist",
//   "avgRating": 3.5,
//   "reviews": [
//     {
//       "name": "Henry Jhones",
//       "img": "blob:http://localhost:5173/81a6e68d-b943-4b9a-88f2-a22b4190c1be",
//       "rating": 4,
//       "review":
//         "jfn ejndjeub nwione jenfbjbi iwdnfub eufhb oedinf jbfbewj nedufb jbfbei jwindow jbfjebf",
//     },
//     {
//       "name": "Hen fvf",
//       "img": "blob:http://localhost:5173/81a6e68d-b943-4b9a-88f2-a22b4190c1be",
//       "rating": 4,
//       "review":
//         "jfn ejndjeub nwione jenfbjbi iwdnfub eufhb oedinf jbfbewj nedufb jbfbei jwindow jbfjebf",
//     },
//     {
//       "name": "Charles Dickens",
//       "img": "blob:http://localhost:5173/81a6e68d-b943-4b9a-88f2-a22b4190c1be",
//       "rating": 4,
//       "review":
//         "jfn ejndjeub nwione jenfbjbi iwdnfub eufhb oedinf jbfbewj nedufb jbfbei jwindow jbfjebf",
//     },
//     {
//       "name": "Jhon Jhones",
//       "img": "blob:http://localhost:5173/81a6e68d-b943-4b9a-88f2-a22b4190c1be",
//       "rating": 4,
//       "review":
//         "jfn ejndjeub nwione jenfbjbi iwdnfub eufhb oedinf jbfbewj nedufb jbfbei jwindow jbfjebf",
//     },
    
//   ],
//   "totalRating": 4,

//   "about":
//     "jfn ejndjeub nwione jenfbjbi iwdnfub eufhb oedinf jbfbewj nedufb jbfbei jwindow jbfjebf nv jeb I am doctor detial. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est neque accusamus id eaque culpa inventore cumque reiciendis minus velit unde quo debitis itaque repellat officia beatae magni eos adipisci qui cum, veritatis, reprehenderit doloribus labore. Eveniet optio aliquam dolores vel id soluta assumenda accusantium placeat non, perferendis labore, velit corporis dignissimos maxime quia, libero voluptate officia veritatis harum vitae similique?",
//   "hospital": "Mount Abu Hospital",
//   "education": [
//     {
//       "year": "2012-2014",
//       "course": "Bachelor in heart",
//       "college": "California University",
//     },
//     {
//       "year": "2014-2015",
//       "course": "Bachelor in pulm",
//       "college": "Oxford University",
//     },
//     {
//       "year": "2015-2017",
//       "course": "PHD",
//       "college": "Stanford University",
//     },
//     {
//       "year": "2017-2022",
//       "course": "MS",
//       "college": "California University",
//     },
    
//   ],
//   "experience": [
//     {
//       "year": "2012-2014",
//       "post": "Surgeon",
//       "hospital": "California University",
//     },
//     {
//       "year": "2014-2015",
//       "post": "Junior Surgeon",
//       "hospital": "Oxford University",
//     },
//     {
//       "year": "2015-2019",
//       "post": "Senior Surgeon",
//       "hospital": "California University",
//     },
//     {
//       "year": "2019-2023",
//       "post": "Head Surgeon",
//       "hospital": "California University",
//     },
    
//   ],
//   "timeSlots": [
//     {
//       "day": "Monday",
//       "time": "12am-5pm",
//     },
//     {
//       "day": "Wednesday",
//       "time": "12am-5pm",
//     },
//     {
//       "day": "Friday",
//       "time": "12am-5pm",
//     },
//     {
//       "day": "Saturday",
//       "time": "12am-5pm",
//     },
//   ],
//   "ticketPrice": "INR 1000",
// };