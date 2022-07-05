import axios from "axios";
// อ่าน token จาก localStorage

/* let token = ''

if(localStorage.getItem('user')){
  let userStorage = localStorage.getItem('user')
  let userStorageJSON = JSON.parse(userStorage)
  token = userStorageJSON['token']
}else{
  token = ''
}
 */

const backendService = axios.create({
  baseURL: "http://206.189.92.79/api/",
  withCredentials: true,
  headers: {
    "Content-type": "multipart/form-data",
    "Accept": "application/json",
   // "Authorization": `Bearer ${token}`
  },
});


// การใช้ interceptors เพื่อแทรก token --> header
backendService.interceptors.request.use(config =>{
  let token =''
  try{
    let userStorage = localStorage.getItem('user')
    let userStorageJSON = JSON.parse(userStorage)
    token = userStorageJSON['token']

  }catch(error){
    console.log(error);
  }
  //เช็คส่า token ว่าไม่ null
  if(token){
    config.headers.Authorization = "Bearer "+token

  }
  return config

})
export default backendService;