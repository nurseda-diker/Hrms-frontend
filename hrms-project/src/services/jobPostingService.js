import axios from "axios"

export default class JobPostingService{
    getJobPostings(){
        return axios.get("http://localhost:8080/api/jobPosting/getall")
    }
    addJobPosting(jobPostings){
        return axios.post("http://localhost:8080/api/jobPostings/addJobPostingDto",jobPostings)
    
    }
}