import React from 'react';

class Profil extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return(
            <div ClassName = "profil">
                <img src={this.props.profil.img} />
                <p>Name : {this.props.profil.Name}</p>
                <p>Surname : {this.props.profil.Surname}</p>
            </div>
        );
    }
}

export default Profil;
