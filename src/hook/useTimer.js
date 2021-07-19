import { useEffect, useState } from 'react';

function useTimer() {
  const [loaderShow, setLoaderShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return loaderShow;
}

export default useTimer;
