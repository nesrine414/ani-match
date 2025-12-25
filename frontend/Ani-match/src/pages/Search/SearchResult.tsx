import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import "./SearchResult.css";

interface Pet {
  id: number;
  name: string;
  species: string;
  breed: string;
  age: number;
  gender: string;
  size: string;
  color: string;
  description: string;
  image_url: string;
  adoption_status: string;
}

const API_URL = 'http://localhost:5000/api';

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query) {
      searchPets();
    }
  }, [query]);

  const searchPets = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_URL}/search?q=${encodeURIComponent(query)}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch pets. Make sure backend is running on port 5000!');
      }
      
      const data = await response.json();
      setPets(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error searching pets:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="search-results">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading search results...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="search-results">
        <div className="error-message">
          <h2>⚠️ Error</h2>
          <p>{error}</p>
          <p>Make sure your Flask backend is running on port 5000!</p>
          <Link to="/" className="back-btn">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="search-results">
      <div className="search-header">
        <Link to="/" className="back-btn">← Back to Home</Link>
        <h1>Search Results</h1>
        <p className="search-query">Showing results for: <strong>"{query}"</strong></p>
        <p className="results-count">
          {pets.length} {pets.length === 1 ? 'pet' : 'pets'} found
        </p>
      </div>

      {pets.length === 0 ? (
        <div className="no-results">
          <div className="no-results-icon">🔍</div>
          <h2>No pets found</h2>
          <p>We couldn't find any pets matching "{query}"</p>
          <p>Try searching with different keywords like:</p>
          <div className="suggestions">
            <span>cat</span>
            <span>dog</span>
            <span>puppy</span>
            <span>kitten</span>
          </div>
          <Link to="/" className="home-btn">Browse All Pets</Link>
        </div>
      ) : (
        <div className="pets-grid">
          {pets.map((pet) => (
            <div key={pet.id} className="pet-card">
              <div className="pet-image-container">
                <img 
                  src={pet.image_url || 'https://via.placeholder.com/300x250?text=No+Image'} 
                  alt={pet.name}
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/300x250?text=No+Image';
                  }}
                />
                <div className="pet-badge">{pet.species}</div>
              </div>
              <div className="pet-info">
                <h3>{pet.name}</h3>
                <p className="pet-breed">{pet.breed || 'Mixed Breed'}</p>
                
                <div className="pet-details">
                  <span className="detail-item">
                    <span className="detail-icon">🎂</span>
                    {pet.age || 'Unknown'} {pet.age === 1 ? 'year' : 'years'}
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">⚧</span>
                    {pet.gender || 'Unknown'}
                  </span>
                  <span className="detail-item">
                    <span className="detail-icon">📏</span>
                    {pet.size || 'Medium'}
                  </span>
                </div>

                <p className="pet-description">
                  {pet.description || 'A lovely pet looking for a forever home!'}
                </p>

                <button className="adopt-btn" onClick={() => handleAdopt(pet.id, pet.name)}>
                  🏠 Adopt {pet.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  function handleAdopt(petId: number, petName: string) {
    // Simple adoption handler - you can make this more sophisticated
    const confirmed = window.confirm(
      `Would you like to start the adoption process for ${petName}?\n\n` +
      `You'll need to provide:\n` +
      `- Your name\n` +
      `- Email address\n` +
      `- Phone number`
    );

    if (confirmed) {
      const name = prompt('Enter your full name:');
      if (!name) return;

      const email = prompt('Enter your email:');
      if (!email) return;

      const phone = prompt('Enter your phone number:');
      if (!phone) return;

      submitAdoption(petId, name, email, phone, petName);
    }
  }

  async function submitAdoption(
    petId: number, 
    name: string, 
    email: string, 
    phone: string, 
    petName: string
  ) {
    try {
      const response = await fetch(`${API_URL}/adoptions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pet_id: petId,
          name: name,
          email: email,
          phone: phone,
          notes: `Interested in adopting ${petName} from search results`
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit adoption application');
      }

      const result = await response.json();
      alert(
        `✅ Success!\n\n${result.message}\n\n` +
        `We'll contact you at ${email} soon to discuss the adoption process for ${petName}!`
      );
      
      // Refresh search results
      searchPets();
    } catch (error) {
      console.error('Error submitting adoption:', error);
      alert('❌ Error submitting adoption application. Please try again or contact us directly.');
    }
  }
};

export default SearchResults;