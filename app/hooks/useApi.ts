import { ApiResponse } from "apisauce";
import { useState } from "react";

export interface IResponse<T> {
    data: T;
    isError: boolean;
    isLoading: boolean;
    request: () => Promise<void>;
}

const useApi = (apiFunc: () => Promise<ApiResponse<any, any>>) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const request = async (...args) => {
    setIsLoading(true);
    const response = await apiFunc(...args);
    setIsLoading(false);

    setIsError(!response.ok);
    setData(response.data);
    return response;
  };

  return { data, isError, isLoading, request };
}

export default useApi;