import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentLocation, setCurrentLocation] = useState(null);

  const API_BASE_URL = 'http://localhost:5000/api';

  const handleSearch = async (pincode) => {
    setLoading(true);
    setError(null);
    setSearched(true);
    setResults([]);

    try {
      const geoResponse = await axios.get(`${API_BASE_URL}/pincode/${pincode}`);
      const { lat, lng } = geoResponse.data;
      setCurrentLocation({ lat, lng, pincode });
      await fetchServices(lat, lng, selectedCategory);
    } catch (err) {
      setError('Could not find location for this pincode. Please try another.');
      setLoading(false);
    }
  };

  const fetchServices = async (lat, lng, category) => {
    setLoading(true);
    setError(null);
    try {
      let url = `${API_BASE_URL}/nearby?lat=${lat}&lng=${lng}&radius=5`;
      if (category !== 'all') url += `&type=${category}`;
      const response = await axios.get(url);
      const sorted = [...response.data].sort((a, b) => a.distance - b.distance);
      setResults(sorted);
    } catch (err) {
      setError('Failed to fetch nearby services. Please try again.');
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentLocation) {
      fetchServices(currentLocation.lat, currentLocation.lng, selectedCategory);
    }
    // eslint-disable-next-line
  }, [selectedCategory]);

  return (
    <>
      <div className="home-hero">
        <div className="hero-badge"><span>🐾</span> India's #1 Pet Services Finder</div>
        <h1 className="hero-title">
          Find Pet Care<br />
          <span className="gradient-text">Near You Instantly</span>
        </h1>
        <p className="hero-sub">
          Enter your pincode to discover veterinary clinics, hospitals, NGOs, grooming spas, and first-aid centers within 5 km.
        </p>
      </div>

      <SearchBar onSearch={handleSearch} loading={loading} />

      {searched && (
        <Filters selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      )}

      <div className="results-section">
        {loading && (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p className="state-title">Locating nearby services…</p>
            <p className="state-desc">Scanning a 5 km radius around your pincode</p>
          </div>
        )}

        {error && !loading && (
          <div className="error-state">
            <div className="state-icon">⚠️</div>
            <p className="state-title">Something went wrong</p>
            <p className="state-desc">{error}</p>
          </div>
        )}

        {!loading && !error && searched && results.length === 0 && (
          <div className="empty-state">
            <div className="state-icon">🔍</div>
            <p className="state-title">No services found</p>
            <p className="state-desc">
              We couldn't find any services near {currentLocation?.pincode}.
            </p>
          </div>
        )}

        {!loading && !error && results.length > 0 && (
          <>
            <div className="results-header">
              <h2 className="results-title">Nearby Services</h2>
              <span className="results-count">{results.length} found</span>
            </div>
            <div className="results-grid">
              {results.map((service, i) => (
                <div key={service.id || i} style={{ animationDelay: `${i * 0.06}s` }}>
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
