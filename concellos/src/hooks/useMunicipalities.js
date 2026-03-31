import { useState, useEffect, useCallback } from 'react';

export function useMunicipalities() {
  const [municipalities, setMunicipalities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [visited, setVisited] = useState(() => {
    try {
      const saved = localStorage.getItem('visitados');
      return saved ? JSON.parse(saved) : [];
    } catch (parseError) {
      return [];
    }
  });

  useEffect(() => {
    let isMounted = true;
    const geojsonUrl = `${process.env.PUBLIC_URL || ''}/Concellos_IGN.geojson`;

    fetch(geojsonUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load municipalities: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (!isMounted) return;
        setMunicipalities(data.features || []);
      })
      .catch(() => {
        if (!isMounted) return;
        setError('Non foi posible cargar o mapa de concellos.');
      })
      .finally(() => {
        if (!isMounted) return;
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const toggleMunicipality = useCallback((name) => {
    setVisited(prevVisited => {
      const newVisited = prevVisited.includes(name)
        ? prevVisited.filter((n) => n !== name)
        : [...prevVisited, name];
      
      localStorage.setItem('visitados', JSON.stringify(newVisited));
      return newVisited;
    });
  }, []);

  const removeMunicipality = useCallback((name) => {
    setVisited(prevVisited => {
      const newVisited = prevVisited.filter((n) => n !== name);
      localStorage.setItem('visitados', JSON.stringify(newVisited));
      return newVisited;
    });
  }, []);

  return {
    municipalities,
    visited,
    toggleMunicipality,
    removeMunicipality,
    isLoading,
    error
  };
} 
