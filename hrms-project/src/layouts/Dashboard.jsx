import React from 'react'
import EmployerList from '../pages/EmployerList'
import JobPostingList from '../pages/JobPostingList'
import JobSeekerList from '../pages/JobSeekerList'
import { Grid} from 'semantic-ui-react'
import { ToastContainer } from "react-toastify";
import JobPostingAdd from '../pages/JobPostingAdd'
import { Route } from 'react-router-dom';


//ana sayfa
export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right" />
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        
                        <Route exact path="/" component={JobPostingList} />
                        <Route exact path="/jobPostings" component={JobPostingList} />
                        <Route path="/jobSeekers" component={JobSeekerList} />
                        <Route path="/employers" component={EmployerList} />
                        <Route path="/jobPostings/add" component={JobPostingAdd} /> 
                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}
