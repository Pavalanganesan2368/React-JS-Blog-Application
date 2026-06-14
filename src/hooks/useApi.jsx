import { useState, useEffect } from "react";
import axios from "axios";

const useApi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  
  const api = axios.create({
    baseURL : "http://localhost:3500/posts",
  });

  return { api };
}

export default useApi;