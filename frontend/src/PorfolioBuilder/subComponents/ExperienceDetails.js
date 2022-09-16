import {
    CardContent,
    Divider,
    Grid,
    InputAdornment,
    TextField,
  } from '@material-ui/core';
  import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import DescriptionIcon from '@material-ui/icons/Description';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import BusinessIcon from '@material-ui/icons/Business';
  import React, { useEffect, useState } from 'react';
  import DateRangeIcon from '@material-ui/icons/DateRange';
  import LinkIcon from '@material-ui/icons/Link';
  import TitleIcon from '@material-ui/icons/Title';
  import { v4 as uuidv4 } from 'uuid';
  import { Button } from 'react-bootstrap';
  import { useNavigate } from 'react-router-dom';
  import { useSelector } from 'react-redux';
  import axios from 'axios';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Experiencefetch from '../fetching data/Experiencefetch';
  const ExperienceDetails = (props) => {
    const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
    const [inputs, setInputs] = useState({
      Organization: '',
      Link: '',
      Position: '',
      Description: '',
      Skill: '',
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
      .post('http://localhost:4000/api/experience/add', {
        organization: inputs.Organization,
        Link: inputs.Link,
        Description: inputs.Description,
        Skill: inputs.Skill,
        Position: inputs.Position,
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
      .get(`http://localhost:4000/api/experience/user/${userInfo.user._id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setperosnals(data.project.expereincedetails));
  }, []);

//Fetch Data
const filterTitle = (names) =>{
  setInputs({
    Organization: names
  })
}
const filterLink = (names) =>{
  setInputs({
    Link: names
  })
}
const filterDescription = (names) =>{
  setInputs({
    Description: names
  })
}


const filterTags = (names) =>{
setInputs({
  Skill:names
})
}
const filterposition = (names)=>{
  setInputs({
    Position  : names
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
  
  const res = await axios.put(`http://localhost:4000/api/experience/update/${ID}`,{
   
    organization: inputs.Organization,
        Link: inputs.Link,
        Description: inputs.Description,
        Skill: inputs.Skill,
        Position: inputs.Position,    
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
        <span className="pl-3">Experience </span>
      </h5>
    </Grid>
    <Grid item xs={0} lg={8} md={12}/>

    <Grid id="decrease"  item md={6} sm={12} xs={12} lg={6}>
      <TextField 
        margin="dense"
        variant="outlined"
        name="Organization"
        value={inputs.Organization}
        onChange={handleChange}
        placeholder="Institue/Organisation"
        style={{ marginLeft:'%', width: '100%'}}
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
        name="Position"
        value={inputs.Position}
        onChange={handleChange}
        placeholder="Position"
        style={{width: '100%'}}
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
        name="Skill"
        onChange={handleChange}
        value={inputs.Skill}
        placeholder="Skill Learned"
        style={{width: '100%'}}
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
        variant="outlined"
        name="Link"
        onChange={handleChange}
        value={inputs.Link}
        placeholder="Link"
        style={{width: '100%'}}
        required
    
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <LinkIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>

    <Grid id="decrease"  item md={6} sm={12} xs={12} lg={12}>
      <TextField
        margin="dense"
        placeholder="Description"
        variant="outlined"
        onChange={handleChange}
        value={inputs.Description}
        style={{width: '100%'}}
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
                <Experiencefetch
                 IDSAVE={filterID}
                 Organization={filterTitle}
                 Descriptation={filterDescription}
                 Skilation={filterTags}
                 Linkation={filterLink}
                 position={filterposition}
                  keyz={index}
                  id={personal._id}
                  organization={personal.organization}
                  Link={personal.Link}
                  Position={personal.Position}
                  Description={personal.Description}
                  Skill={personal.Skill}
                
                />
              </div>
            ))}
        </div>
        </div>
      </div>
    )}
export default ExperienceDetails 