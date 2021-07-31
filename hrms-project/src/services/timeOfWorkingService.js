import axios from 'axios';

export default class timeOfWorkingService{
   getTimesOfWorking(){
       return axios.get("http://localhost:8080/api/WorkingTime/getAll");
   }
}










