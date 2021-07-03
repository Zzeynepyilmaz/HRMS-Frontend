import axios from "axios";

export default class JobAdvertisementService{
    getAdvertisements(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getAll")
    }

    addJobAdvertisement(jobAdvertisement){
        return axios.post("http://localhost:8080/api/jobadvertisements/add")
    }

    getJobAdvertisementByJobAdvertisementId(jobAdvertisementId) {
        return axios.get("http://localhost:8080/api/jobadvertisements/getByJobAdvertisementId?id="+jobAdvertisementId)
    }
}