import React from 'react';
import Profil from './Composants/Profil';
import Comment from './Composants/Comment';
import Bouttons from './Composants/Bouttons';

import './App.css';
import JCVD from './img/JCVD.jpg';
import JPP from './img/JPP.jpg';
import Macron from './img/Macron.jpg';

class App extends React.Component {
  state = {

     
       profils : [
      {
          Surname: 'Vendame',
          Name: 'JC',
          DateOfBirth: '14/06/1945',
          Comment: 'la bagarre',
          img: JCVD,
          color: 'red'
      },
      {
        Surname: 'Pernaud',
        Name: 'Jean Pierre',
        DateOfBirth: '22/12/1912',
        Comment: 'Le journal trop genial ',
        img: JPP,
        color: 'green'
      },
      {
        Surname: 'Macron',
        Name: 'Emmanuel',
        DateOfBirth: '22/02/1992',
        Comment: 'Notre projet',
        img: Macron,
        color: 'purple'
      }
  ],
  status: 0
};


  handleClick(i){
    this.setState({status:i});
  }



  
  render(){
    const profils = this.state.profils
    return(
      <div>
      <body>
        <header>
          <h1> Facebook Lite</h1>
          {profils.map((data, index) => {
            return <Bouttons key={index} profil={data} handleClick={() => this.handleClick(index)}/>
          })}
        </header>

        <Profil
        profil={this.state.profils[this.state.status]}/>
        
        <Comment
        profil={this.state.profils[this.state.status]}/>
      </body>
    </div>
    );
}
}
export default App;