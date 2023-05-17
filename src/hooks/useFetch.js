import { useEffect, useState } from "react";

function useFetch(url, option) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMount = true;
    const callApi = async () => {
      setLoading(true);
      await fetch(process.env.REACT_APP_API_BASE_URL + url, option)
        .then((result) => {
          if (result.ok) return result.json();
          throw new Error("Not found!");
        })
        .then((response) => {
          if (isMount) setData(response.data);
        })
        .catch((err) => setError(err))
        .finally(setLoading(false));
    };

    callApi();

    return () => {
      isMount = false;
    };
  }, [url, option]);

  return { data, loading, error };
}

export default useFetch;
