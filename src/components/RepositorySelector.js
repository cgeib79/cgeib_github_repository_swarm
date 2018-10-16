import React from 'react';

const RepositorySelector = () => {
  function handleChange(event){
    props.onRepositorySelected(event.target.value)
  }

  if(!props.teams) return null;

  const options = props.teams.map((repository, index) => {
    return <option class="return" key={index} value={index}>
      {repository.name}
    </option>
  })
}

export default RepositorySelector;
