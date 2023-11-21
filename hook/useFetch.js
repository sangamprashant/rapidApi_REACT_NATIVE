import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = ({ endPoint, query }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endPoint}`,
    headers: {
      "X-RapidAPI-Key": "92bfd45fd9mshdfe0fe3918c473fp16dae3jsn3e19c485aa31",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
      console.log(response.data)
    } catch (error) {
      setError(error);
      console.log(error)
      alert("There is an error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []); 
  
  const refetch = () => {
    fetchData();
  };

  return {data,isLoading,error,refetch};
};

export default useFetch;