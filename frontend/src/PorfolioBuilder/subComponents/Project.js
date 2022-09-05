import {
  CardContent,
  Divider,
  Grid,
  InputAdornment,
  TextField,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DateRangeIcon from '@material-ui/icons/DateRange';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import LinkIcon from '@material-ui/icons/Link';
import TitleIcon from '@material-ui/icons/Title';
import DescriptionIcon from '@material-ui/icons/Description';
import { v4 as uuidv4 } from 'uuid';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Projecctfetch from '../fetching data/Projecctfetch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Project = (props) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [Image, setImage] = useState('');
  const [inputs, setInputs] = useState({
    Title: '',
    Link: '',
    Tags: '',
    Description: '',
    Date: '',
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequestAdd = async () => {
    const res = await axios
      .post('http://localhost:4000/api/project/add', {
        Title: inputs.Title,
        Link: inputs.Link,
        Description: inputs.Description,
        Tags: inputs.Tags,
        Date: inputs.Date,
        image: Image,
        user: userInfo.user._id,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const navigation = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequestAdd();
    window.location.reload();
  };

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/uploadsproject`,
        bodyFormData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      //console.log(data)
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      console.log(error.message);
      setLoadingUpload(false);
    }
  };
  const [perosnalsx, setperosnals] = useState();
//fetch backend
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:4000/api/project/user/${userInfo.user._id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setperosnals(data.project.projectdetails));
  }, []);



  //Fetch Data
const filterTitle = (names) =>{
  setInputs({
    Title: names
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

const filterimage = (names) =>{
  
    setImage(names)
}
const filterTags = (names) =>{
setInputs({
  Tags:names
})
}
const filterDate = (names)=>{
  setInputs({
    Date: names
  })
}
const[ID,setID] = useState('');
const filterID=(names)=>{
  setID(names)
   console.log(ID)
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
const updateRequest = async() =>{
  
  const res = await axios.put(`http://localhost:4000/api/project/update/${ID}`,{
   
    Title: inputs.Title,
    Link: inputs.Link,
    Description: inputs.Description,
    Tags: inputs.Tags,
    Date: inputs.Date,
    image: Image,
    
  }
  )
  const data = await res.data;
  return data;
  


}
const handleupdate = (e) => { 
  e.preventDefault();
  updateRequest();
  window.location.reload();
    
      
    
};

 return (
    <div className="App mt-3">
      <div className="container col-lg-10 mx-auto text-center">
        <div>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className={props}>
                <Grid container spacing={2} alignItems="center" lg={12}>
                  <Grid item md={6} sm={12} xs={12} lg={6}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="Title"
                      placeholder="Title"
                      value={inputs.Title}
                      onChange={handleChange}
                      style={{ alignItems: 'left', width: '80%' }}
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <TitleIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12} lg={6}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="Link"
                      placeholder="Link"
                      onChange={handleChange}
                      value={inputs.Link}
                      style={{ width: '80%' }}
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

                  <Grid item md={6} sm={12} xs={12} lg={6}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="Description"
                      value={inputs.Description}
                      onChange={handleChange}
                      placeholder="Description"
                      style={{ alignItems: 'left', width: '80%' }}
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
                  <Grid item md={6} sm={12} xs={12} lg={6}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="Tags"
                      value={inputs.Tags}
                      onChange={handleChange}
                      placeholder="Tags"
                      style={{ width: '80%' }}
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
                  <Grid item md={6} sm={12} xs={12} lg={6}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="Date"
                      value={inputs.Date}
                      onChange={handleChange}
                      placeholder="In year"
                      type="date"
                      style={{
                        alignItems: 'left',
                        width: '80%',
                        paddingBottom: '10.5%',
                      }}
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <DateRangeIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12} lg={6}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      name="Image"
                      value={Image}
                      placeholder="Project Image"
                      onChange={(e) => setImage(e.target.value)}
                      style={{ width: '80%' }}
                      required
                      InputProps={{
                        readOnly:true,
                        endAdornment: (
                          <InputAdornment position="start">
                            <DescriptionIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <div>
                      <label htmlFor="imageFile">Image File</label>
                      <br />
                      <input
                        style={{ width: '82%' }}
                        type="file"
                        id="imageFile"
                        label="Choose Image"
                        onChange={uploadFileHandler}
                      ></input>
                      {loadingUpload}
                      {errorUpload}
                    </div>
                  </Grid>
                </Grid>
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
                <Projecctfetch
                  IDSAVE={filterID}
                  Titelation={filterTitle}
                  Descriptation={filterDescription}
                  Tagsation={filterTags}
                  Imagation={filterimage}
                  Linkation={filterLink}
                  Datation={filterDate}
                  keyz={index}
                  id={personal._id}
                  Title={personal.Title}
                  Link={personal.Link}
                  Tags={personal.Tags}
                  Description={personal.Description}
                  image={personal.image}
                  Date={personal.Date}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
