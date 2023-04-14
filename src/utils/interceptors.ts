import { AxiosInstance } from "axios";

export function setInterceptors(axiosInstance: AxiosInstance) {
    // 요청 (request) interceptor
    axiosInstance.interceptors.request.use(
        // 요청을 보내기 전 수행할 작업
        (config) => {
            console.log(config);
            return config;
        },
        // 오류 요청 가공
        (err) => {
            return Promise.reject(err);
        }
    );

    // 응답 (response) interceptor
    axiosInstance.interceptors.response.use(
        // 200 대 response 를 받아 응답 데이터를 가공하는 작업
        (res) => {
            // console.log("WEFEW", cookies);
            return res;
        },
        // 200 대 이외의 오류 응답을 가공
        (err) => {
            return Promise.reject(err);
        }
    );

    return axiosInstance;
}
