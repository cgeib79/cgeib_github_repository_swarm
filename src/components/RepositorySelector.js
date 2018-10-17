import React from 'react';

const RepositorySelector = (props) => {

  function handleChange(event){
    props.onRepositorySelected(event.target.value)
  }

  if(!props.repositories) return null;

  const options = props.repositories.map((repository, index) => {
    return <option className="return" key={index} value={index}>
      {repository.full_name}
    </option>
  })

  return (
    <select className="centered" id="repository-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a repository...</option>
      {options}
    </select>

  )
}

export default RepositorySelector;
