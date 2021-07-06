import React, { useState,useEffect } from 'react'
import {Icon,Menu,Table } from 'semantic-ui-react'
import JobPostingService from '../services/jobPostingService';

export default function JobPostingList() {

    const [jobPostings, setJobPostings] = useState([]);

    useEffect(()=>{
        let jobPostingService=new JobPostingService()
        jobPostingService.getJobPostings().then(result=>setJobPostings(result.data.data))
    })

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>Şehir</Table.HeaderCell>
                        <Table.HeaderCell>Minimum Maaş</Table.HeaderCell>
                        <Table.HeaderCell>Maximum Maaş</Table.HeaderCell>
                        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>



                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobPostings.map(jobPosting => (
                            <Table.Row key={jobPosting.id}>
                                <Table.Cell>{jobPosting.positionName}</Table.Cell>
                                <Table.Cell>{jobPosting.companyName}</Table.Cell>
                                <Table.Cell>{jobPosting.cityName}</Table.Cell>
                                <Table.Cell>{jobPosting.minSalary}</Table.Cell>
                                <Table.Cell>{jobPosting.maxSalary}</Table.Cell>
                                <Table.Cell>{jobPosting.applicationDeadline}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>
                
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='6'>
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
