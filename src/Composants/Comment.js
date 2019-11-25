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
                <p>Name : {this.props.profil.Comment}</p>
            </div>
        );
    }
}

export default Comment;