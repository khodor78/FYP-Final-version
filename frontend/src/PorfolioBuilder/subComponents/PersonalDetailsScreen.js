import {
  CardContent,
  Grid,
  Input,
  InputAdornment,
  TextField,
} from '@material-ui/core';
import React, { Children, useEffect, useState } from 'react';
import {useRef} from 'react';

import EmailIcon from '@material-ui/icons/Email';
import { useDispatch, useSelector } from 'react-redux';
import { savePersonalDetails } from '../../actions/cartActions';
import axios from 'axios';
import Personal from '../fetching data/Personal';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { get } from 'mongoose';
import Form from 'react-bootstrap/Form';
import { CART_SAVE_SOCIAL_MEDIA_REQUEST } from '../../constants/cartConstants';


const PersonalDetails =() => {
//image
const [Image, setImage] = useState('');


//parent to child 
const getData = (data)=>{
return data;
}



//
  const [perosnalsx, setperosnals] = useState();
 console.log(perosnalsx?.length)
 
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:4000/api/personal/user/${userInfo.user._id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setperosnals(data.personals.personals));
  }, []);

  const [inputs, setInputs] = useState({
    firstname: '',
    lastname: '',
    email: '',
    Biography: '',
    Characteristics: '',
    
  });
  
  const sendRequestadd = async () => {
   
    const res = await axios
      .post('http://localhost:4000/api/personal/add', {
        firstname: inputs.firstname,
        lastname: inputs.lastname,
        email: inputs.email,
        biography: inputs.Biography,
        characteristics: inputs.Characteristics,
        image: Image,
        user: userInfo.user._id,
       
      }
      )
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendRequestadd()
    window.location.reload();
    
    
  }; 




//Updateee
const[filter,setfilter]= useState("");
const id = useParams().id;
const filterNames = (names) =>{
 setfilter(names);

}

const namehandler = () =>{
 


}
const [specificpersons, setspecificpersons] = useState();
const fetchdata = async () => {
  const res = await axios
    .get(`http://localhost:4000/api/personal/${filter}`)
    .catch((err) => console.log(err));
    const data = await res.data;
    return data;
};
useEffect(() => {
  fetchdata().then((data) => {
    setspecificpersons(data.perosnal)
    setInputs({
      firstname: data.perosnal.firstname,
      lastname: data.perosnal.lastname,
      email: data.perosnal.email,
      Biography: data.perosnal.biography,
      Characteristics: data.perosnal.characteristics,
      Image: data.perosnal.image,
      
    })
   } );
}, [filter]);
fetchdata();

const updateRequest = async() =>{
  const res = await axios.put(`http://localhost:4000/api/personal/update/${filter}`,{
    firstname: inputs.firstname,
    lastname: inputs.lastname,
    email: inputs.email,
    biography: inputs.Biography,
    characteristics: inputs.Characteristics,
    image: Image,
 
  }).catch((err)=>console.log(err));
  const data = await res.data;
  return data;

}
const handleupdate = (e) => {
  e.preventDefault();
;
updateRequest()
  window.location.reload();
    
      
    
};
//image
const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');


  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await axios.post(`http://localhost:4000/api/uploads`, bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      //console.log(data)
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      console.log(error.message)
      setLoadingUpload(false);
    }
  };


  return (
    <div>
 

      <CardContent>
        <form onSubmit={handleSubmit}>
          <div >
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="firstname"
                  value={inputs.firstname}
                  onChange={handleChange}
                  label="First Name"
                  style={{ width: '80%' }}
                  required
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Last Name"
                  value={inputs.lastname}
                  onChange={handleChange}
                  variant="outlined"
                  style={{ width: '80%' }}
                  name="lastname"
                  required
                />
              </Grid>

              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  type="email"
                  margin="dense"
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                  required
                  style={{ alignItems: 'left', width: '80%' }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Biography"
                  variant="outlined"
                  name="Biography"
                  value={inputs.Biography}
                  onChange={handleChange}
                  required
                  style={{ alignItems: 'left', width: '80%' }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Characteristics"
                  variant="outlined"
                  name="Characteristics"
                  value={inputs.Characteristics}
                  onChange={handleChange}
                  required
                  style={{ alignItems: 'left', width: '80%' }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                id="Image"
                  margin="dense"
                 disabled
                  variant="outlined"
                  value={Image}
                  onChange={(e) => setImage(e.target.value)
                  
                  }
                  name="Image"
                  required
                  style={{ alignItems: 'left', width: '80%' }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
   <div>
              <label htmlFor="imageFile">Image File</label>
              <input
                type="file"
                id="imageFile"
                label="Choose Image"
                onChange={uploadFileHandler}
              ></input>
                 {loadingUpload }
              {errorUpload 
              
              } 
            </div>
              </Grid>
            </Grid>

            <hr />

           

            {/* <Button
              variant="contained"
              color="secondary"
              onClick={this.createAndDownloadPDF}
              endIcon={<GetAppIcon />}
            >
              Generate PDF
            </Button> */}




<button onClick={handleupdate} disabled={perosnalsx?.length>0?false:true} className="button2" >
            Update
          </button>

<button disabled={perosnalsx?.length>0?true:false} className="button" type="submit">
            Continue
          </button>
          </div>
        </form>
      </CardContent>
      
      {perosnalsx &&
        perosnalsx.map((personal, index) => (
        
          <div>
          
          <Personal
          filteration={filterNames}
    Send = {getData}
            keyz={index}
            id={personal._id}
            biography={personal.biography}
            characteristics={personal.characteristics}
            email={personal.email}
            firstname={personal.firstname}
            image={personal.image}
            lastname={personal.lastname}
          />
          </div>
        )
        )
        }
    </div>
  );
};

export default PersonalDetails;
