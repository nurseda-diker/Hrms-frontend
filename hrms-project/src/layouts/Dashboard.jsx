import React from 'react'
import EmployerList from '../pages/EmployerList'
import JobPostingList from '../pages/JobPostingList'
import JobSeekerList from '../pages/JobSeekerList'
import { Grid} from 'semantic-ui-react'
import Cities from './Cities'

//ana sayfa
export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Cities></Cities>
                    </Grid.Column>
                    <Grid.Column width={13}>
                    <JobSeekerList/>
                    <EmployerList/>
                    <JobPostingList/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <JobPostingList/>
        </div>
    )
}
