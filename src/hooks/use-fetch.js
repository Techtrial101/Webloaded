import { useEffect, useState } from 'react';

const useFetch = (URL) => {
  const [creator, setCreator] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(URL)
        .then((Response) => {
          if (!Response.ok) {
            throw Error('server is busy. Please try again');
          }
          return Response.json();
        })
        .then((creator) => {
          setCreator(creator);
          setLoading(false);
        })
        .catch((err) => {
          // console.log(err.messsage);
          setError(err.message);
          setLoading(false);
        });
    }, 1000);
  }, [URL]);

  return { creator, error, loading };
};

export default useFetch;
