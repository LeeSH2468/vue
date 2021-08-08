import axios from 'axios';


// 1. HTTP리스폰, 리퀘스트 관련 기본주소 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2.API 함수들 정리
function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`)
}
function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`)
}
function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`)
}

export{
    fetchNewsList,
    fetchJobsList,
    fetchAskList
}

