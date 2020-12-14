import React, {Component} from "react";
import { Button } from "reactstrap";

import AddIcon from "@material-ui/icons/Add";

class AddJobButton extends Component {
    render() {
        return (
            <div>
                <Button onClick={this.props.handleOpenModal} variant="dark" size="lg" block>
                    <AddIcon />
                </Button>
            </div>
        )
    }
}

export default AddJobButton;