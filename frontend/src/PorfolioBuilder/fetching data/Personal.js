import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import document from './img/document.svg';
import deleteIcon from './img/delete.svg';
import edit from './img/edit.svg';
import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';
const Personal = (
  
   props


) => {

  const [disable, setdisable] = React.useState(false);

  const navigate = useNavigate();
  const deleteTodo = async () => {};


  const deleteRequest = async () => {
const res = await axios.delete(`http://localhost:4000/api/personal/${props.id}`).catch((err)=>console.log(err));
const data = await res.data;
return data;
  };
const handleDelete = () =>{
  deleteRequest()
  .then(()=>{
    
    window.location.reload();
    console.log(`${props.id}`)

  }
  )
}

  
  const idx = useParams().id;
  const handleEdit = ()=> {
   
    if(!idx){
props.Send(props.id)
    }
    props.filteration(props.id);
    }
const [filter,setFilter] =useState("");
const filterhandler=(e) =>{
setFilter(props.id);



}
props.filteration(props.id);
  return (
    
    <TodoItemSTyled>
      
      <div className="text-con">
        <div className="left-text">
          <h5>First-Name</h5>
          <p>{props.firstname}</p>
        </div>
        <div className="left-text">
          <h5>last Name</h5>
          <p>{props.lastname}</p>
        </div>
        <div className="left-text">
          <h5>biography</h5>
          <p>{props.biography}</p>
        </div>
        <div className="left-text">
          <h5>Email</h5>
          <p>{props.email}</p>
        </div>
        <div className="left-text">
          <h5>Characteristics</h5>
          <p>{props.characteristics}</p>
        </div>
        <div className="left-text">
          <h5>Image</h5>
        <img className='picture' src={(`./uploads/${props.image}`)} alt={props.image} />
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
    grid-template-columns: repeat(3, 1fr);
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

export default Personal;
