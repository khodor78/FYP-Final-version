import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import document from './img/document.svg';
import deleteIcon from './img/delete.svg';
import edit from './img/edit.svg';
import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';
const Skillfetch = ( props ) => {
  const deleteRequest = async() =>{
    const res = await axios.delete(`http://localhost:4000/api/skill/${props.id}`).catch((err)=>console.log(err));
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
   props.filteration(props.id);
};


props.filteration(props.id);
  return (
    
    <TodoItemSTyled>
      
      <div className="text-con">
        <div className="left-text">
          <h5>Biography</h5>
          <p>{props.biography}</p>
        </div>
        <div className="left-text">
          <h5>Seeking</h5>
          <p>{props.seeking}</p>
        </div>
        <div className="left-text">
          <h5>Hubbu</h5>
          <p>{props.hubby}</p>
        </div>
        <div className="left-text">
          <h5>Love</h5>
          <p>{props.love}</p>
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
    grid-template-columns: repeat(2, 1fr);
    padding: 0 1rem;
    .right-text {
      flex: 2;
    }
    .left-text {
      padding-right: 0rem;
    }
  }
  .edit {
    margin-right: 1rem;
  }
`;

export default Skillfetch;
