import React, {Component} from "react";

class JobCard extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.companyName}</h2>
                <h3>{this.props.jobTitle}</h3>
            </div>
        )
    }
}

export default JobCard;