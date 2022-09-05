const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: [true, 'Please Enter your First name'],
    trim: true,
  },
  last_name: {
    type: String,
    required: [true, 'Please Enter your Last name'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please Enter your Description'],
  },
  Characteristics: {
    type: String,
    required: [true, 'Please Enter your Characterisctics'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please Enter Your Email']
   
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

  social_media: [
    {
        public_id: {
            type: String,
            required: true,
      },
      name: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
      image_link: {
        type: String,
        required: true,
      },
    },
  ],
    project: [
    {
        public_id: {
            type: String,
            required: true,
      },
      Discription: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
      image_link: {
        type: String,
        required: true,
      },
      tags: {
        type: String,
        required: true,
      },
      tags: {
        type: String,
        required: true,
      },
      Date: {
        type: Date,
        required: true,
      },
    },
  ],

  experience: [
    {
        public_id: {
            type: String,
            required: true,
      },
      Discription: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
      skill_learned: {
        type: String,
        required: true,
      },
      position: {
        type: String,
        required: true,
      },
     
    
    },
  ],

  skill: [
    {
        public_id: {
            type: String,
            required: true,
      },
      major: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      skill: {
        type: String,
        required: true,
      },
      future_update: {
        type: String,
        required: true,
      },
     
    
    },
  ],
  about: [
    {
        public_id: {
            type: String,
            required: true,
      },
      Discription: {
        type: String,
        required: true,
      },
      seeking: {
        type: String,
        required: true,
      },
        hubby: {
        type: String,
        required: true,
      },
    
     
    
    },
  ],
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', productSchema);
