import React, { useState,useEffect } from 'react'
import {Icon,Menu,Table } from 'semantic-ui-react'
import JobSeekerService from '../services/jobSeekerService';



export default function JobSeekerList() {

    const [jobSeekers, setJobSeeker] = useState([])
    useEffect(() => {
        let jobSeekerService = new JobSeekerService()
        jobSeekerService.getJobSeekers().then(result => setJobSeeker(result.data.data))

    }, [])

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Adı</Table.HeaderCell>
                        <Table.HeaderCell>Soyadı</Table.HeaderCell>
                        <Table.HeaderCell>TC Kimlik Numarası</Table.HeaderCell>
                        <Table.HeaderCell>Doğum Yılı</Table.HeaderCell>
                        <Table.HeaderCell>Email Adresi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobSeekers.map(jobSeeker=>(
                            <Table.Row key={jobSeeker.id}>
                            <Table.Cell>{jobSeeker.firstName}</Table.Cell>    
                            <Table.Cell>{jobSeeker.lastName}</Table.Cell>
                            <Table.Cell>{jobSeeker.nationalityId}</Table.Cell>
                            <Table.Cell>{jobSeeker.dateofBirth}</Table.Cell>
                            <Table.Cell>{jobSeeker.email}</Table.Cell>
                        </Table.Row>
                        ))
                    }
                   
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>

    )
}
