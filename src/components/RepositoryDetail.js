import React from 'react';

const RepositoryDetail = (props) => {
  if(!props.repository) return null;
  return (
    <h3>
      {props.repository.full_name}
    </h3>
  )
}

export default RepositoryDetail;
