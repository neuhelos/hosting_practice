import React, { useEffect, useState } from "react";
import axios from 'axios';
import Car from "./Car";

import {getAPI} from '../../util/util'

export default function CarIndex({ personId }) {
    const [isLoading, setIsLoading] = useState(false);
    const [cars, setCars] = useState([]);

    const API = getAPI()

      useEffect(() => {
        const fetchData = async (url) => {
          setIsLoading(true);
          try {
            let res = await axios.get(url);
            setCars(res.data.cars);
            setIsLoading(false);
          } catch (err) {
            setCars([]);
            setIsLoading(false);
            console.log(err);
          }
        };
        const url = Number(personId) === 0 ? `${API}/cars` : `${API}/users/${personId}/cars`
          fetchData(url);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [personId]);
    if (isLoading) return <div>Loading...</div>;

     const showCars = cars.map((car, i) => {
      return (
        <Car key={i} brand={car.brand} model={car.model} year={car.year} />
      );
    });
    return(
        <ul className="carList">
            {showCars}
        </ul>
    )
};
