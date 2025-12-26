import React, { useEffect, useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import "./SearchResult.css";

interface Pet {
  id: number;
  name: string;
  species: string;
  breed: string;
  age?: number;
  gender?: string;
  size?: string;
  description?: string;
  image_url?: string;
}

const API_URL = "http://localhost:5000/api";

const SearchResult: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate(); // ✅ مهم
  const query = searchParams.get("q") || "";

  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) {
      setLoading(false);
      return;
    }

    const fetchPets = async () => {
      try {
        const res = await fetch(
          `${API_URL}/search?q=${encodeURIComponent(query)}`
        );
        if (!res.ok) throw new Error("Fetch failed");

        const data = await res.json();
        setPets(Array.isArray(data) ? data : []);
      } catch (err) {
        setError("Error fetching pets");
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, [query]);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  if (error) {
    return (
      <div className="search-results">
        <h2>{error}</h2>
        <Link to="/" className="back-btn">← Back</Link>
      </div>
    );
  }

  return (
    <div className="search-results">
      <div className="search-header">
        <Link to="/" className="back-btn">← Back</Link>
        <h1>Search Results</h1>
        <p>
          Showing results for: <strong>{query}</strong>
        </p>
        <p>{pets.length} pets found</p>
      </div>

      {pets.length === 0 ? (
        <p style={{ textAlign: "center" }}>No pets found</p>
      ) : (
        <div className="pets-grid">
          {pets.map((pet) => (
            <div className="pet-card" key={pet.id}>
              
              {/* IMAGE */}
              <div className="pet-image-container">
                <img
                  src={
                    pet.image_url ||
                    "https://via.placeholder.com/400x300?text=No+Image"
                  }
                  alt={pet.name}
                />
                <span className="pet-badge">{pet.species}</span>
              </div>

              {/* INFO */}
              <div className="pet-info">
                <h3>{pet.name}</h3>
                <p className="pet-breed">{pet.breed || "Mixed"}</p>

                <div className="pet-details">
                  {pet.age && <div className="detail-item">🎂 {pet.age} yrs</div>}
                  {pet.gender && <div className="detail-item">⚥ {pet.gender}</div>}
                  {pet.size && <div className="detail-item">📏 {pet.size}</div>}
                </div>

                <p className="pet-description">
                  {pet.description ||
                    "A lovely pet looking for a forever home!"}
                </p>

                {/* ✅ الزر المصلوح */}
                <button
                  className="adopt-btn"
                  onClick={() => navigate("/adopt")}
                >
                  Adopt
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
