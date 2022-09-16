import {
    CardContent,
    Divider,
    Grid,
    InputAdornment,
    TextField,
  } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import BusinessIcon from '@material-ui/icons/Business';
  import React, { useEffect, useState } from 'react';
  import LinkIcon from '@material-ui/icons/Link';
  import { v4 as uuidv4 } from 'uuid';
  import { Button } from 'react-bootstrap';
  import { useNavigate } from 'react-router-dom';
  import { useSelector } from 'react-redux';
  import axios from 'axios';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Experiencefetch from '../fetching data/Experiencefetch';
import AboutFetch from '../fetching data/AboutFetch';


  const AboutDetails = (props) => {
    const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
    const [inputs, setInputs] = useState({
      majorskill: '',
      experience: '',
      Description: '',
      Future: '',
     
    });
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
const handlesubmit = (e)=>{
  e.preventDefault();
  sendRequestAdd();
  window.location.reload();
  
};

const sendRequestAdd = async() =>{
    const res = await axios
      .post('http://localhost:4000/api/about/add', {
        majorskill: inputs.majorskill,
        experience: inputs.experience,
        Description: inputs.Description,
        Future: inputs.Future,
       
        user: userInfo.user._id,
       
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data; 
}
const [perosnalsx, setperosnals] = useState();
//fetch backend
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:4000/api/about/user/${userInfo.user._id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setperosnals(data.project.aboutdetails));
  }, []);

//Fetch Data
const filterTitle = (names) =>{
  setInputs({
    majorskill: names
  })
}
const filterDescription = (names) =>{
  setInputs({
    Description: names
  })
}


const filterTags = (names) =>{
setInputs({
    Future:names
})
}
const filterExperience = (names)=>{
  setInputs({
    experience  : names
  })
}
const[ID,setID] = useState('');
const filterID=(names)=>{
  setID(names)
   console.log(ID)
}
const handleupdate = (e) => { 
  e.preventDefault();
  updateRequest();
  window.location.reload();
};
const updateRequest = async() =>{
  
  const res = await axios.put(`http://localhost:4000/api/about/update/${ID}`,{
    majorskill: inputs.majorskill,
    experience: inputs.experience,
    Description: inputs.Description,
    Future: inputs.Future,
  }
  )
  const data = await res.data;
  return data;
}
const notitfy = (e)=>{
  e.preventDefault();
  toast.error('Please Fill All Data required', {
    position: "top-right",
    autoClose: 5003,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}
const select = (e)=>{
  e.preventDefault();
  toast.error('Please Select Project to update', {
    position: "top-right",
    autoClose: 5003,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}
    return(
        <div className="App mt-3">
      <div className="container col-lg-10 mx-auto text-center">
        <div>
        <CardContent>
        <form onSubmit={handlesubmit}>
              <div className={props}>
  <Grid container spacing={2} alignItems="center" lg={12}>
    <Grid
      item
      xs={12}
      lg={4}
      alignItems="flex-end"
      alignContent="flex-end"
    >
      <h5>
        <CheckCircleIcon />
        <span className="pl-3">Skill </span>
      </h5>
    </Grid>
    <Grid item xs={0} lg={8} md={12}/>

    <Grid id="decrease"  item md={6} sm={12} xs={12} lg={6}>
      <TextField
        margin="dense"
        variant="outlined"
        name="majorskill"
        value={inputs.majorskill}
        onChange={handleChange}
        label="Specialized-Skill"
        style={{width: '80%'}}
        required
       
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <BusinessIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
    <Grid id="decrease"  item md={6} sm={12} xs={12} lg={6}>
      <TextField
        margin="dense"
        variant="outlined"
        name="experience"
        value={inputs.experience}
        onChange={handleChange}
        label="Skills"
        style={{width: '80%'}}
        required
      
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <EventSeatIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>

    <Grid id="decrease"  item md={6} sm={12} xs={12} lg={6}>
      <TextField
        margin="dense"
        variant="outlined"
        name="Future"
        onChange={handleChange}
        value={inputs.Future}
        label="Future Thing To Learn in this Skill"
        style={{width: '80%'}}
        required
     
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <TimelapseIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
   

    <Grid id="decrease"  item md={6} sm={12} xs={12} lg={6}>
      <TextField
        margin="dense"
        label="Description"
        variant="outlined"
        onChange={handleChange}
        value={inputs.Description}
        style={{width: '80%'}}
        name="Description"
        required

        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <DescriptionIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  </Grid>
  <br />
  <Divider />
  <br />
  
 
                  <button
               onClick={(ID==="")?select:(inputs.Title ==="" || inputs.Link==="" || Image===""||inputs.Description==="" || inputs.Tags==="" || inputs.Date==="")?notitfy:handleupdate} disabled={perosnalsx?.length>0 ?false:true} 
                 className="button2">Update</button>

                <button className="button" type="submit">
                  Submit
                </button>
                <ToastContainer />  
                <Divider />
              </div>
            </form>
            <hr />
          </CardContent>
          {perosnalsx &&
             perosnalsx.map((personal, index) => (
              <div>
                <AboutFetch
                  IDSAVE={filterID}
                  majoration={filterTitle}
                  Descriptation={filterDescription}
                  Futuration={filterTags}
                  Experiantation={filterExperience}

                  keyz={index}
                  id={personal._id}
                  majorskill={personal.majorskill}
                  experience={personal.experience}
                  Description={personal.Description}
                  Future={personal.Future}
                
                
                />
              

              </div>
            ))}

        </div>
        </div>
       
      </div>
    )}
export default AboutDetails 