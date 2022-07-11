import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  // const [data, setData] = useState([]);
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  // console.log('url: ', url)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await axios.get(url);
        setData(res.data.data);
      } catch (error: any ) {
        setError(error);
      }

      setLoading(false);
    };
    fetchData()
  }, [url]);

  const reFetch = async () => {
    setLoading(true);

    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error: any) {
      setError(error);
    }

    setLoading(false);
  };

  return { data, loading, error, reFetch }
};

export default useFetch
