import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import document from './img/document.svg';
import deleteIcon from './img/delete.svg';
import edit from './img/edit.svg';
import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';
const Projecctfetch = ( props ) => {
  const deleteRequest = async() =>{
    const res = await axios.delete(`http://localhost:4000/api/project/${props.id}`).catch((err)=>console.log(err));
const data = await res.data;
return data;
  }
const handleDelete = () =>{
  deleteRequest()
  .then(()=>{
    window.location.reload();
})
}
const handleEdit = async() =>{
  const res = await axios
    .get(`http://localhost:4000/api/project/${props.id}`)
    
    const data = await res.data;
   
    props.Titelation(data.perosnal.Title)
    props.Tagsation(data.perosnal.Tags)
    props.Descriptation(data.perosnal.Description)
    props.Linkation(data.perosnal.Link)
    props.Imagation(data.perosnal.image)
    props.Datation(data.perosnal.Date)
    props.IDSAVE(data.perosnal._id)
    return data;
};



  return (
    
    <TodoItemSTyled>
      
      <div className="text-con">
        <div className="left-text">
          <h5>Title</h5>
          <p>{props.Title}</p>
        </div>
        <div className="left-text">
          <h5>Link</h5>
          <p>{props.Link}</p>
        </div>
        <div className="left-text">
          <h5>Tags</h5>
          <p>{props.Tags}</p>
        </div>
        <div className="left-text">
          <h5>Description</h5>
          <p>{props.Description}</p>
        </div>
        <div className="left-text">
          <h5>Date</h5>
          <p>{props.Date}</p>
        </div>
        <div className="left-text">
          <h5>Image</h5>
        <img className='picture' src={(`./projectImage/${props.image}`)} alt={props.image} />
        </div>
      </div>
      <div className="edit">
        <img onClick={handleEdit} src={edit} alt="" />
      </div>
      <div className="delete">
        <img onClick={handleDelete} src={deleteIcon} alt="" />
      </div>
    </TodoItemSTyled>
  );
};

const TodoItemSTyled = styled.div`
position: relative;
  background-color:	#034f84 ;
  padding-top:0.2rem;
  margin: 0rem 0;
  width: 100%;
  border-radius: 30px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content:space-between;
  color: white;
  &:last-child {
    margin-bottom: 1rem;
  }
 
  h5 {
    color: #6bbe92;
  }
  .icon-document,
  .edit,
  .delete {
    background-color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    img {
      cursor: pointer;
    }
  }
  .text-con {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media only screen and (max-width: 1200px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
    padding: 0 1rem;
    .right-text {
      flex: 2;
    }
    .left-text {
      padding-right: 0rem;
    }
    .left-text p {
    max-width: 80%;
  }

  .edit {
    position: absolute;
    top: -8%;
    right: 0;
  }
  .delete {
    position: absolute;
    top: -8%;
    left: 0;
  }
`;

export default Projecctfetch;
