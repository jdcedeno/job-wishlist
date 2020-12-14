import React, {Component} from "react";
import JobCard from "./components/JobCard";
import AddJobButton from "./components/AddJobButton";
import AddJobModal from "./components/AddJobModal";
import WorkIcon from "@material-ui/icons/Work";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      companyName: '',
      jobTitle: '',
      jobs: []
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleOpenModal() {
    this.setState({
      show: true
    });
  }

  handleCloseModal() {
    this.setState({
      show: false
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit() {
    this.setState((state) => {
      let newJob = {
        companyName: state.companyName,
        jobTitle: state.jobTitle,
        createdAt: Date.now()
      };
      let newJobs = [...state.jobs, newJob];
      return ({
        show: false,
        companyName: '',
        jobTitle: '',
        jobs: newJobs
      });
    });
    console.log(this.state);
  }

  render() {
    let numberOfJobs = this.state.jobs.length;
    let { jobs } = this.state;

    return(
    <div className="App">
      <header id="top-header">
        <WorkIcon />
        <h1>{"Job Wishlist"}</h1>
      </header>
      <section>
        <h4>{numberOfJobs} jobs in wishlist</h4>
        
        <AddJobButton handleOpenModal={this.handleOpenModal}/>

        <AddJobModal 
          show={this.state.show} 
          handleCloseModal={this.handleCloseModal} 
          handleChange={this.handleChange}
          onSubmit={this.onSubmit}
        />

        {jobs.map((job) => {
          return <JobCard companyName={job.companyName} jobTitle={job.jobTitle}/>
        })}
        
      </section>
    </div>);
  }
}

export default App;
