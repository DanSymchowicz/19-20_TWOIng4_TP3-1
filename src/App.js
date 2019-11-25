import React from 'react';
import './App.css';

class App extends React.Component {
  render(){
    return(
    <div>
      hello {this.props.name}
    </div>
  );
}
}
export default App;