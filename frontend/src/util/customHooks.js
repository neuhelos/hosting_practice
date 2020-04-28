import  { useEffect, useState } from 'react';
import axios from 'axios';
export const useHttp = (url, initialValue) => {
    const [data, setData] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
          const fetchData = async (url) => {
            try {
              let res = await axios.get(url);
              debugger
              setData(res.data);
              setIsLoading(false);
            } catch (err) {
              setData(initialValue);
              setIsLoading(false);
              console.log(err);
            }
          };
        // setTimeout (() => {
            fetchData(url)
        // }, 2000)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return [data, isLoading];
}