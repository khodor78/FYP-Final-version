import {
  CardContent,
  Grid,
  Input,
  InputAdornment,
  TextField,
} from '@material-ui/core';
import React, { Children, useEffect, useState } from 'react';
import { useRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
import EmailIcon from '@material-ui/icons/Email';
import { useDispatch, useSelector } from 'react-redux';
import { savePersonalDetails } from '../../actions/cartActions';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Personal from '../fetching data/Personal';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { get } from 'mongoose';
import Form from 'react-bootstrap/Form';
import { CART_SAVE_SOCIAL_MEDIA_REQUEST } from '../../constants/cartConstants';
import { Button, Col, Container, Row } from 'react-bootstrap';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const PersonalDetails = () => {
  //image
  const [Image, setImage] = useState('');

  //parent to child
  const getData = (data) => {
    return data;
  };

  //
  const [perosnalsx, setperosnals] = useState();
  console.log(perosnalsx?.length);

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
      })
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

    sendRequestadd();
    window.location.reload();
  };

  //Updateee
  const [filter, setfilter] = useState('');
  const id = useParams().id;
  const filterNames = (names) => {
    setfilter(names);
  };

  const namehandler = () => {};
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
      setspecificpersons(data.perosnal);
      setInputs({
        firstname: data.perosnal.firstname,
        lastname: data.perosnal.lastname,
        email: data.perosnal.email,
        Biography: data.perosnal.biography,
        Characteristics: data.perosnal.characteristics,
        Image: data.perosnal.image,
      });
    });
  }, [filter]);
  fetchdata();

  const updateRequest = async () => {
    const res = await axios.put(
      `http://localhost:4000/api/personal/update/${filter}`,
      {
        firstname: inputs.firstname,
        lastname: inputs.lastname,
        email: inputs.email,
        biography: inputs.Biography,
        characteristics: inputs.Characteristics,
        image: Image,
      }
    );
    const data = await res.data;
    return data;
  };
  const notitfy = (e) => {
    e.preventDefault();
    toast.error('Please Fill All Data required', {
      position: 'top-right',
      autoClose: 5003,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const cant = (e) => {
    e.preventDefault();
    toast.error('Access Only One Personal Detials!', {
      position: 'top-right',
      autoClose: 5003,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleupdate = (e) => {
    e.preventDefault();

    updateRequest();
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
      const { data } = await axios.post(
        `http://localhost:4000/api/uploads`,
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

  return (
    <div className="App mt-3">
      <div className="container col-lg-10 mx-auto text-center">
        <div>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div>
                <Grid container spacing={2} alignItems="center" lg={12}>
                  <Grid id="decrease"  item md={6} sm={12} xs={12} lg={6}>
                    <TextField
                      id="decrease"
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
                  <Grid id="decrease"  item md={6} sm={12} xs={12} lg={6}>
                    <TextField
                      id="decrease"
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

                  <Grid id="decrease"  item md={6} sm={12} xs={12} lg={6}>
                    <TextField
                      id="decrease"
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

                  <Grid id="decrease"  item md={6} sm={12} xs={12} lg={6}>
                    <TextField
                      id="decrease"
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
                  <Grid id="decrease" item md={6} sm={12} xs={12} lg={6}>
                    <TextField
                      id="decrease"
                      margin="dense"
                      label="Characteristics"
                      variant="outlined"
                      name="Characteristics"
                      value={inputs.Characteristics}
                      onChange={handleChange}
                      required
                      style={{
                        alignItems: 'left',
                        width: '80%',
                   
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid  id="decrease"  item md={6} sm={12} xs={12} lg={6}>
                    <TextField
                      id="decrease"
                      margin="dense"
                      label="Personal Image"
                      variant="outlined"
                      value={Image}
                      onChange={(e) => setImage(e.target.value)}
                      name="Image"
                      defaultValue="Please Insert your Photo"
                      required
                      style={{ alignItems: 'left', width: '80%' }}
                      InputProps={{
                        readOnly: true,

                        endAdornment: (
                          <InputAdornment position="end">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <div>
                    
                    </div>
                    
                  </Grid>
                </Grid>
                <div className='imageplace'>
                <label htmlFor="imageFile">Image File</label>
                      <input
                        style={{  width: '66%' }}
                        type="file"
                        id="imageFile"
                        label="Choose Image"
                        onChange={uploadFileHandler}
                      ></input>
                      {loadingUpload}
                      {errorUpload}
                      </div>
                <hr />

                {/* <Button
              variant="contained"
              color="secondary"
              onClick={this.createAndDownloadPDF}
              endIcon={<GetAppIcon />}
            >
              Generate PDF
            </Button> */}

                <button
                  onClick={
                    inputs.Characteristics === '' ||
                    inputs.Biography === '' ||
                    Image === '' ||
                    inputs.email === '' ||
                    inputs.firstname === '' ||
                    inputs.lastname === ''
                      ? notitfy
                      : handleupdate
                  }
                  disabled={perosnalsx?.length > 0 ? false : true}
                  className="button2"
                >
                  Update
                </button>

                <button
                  onClick={perosnalsx?.length > 0 ? cant : ''}
                  className="button"
                  type="submit"
                >
                  Submit
                </button>
                <ToastContainer />
              </div>
            </form>
          </CardContent>

          {perosnalsx &&
            perosnalsx.map((personal, index) => (
              <div>
                <Personal
                  filteration={filterNames}
                  Send={getData}
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
            ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
