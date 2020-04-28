//Utility file compendium of all axios calls for use throughout app

import axios from 'axios'
import {getAPI} from './util'

const API = getAPI()

export const fetchAllCars = () => axios.get(`${API}/cars`)
export const fetchAllUsers = () => axios.get(`${API}/users`)

//import calls where necessary
//Axios returns promise. Whereever the function is imported and used, insert into async/await function. 