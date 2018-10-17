import React from 'react';

const RepositorySelector = (props) => {

  function handleChange(event){
    props.onRepositorySelected(event.target.value)
  }

  if(!props.teams) return null;

  const options = props.teams.map((repository, index) => {
    return <option class="return" key={index} value={index}>
      {repository.full_name}
    </option>
  })

  return (
    <select class="centered" id="repository-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a repository...</option>
      {options}
    </select>

  )
}

export default RepositorySelector;
