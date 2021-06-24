import axios from "axios";

export default class CvService{
    getCvByCandidateId(id){
return axios.get("http://localhost:8080/api/candidates/getCandidateCvById?id="+id)
    }
}