import axios from "axios";

const urlPrefix = "http://localhost:3000";

export const getUsers = () => axios.get(`${urlPrefix}/usuarios`)
    .then(function (response) {
       return response.data
    
    
    })
    .catch(function (error) {
   
    console.error(error);
    })

export const getUser = (id) => axios.get(`${urlPrefix}/usuarios/${id}`)
    .then(function (response) {
    
    console.log(response);
    })
    .catch(function (error) {
    
    console.error(error);
    })

export const addUser = () => axios.post(`${urlPrefix}/usuarios/`)
    .then(function (response) {
    
    console.log(response);
    })
    .catch(function (error) {
    
    console.error(error);
    })

export const editUser = (id) => axios.put(`${urlPrefix}/usuarios/${id}`)
    .then(function (response) {
    
    console.log(response);
    })
    .catch(function (error) {
    
    console.error(error);
    })

export const deleteUser = (id) => axios.delete(`${urlPrefix}/usuarios/${id}`)
    .then(function (response) {
    
    console.log(response);
    })
    .catch(function (error) {
    
    console.error(error);
    })

export const getLocais = () => axios.get(`${urlPrefix}/locais`)
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
    
    console.error(error);
    })

export const addLoccais = (values) => axios.post(`${urlPrefix}/locais`, values)
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {    
    console.error(error);
    })

export const deleteLocal = (id) => axios.delete(`${urlPrefix}/locais/${id}`)
    .then(function (response) {
        return response.data;
    
    })
    .catch(function (error) {
    
    console.error(error.message);
    })
    
export const atualizarLocal = async (id, data) =>  await axios
    .put(`${urlPrefix}/locais/${id}`, data)
    .then(function (response) {
    return response.data;
})
.catch(function (error) {
    console.error(error.message);
})

