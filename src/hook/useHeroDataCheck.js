import { useEffect, useState } from 'react';

function useHeroDataCheck(host_name, callback) {
  const [HeroData, setHeroData] = useState([]);

  useEffect(() => {
    async function API() {
      fetch(`${host_name}`).then(async (res) => {
        const heroesData = await res.json();
        setHeroData(heroesData);
        if (callback) callback(heroesData);
      });
    }
    API();
  }, [host_name]);

  return HeroData;
}

export default useHeroDataCheck;
