import React, {Component} from "react";

class JobCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>{`This is JobCard number ${this.props.number}`}</h2>
                <p>{"this is a JobCard Component"}</p>
            </div>
        )
    }
}

export default JobCard;