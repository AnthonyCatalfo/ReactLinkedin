import React from "react";

class CommentSection extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {
      comments
    } = this.props;

        return (
            <div>
                {comments.map(comment => (
                    <div className="comment">
                        <div className="row">
                            <img width="40" height="40" src={comment.thumbnailUrl} />
                            <strong className="comment-user">{comment.user}</strong>
                        </div>
                        <div className="comment-content">{comment.text}</div>
                    </div>
                ))}
            </div>
        );
    }
}


export default CommentSection;