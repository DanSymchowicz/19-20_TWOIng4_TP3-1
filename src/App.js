import React from 'react';
import Profil from './Composants/Profil';
import Comment from './Composants/Comment';
import './App.css';

import JCVD from './img/JCVD.jpg';

class App extends React.Component {
  state = {

       profils : [
      {
          Surname: 'Vendame',
          Name: 'JC',
          DateOfBirth: '14/06/1945',
          Comment: 'la bagarre',
          img: JCVD
      },
      {
        Surname: 'Pernaud',
        Name: 'Jean Pierre',
        DateOfBirth: '22/12/1912',
        Comment: 'Le journal trop genial ',
        img: 'JPP.jpg'
      },
      {
        Surname: 'Macron',
        Name: 'Emmanuel',
        DateOfBirth: '22/02/1992',
        Comment: 'Notre projet',
        img: 'Macron.jpg'
      }
  ]
};


  handleClick(i){
    this.setState({});
}



  
  render(){
    return(
      <div>
      <body>
        <header>
          <h1> Facebook Lite</h1>
        </header>

        <Profil
        profil={this.state.profils[0]}/>
        <Comment
        profil={this.state.profils[0]}/>
      </body>
    </div>
    );
}
}
export default App;