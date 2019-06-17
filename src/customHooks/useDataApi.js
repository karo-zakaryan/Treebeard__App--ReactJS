import { useEffect, useState } from "react";
import fakeData from "../constants/fakeData";

export const useDataApi = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        setTimeout(() => {
          setData(fakeData);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchData();
  }, []);

  return [{ data, isLoading, isError }];
};
