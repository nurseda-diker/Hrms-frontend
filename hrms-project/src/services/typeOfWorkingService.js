import axios from 'axios'

export default class typeOfWorkingService{
    getTypesOfWorking(){
        return axios.get("http://localhost:8080/api/TypeOfWork/getAll");
    }
}


