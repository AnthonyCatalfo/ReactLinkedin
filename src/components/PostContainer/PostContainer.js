import React from "react";
import dummyData from "../../dummy-data";
import CommentSection from "../CommentSection/CommentSection";

class PostContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            feed: dummyData
        };
    }

    render() {
        const {
      feed
    } = this.state;

        return (
            <div className="row">
                {feed.map(item => (
                    <div className="post-container col-md-8">
                        <div className="post-header row">
                            <div className="col-md-1">
                                <img width={55} height={55} src={item.thumbnailUrl} />
                            </div>
                            <div className="col-md-9">
                                <strong className="post-user">
                                    {item.user}
                                </strong>
                                <div className="user-bio">{item.shortBio}</div>
                            </div>
                        </div>
                        <div className="dummy-post">
                            {item.postType === "IMAGE" && (
                                <img width={600} height={400} src={item.post} />
                            )}
                            {item.postType === "TEXT" && (
                                <p>{item.post}</p>
                            )}
                        </div>
                        <div className="row post-activity">
                            {item.likes} Likes
                            <i className="fa fa-circle small-dot"></i>
                            {item.comments.length} Comments
                        </div>
                        <div className="row post-activity">
                            <button className="btn btn-sm btn-outline-primary">
                                <em className="fa fa-thumbs-up"></em> Like
                            </button>&nbsp;
                            <button className="btn btn-sm btn-outline-primary">
                                <em className="fa fa-comment"></em> Comment
                            </button>
                        </div>
                        <CommentSection comments={item.comments} />
                    </div>
                ))}
            </div>
        );
    }
}

export default PostContainer;
