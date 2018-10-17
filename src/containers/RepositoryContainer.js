import React from 'react';
import RepositorySelector from '../components/RepositorySelector';
import RepositoryDetail from '../components/RepositoryDetail';

class RepositoryContainer extends
React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories:[],
      currentRepository: null
    };
    this.handleRepositorySelected = this.handleRepositorySelected.bind(this);
  }

  componentDidMount(){
    const url = 'https://api.github.com/repositories'
    fetch(url)
    .then((res) => res.json())
    .then((repositories) => {
      this.setState({repositories: repositories});
    })
  }

  handleRepositorySelected(index){
    const repository = this.state.repositories[index];
    this.setState({currentRepository: repository});
  }

  render(){
    return(
      <div>
        <h1>RepositoryContainer</h1>
        <RepositorySelector repositories = {this.state.repositories}
          onRepositorySelected={this.handleRepositorySelected}/>
        <RepositoryDetail repository ={this.state.currentRepository}/>
      </div>
    );
  }
}

export default RepositoryContainer;
