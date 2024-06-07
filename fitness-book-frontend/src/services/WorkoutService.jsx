import axios from 'axios'

const REST_API_BASE_URL = '/api/workout'

export const listWorkout = () => axios.get(REST_API_BASE_URL)
export const createWorkout = (workout) => axios.post(REST_API_BASE_URL, workout)
export const getWorkout = (workoutId) =>
  axios.get(REST_API_BASE_URL + '/' + workoutId)
export const updateWorkout = (workoutId, workout) =>
  axios.put(REST_API_BASE_URL + '/' + workoutId, workout)
export const deleteWorkout = (workoutId) =>
  axios.delete(REST_API_BASE_URL + '/' + workoutId)
