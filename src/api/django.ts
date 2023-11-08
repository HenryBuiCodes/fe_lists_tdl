import axios from "axios";

const DjangoApi = {
    get: () => {
        let response
        axios({
            method: 'get',
            url: 'https://bit.ly/2mTM3nY'
        })        
        .then((res) => {
            response = res
        })
        .catch((error) => {
            console.log(error);
        })

        return response
    },
    create: () => {
        let response
        axios({
            method: 'post',
            url: 'https://bit.ly/2mTM3nY'
        })        
        .then((res) => {
            response = res
        })
        .catch((error) => {
            console.log(error);
        })

        return response
    },
    update: () => {
        let response
        axios({
            method: 'get',
            url: 'https://bit.ly/2mTM3nY'
        })        
        .then((res) => {
            response = res
        })
        .catch((error) => {
            console.log(error);
        })

        return response
    },
    delete: () => {
        let response
        axios({
            method: 'delete',
            url: 'https://bit.ly/2mTM3nY'
        })        
        .then((res) => {
            response = res
        })
        .catch((error) => {
            console.log(error);
        })

        return response
    }
}

export default DjangoApi