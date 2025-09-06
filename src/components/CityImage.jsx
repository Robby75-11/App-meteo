import { useEffect, useState } from "react";
import axios from "axios";

const CityImage = ({ city }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const UNSPLASH_API_KEY = "deqypidfxRCm_Ge5boL6N7NxeBa - f2z8_MYaTYeSFq0";
  useEffect(() => {
    const fetchCityImage = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${city}&client_id=${UNSPLASH_API_KEY}`
        );
        if (response.data.results.length > 0) {
          setImageUrl(response.data.results[0].urls.regular); // Usa l'immagine dalla risposta
        } else {
          setImageUrl(null); // Se non trovi un'immagine, setta l'URL a null
        }
      } catch (err) {
        setError("Errore nel recupero dell'immagine");
      } finally {
        setLoading(false);
      }
    };

    fetchCityImage();
  }, [city]); // Ricarica ogni volta che la città cambia

  if (loading) {
    return <p>Caricamento immagine...</p>;
  }

  if (error) {
    return <p className="text-danger">Errore: {error}</p>;
  }

  return (
    <div>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`Immagine di ${city}`}
          style={{ width: "100%", height: "auto" }}
        />
      ) : (
        <p>Immagine non disponibile per {city}</p>
      )}
    </div>
  );
};

export default CityImage;
