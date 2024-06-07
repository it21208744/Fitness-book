import axios from 'axios'

const REST_API_BASE_URL = '/api/currentworkOuts'

export const listCurrentWorkOuts = () => axios.get(REST_API_BASE_URL)

export const createCurrentWorkOut = (currentWorkOut) =>
  axios.post(REST_API_BASE_URL, currentWorkOut)

export const getCurrentWorkOut = (currentWorkOutId) =>
  axios.get(REST_API_BASE_URL + '/' + currentWorkOutId)

export const updateCurrentWorkOut = (currentWorkOutId, currentWorkOut) =>
  axios.put(REST_API_BASE_URL + '/' + currentWorkOutId, currentWorkOut)

export const deleteCurrentWorkOut = (currentWorkOutId) =>
  axios.delete(REST_API_BASE_URL + '/' + currentWorkOutId)
