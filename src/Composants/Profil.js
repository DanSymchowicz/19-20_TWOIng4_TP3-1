import React from 'react';
import '../App.css';
import { brotliDecompress } from 'zlib';

class Profil extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor() {
        console.log("click");

        document.body.style.backgroundColor = this.props.profil.color;

    }
    render() {
        return(
            <div 
            style ={{
                margin: "auto"

                }} ClassName = "profil">
                <img style={{height: "200px", width: "300px",borderRadius: "50%", marginTop: "100px", marginLeft: "625px"}} src={this.props.profil.img} />
                <p style={{textAlign: "center"}}>Name : {this.props.profil.Name}</p>
                <p style={{textAlign: "center"}}> Surname : {this.props.profil.Surname}</p>
                <p style={{textAlign: "center"}}>Date of birth : {this.props.profil.DateOfBirth}</p>

                <button style={{float: "right"}} onClick={this.changeColor}>
                    Change de couleur
                </button>
            </div>
        );
    }
}

export default Profil;
