import { useState, useEffect, useCallback } from 'react';

export function useMunicipalities() {
  const [municipalities, setMunicipalities] = useState([]);
  const [visited, setVisited] = useState(() => {
    const saved = localStorage.getItem('visitados');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    fetch('./Concellos_IGN.geojson')
      .then((res) => res.json())
      .then((data) => setMunicipalities(data.features));
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

  return { municipalities, visited, toggleMunicipality, removeMunicipality };
} 