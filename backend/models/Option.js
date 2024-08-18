import mongoose from 'mongoose';

const optionSchema = new mongoose.Schema({
    
  optionName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  options: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
      },
    },
  ],
});

const Option = mongoose.model('Option', optionSchema);

export default Option;
