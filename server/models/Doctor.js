import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const doctorSchema = new Schema ({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  speciality: {
    type: Array,
    required: true
  },
  treatments: [
    {
      type: String 
    } 
  ],
  phone: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor;

