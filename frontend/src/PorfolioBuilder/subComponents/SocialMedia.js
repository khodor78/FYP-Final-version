import {
  CardContent,
  CardHeader,
  Grid,
  InputAdornment,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { createSocialAction } from '../../actions/cartActions';
const SocialMedia = (props) => {
  const [Title, setTitle] = useState('');
  const [Link, setLink] = useState('');
  const [Image, setImage] = useState('');
  

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(createSocialAction({Title, Link, Image} ));

      //window.location.reload();
      //naviagtee
    } catch (error) {
      console.log(error);
    }
  };
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), Title: '', Link: '', Image: '' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('InputFields', inputFields);
  };
  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), firstName: '', lastName: '' },
    ]);
  };

  return (
    <div>
      <Card>
        <CardHeader title="Social Medias" />
        
      </Card>
      {inputFields.map((inputField) => (
        <div key={inputField.id}>
          <CardContent>
          <form onSubmit={submitHandler}>
            <div className={props}>
              <Grid container spacing={2} alignItems="center" lg={12}>
                <Grid item md={6} sm={12} xs={12} lg={6}>
                  <TextField
                    margin="dense"
                    label="Title"
                    variant="outlined"
                    name="Title"
                    value={Title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ alignItems: 'left', width: '80%' }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <GitHubIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item md={6} sm={12} xs={12} lg={6}>
                  <TextField
                    margin="dense"
                    label="Link"
                    variant="outlined"
                    name="Link"
                    value={Link}
                    onChange={(e) => setLink(e.target.value)}
                    style={{ alignItems: 'left', width: '80%' }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LinkedInIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item md={6} sm={12} xs={12} lg={6}>
                  <TextField
                    margin="dense"
                    label="image"
                    variant="outlined"
                    value={Image}
                    onChange={(e) => setImage(e.target.value)}
                    name="Image"
                    style={{ alignItems: 'left', width: '80%' }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <TwitterIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>

              {/* <Button
        variant="contained"
        color="secondary"
        onClick={this.createAndDownloadPDF}
        endIcon={<GetAppIcon />}
      >
        Generate PDF
      </Button> */}
            </div>

            <hr />
            <button  className="primary" type="submit">
            Continue
          </button>
            </form>
          </CardContent>
        </div>
      ))}
      <Button variant="primary" color="secondary" onClick={handleAddFields}>
        ADD
      </Button>
    </div>
  );
};

export default SocialMedia;
