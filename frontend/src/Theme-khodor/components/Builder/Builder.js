import React from 'react';

function Builder(props) {
  const {
    _id,
    firstname,
    LastName,
    description,
    GitHub,
    Twitter,
    Facebook,
    Instagram,
    Youtube,
    Email,
    image,
  } = props.PersonalInfo;
  return <div>Builder
  <h2>{firstname}</h2>
  </div>
}

export default Builder;
