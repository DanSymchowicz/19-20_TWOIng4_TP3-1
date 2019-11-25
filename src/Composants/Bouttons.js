import React from 'react';
import '../App.css';

class Bouttons extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <button style ={{float: "right"}} ClassName='bout' onClick={this.props.handleClick}>
                    {this.props.profil.Name}
                </button>
            </div>
        );
    }
}
export default Bouttons;