import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class AddJobModal extends Component {
    render() {
        return(
            <Modal show={this.props.show} onHide={this.props.handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a job</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicCompanyName">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control name="companyName" type="text" placeholder="Company Name" onChange={this.props.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicJobTitle">
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control name="jobTitle" type="text" placeholder="Job Title" onChange={this.props.handleChange}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.props.onSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default AddJobModal;