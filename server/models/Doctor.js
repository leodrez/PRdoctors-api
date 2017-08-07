import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const doctorSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  speciality: [
    {
      type: String,
      required: true
    }
  ],
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

