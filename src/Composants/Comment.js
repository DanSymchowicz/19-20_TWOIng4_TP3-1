import React from 'react';

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div ClassName= 'comment'>
                <p>Comment : {this.props.profil.Comment}</p>
                <button onClick={this.props.handleClick}>
                    Super
                </button>
            </div>
        );
    }
}

export default Comment;