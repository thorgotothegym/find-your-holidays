import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://test.api.amadeus.com/v1/',
}, );

type AuthResponse = { 
  auth: string,
  username: string,
  application_name: string,
  client_id: string,
  token_type: string,
  access_token: string,
  expires_in: number,
  state: string,
  scope: string,
}

// Add a request interceptor
axios.interceptors.request.use(async function (config) {
  console.log('hello')
  const { VITE_CLIENT_ID, VITE_CLIENT_SECRET } = import.meta.env;
  try {
    const params = new URLSearchParams();
    params.append('client_id', VITE_CLIENT_ID);
    params.append('client_secret', VITE_CLIENT_SECRET);
    params.append('grant_type', 'client_credentials');
  
    const response = await api.post<AuthResponse>(`security/oauth2/token`, params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    console.log('response', response.data);
    document.cookie = `token_type=${response.data.token_type}`;
    console.log('cookie', document.cookie);
    config.headers.Authorization = `${response.data.token_type} ${response.data.access_token}`;
  } catch (error) { 
    console.log('error', error)
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});