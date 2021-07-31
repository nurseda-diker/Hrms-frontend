import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import JobPostingService from '../services/jobPostingService';

export default function JobPostingDetail() {

    let {id} =useParams();

    const [jobPosting, setJobPosting]=useState({});

    useEffect(() => {
        let jobPostingService=new JobPostingService()
        
        
        return () => {
            cleanup
        }
    }, [input])

    return (
        <div>
            
        </div>
    )
}
