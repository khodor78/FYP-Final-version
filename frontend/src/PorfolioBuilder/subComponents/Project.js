import { CardContent, Divider, Grid, InputAdornment, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import DateRangeIcon from '@material-ui/icons/DateRange';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import LinkIcon from '@material-ui/icons/Link';
import TitleIcon from '@material-ui/icons/Title';
import DescriptionIcon from '@material-ui/icons/Description';
import { v4 as uuidv4 } from 'uuid';
import { Button } from 'react-bootstrap';

const Project = (props) => {

   const [inputFields, setInputFields] = useState([
        { id: uuidv4(), Title: '', Link: '', Name: '',Tags: '',Date:''},
      ]);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);
      };
      const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
          if(id === i.id) {
            i[event.target.name] = event.target.value
          }
          return i;
        })
        
        setInputFields(newInputFields);
      }
    
      const handleAddFields = () => {
        setInputFields([...inputFields, { id: uuidv4(),  Title: '', Link: '', Name: '',Tags: '',Date:'' }])
      }




  return (
    <div>
       
        {inputFields.map(inputField => (
    
    <div key={inputField.id}>
<CardContent>
          <div className={props}>
            <Grid container spacing={2} alignItems="center" lg={12}>
             
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="Title"
                  label="Title"
                  style={{width: '80%'}}
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
              <Grid item md={4} sm={6} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="Link"
                  label="Link"
                  style={{width: '80%'}}
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

              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="Name"
                  label="Description"
                  style={{width: '80%'}}
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
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="Tags"
                  label="Tags"
                  style={{width: '80%'}}
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
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="Date"
                  label="In year"
                  type="date"
                  style={{ width: '80%' }}
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
            </Grid>
            <br />
            <Divider />
            <br />
          
          </div>
          <hr />
        </CardContent>
       
        </div>
))}
<Button
              variant="primary"
              color="secondary"
 onClick={handleAddFields}
 
>
 ADD  
</Button>
    </div>

)
}

export default Project