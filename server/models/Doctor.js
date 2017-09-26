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
  treatments: {
    type: Array 
  }, 
  phone: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  _createdAt: {
    type: Date,
    required: true
  },
  _isDeleted: {
    type: Boolean,
    required: true,
    default: false
  }
});

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor;

