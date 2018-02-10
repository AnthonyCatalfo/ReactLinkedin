import React from "react";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="header">
                <div className="col-md-8 row no-padding">
                    <div className="col-md-3 text-center">
                        <div>
                            <i className="fa fa-home"/>
                        </div>
                        <div>Home</div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div>
                            <i className="fa fa-briefcase"/>
                        </div>
                        <div>Jobs</div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div>
                            <i className="fa fa-comments"/>
                        </div>
                        <div>Messaging</div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div>
                            <i className="fa fa-bell"/>
                        </div>
                        <div>Notifications</div>
                    </div>
                </div>
            </div>
        );
    }
}


export default SearchBar;