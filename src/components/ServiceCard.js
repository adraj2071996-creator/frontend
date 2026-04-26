import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const { name, type, address, distance, phone, id } = service;

  const formatType = (str) =>
    str.split('_').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const typeEmojis = {
    veterinary: '🩺', hospital: '🏥', ngo: '🤝', grooming: '✂️', first_aid: '🚑',
  };

  const fakeRating = (3.8 + (id % 3) * 0.35).toFixed(1);

  const handleClick = () => {
    navigate(`/service/${id}`, { state: { service } });
  };

  return (
    <div className="service-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="card-header">
        <span className="card-type">{typeEmojis[type] || '🐾'} {formatType(type)}</span>
        <span className="card-distance">📍 {distance.toFixed(1)} km</span>
      </div>

      <h3 className="card-title">{name}</h3>
      <p className="card-address">{address}</p>

      <div className="card-rating">
        {[1, 2, 3, 4, 5].map((s) => (
          <span key={s} style={{ color: s <= Math.round(parseFloat(fakeRating)) ? '#FFD166' : '#3A3950', fontSize: '1rem' }}>★</span>
        ))}
        <span className="card-rating-value">{fakeRating}</span>
      </div>

      <div className="card-footer">
        {phone ? (
          <a href={`tel:${phone}`} className="card-phone" onClick={(e) => e.stopPropagation()}>
            📞 {phone}
          </a>
        ) : (
          <span className="card-phone" style={{ color: 'var(--text-muted)', cursor: 'default' }}>
            No phone available
          </span>
        )}
        <span className="card-view-btn">View Details →</span>
      </div>
    </div>
  );
};

export default ServiceCard;
