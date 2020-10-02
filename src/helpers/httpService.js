import axios from "axios";
import { getToken } from "./authService";
import { hideLoader } from "./loader";

const token = getToken();
const AUTHORIZATION = "authorization";
// export const baseUrl = 'https://api-9to5chick.herokuapp.com'
// export const baseUrl = 'http://127.0.0.1:8080'

// const http = axios.create({
//   baseURL: 'http://127.0.0.1:8080/api',
//   // baseURL: '/api',
//   headers: { Authorization: token },
// });

export let baseUrl = "https://api-9to5chick.herokuapp.com";

if (process.env.REACT_APP_NODE_ENV === "development") {
	baseUrl = "http://127.0.0.1:8080";
}

export const httpPost = async (url, postBody) => {
	try {
		const { data } = await axios.post(`${baseUrl}/api${url}`, postBody, {
			headers: { Authorization: localStorage.api_token },
		});
		return data;
	} catch (error) {
		hideLoader();
		return error;
	}
};

export const httpGet = async (url) => {
	try {
		const { data } = await axios.get(`${baseUrl}/api${url}`, {
			headers: { Authorization: localStorage.api_token },
		});
		return data;
	} catch (error) {
		hideLoader();
		return error;
	}
};

export const httpPatch = async (url, postBody) => {
	try {
		const { data } = await axios.patch(`${baseUrl}/api${url}`, postBody, {
			headers: { Authorization: localStorage.api_token },
		});
		return data;
	} catch (error) {
		hideLoader();
		return error;
	}
};

export const httpDelete = async (url, postBody) => {
	try {
		const { data } = await axios.delete(`${baseUrl}/api${url}`, {
			headers: { Authorization: localStorage.api_token },
		});
		return data;
	} catch (error) {
		hideLoader();
		return error;
	}
};

// export const authorize = (token) => {
//   if (token) {
//     http.defaults.headers.Authorization = `${token}`
//     localStorage.setItem(AUTHORIZATION, token)
//   }
// }

// export const unauthorize = () => {
//   delete http.defaults.headers.Authorization
//   localStorage.removeItem(AUTHORIZATION)
// }

// export const httpPost = (token) => {
//   return axios.post(api,commentid)
// }

// authorize(localStorage.getItem('api_token'))

// export default http;
