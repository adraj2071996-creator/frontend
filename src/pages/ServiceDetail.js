import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const doctorProfiles = {
  veterinary: [
    { name: 'Dr. Priya Sharma', title: 'BVSC & AH, MVSc', experience: '12 years', speciality: 'Small Animals & Surgery', avatar: '👩‍⚕️' },
    { name: 'Dr. Rahul Mehta', title: 'BVSc, MVSc (Veterinary Medicine)', experience: '8 years', speciality: 'Internal Medicine & Dermatology', avatar: '👨‍⚕️' },
  ],
  hospital: [
    { name: 'Dr. Ananya Nair', title: 'BVSC & AH, PhD', experience: '15 years', speciality: 'Emergency & Critical Care', avatar: '👩‍⚕️' },
    { name: 'Dr. Sanjay Patel', title: 'BVSc, MVSc (Surgery)', experience: '10 years', speciality: 'Orthopedics & Neurology', avatar: '👨‍⚕️' },
  ],
  grooming: [
    { name: 'Sneha Kapoor', title: 'Certified Pet Groomer', experience: '6 years', speciality: 'All breeds & Coat types', avatar: '💇‍♀️' },
    { name: 'Arjun Das', title: 'Professional Dog Groomer', experience: '4 years', speciality: 'Large Dogs & Show Grooming', avatar: '✂️' },
  ],
  ngo: [
    { name: 'Meera Iyer', title: 'Animal Welfare Officer', experience: '9 years', speciality: 'Rescue & Rehabilitation', avatar: '🤝' },
    { name: 'Vikram Reddy', title: 'Shelter Manager', experience: '7 years', speciality: 'Adoption & Fostering', avatar: '🏠' },
  ],
  first_aid: [
    { name: 'Dr. Kavita Singh', title: 'Emergency Vet Technician', experience: '5 years', speciality: 'Trauma & First Response', avatar: '🚑' },
    { name: 'Rohan Bose', title: 'Certified Animal First Responder', experience: '3 years', speciality: 'Field Emergency Care', avatar: '🩺' },
  ],
};

const petCareTips = {
  veterinary: [
    '💉 Schedule vaccinations for your pet every year.',
    '🦷 Brush your pet\'s teeth 2–3 times per week to prevent gum disease.',
    '⚖️ Monitor your pet\'s weight monthly — obesity leads to joint issues.',
    '👁️ Check eyes & ears weekly for signs of redness or infection.',
    '🧪 Annual blood tests help catch hidden conditions early.',
  ],
  hospital: [
    '🚨 Emergency signs: difficulty breathing, seizures, heavy bleeding.',
    '🌡️ Normal pet temperature: 38–39.2°C. Higher indicates fever.',
    '🍖 Never give chocolate, grapes, or onions to pets — they are toxic!',
    '💊 Always complete the full antibiotic course prescribed.',
    '📋 Keep a medical record folder for all vet visits.',
  ],
  grooming: [
    '🛁 Bathe dogs every 4–6 weeks using pet-safe shampoo.',
    '✂️ Trim nails every 3–4 weeks to prevent overgrowth and pain.',
    '🪮 Brush long-haired breeds daily to prevent painful matting.',
    '👂 Clean ears gently with vet-approved solution weekly.',
    '🐱 Cats self-groom but still benefit from regular brushing.',
  ],
  ngo: [
    '🏠 Consider adopting from a shelter before buying from a breeder.',
    '🐾 Spay/neuter your pet to prevent overpopulation.',
    '🔖 Microchip your pet so they can be identified if ever lost.',
    '📣 Report stray animal abuse to local animal welfare boards.',
    '❤️ Fostering pets saves lives and helps them find forever homes.',
  ],
  first_aid: [
    '🩸 For bleeding: apply firm pressure with a clean cloth for 5–10 mins.',
    '🐕 If choking: look in the mouth carefully — do NOT do blind sweeps.',
    '🔥 For burns: cool with running water for 10 mins. Never use ice.',
    '☠️ Suspected poisoning: call a vet immediately, note what was ingested.',
    '🦴 Suspected fracture: immobilize the limb, carry the pet flat, go to vet.',
  ],
};

const StarRating = ({ rating }) => (
  <div className="star-rating">
    {[1, 2, 3, 4, 5].map((s) => (
      <span key={s} className={s <= Math.round(rating) ? 'star filled' : 'star'}>★</span>
    ))}
    <span className="rating-value">{rating.toFixed(1)}</span>
  </div>
);

const typeColors = {
  veterinary: '#6C63FF',
  hospital: '#FF6584',
  ngo: '#43E97B',
  grooming: '#FFD166',
  first_aid: '#F97316',
};

const typeEmojis = {
  veterinary: '🩺',
  hospital: '🏥',
  ngo: '🤝',
  grooming: '✂️',
  first_aid: '🚑',
};

const ServiceDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const service = location.state?.service;

  if (!service) {
    return (
      <div className="detail-not-found">
        <h2>Service not found</h2>
        <button className="back-btn" onClick={() => navigate(-1)}>← Go Back</button>
      </div>
    );
  }

  const { name, type, address, distance, phone, id } = service;
  const formatType = (str) =>
    str.split('_').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const doctors = doctorProfiles[type] || doctorProfiles.veterinary;
  const tips = petCareTips[type] || petCareTips.veterinary;
  const fakeRating = parseFloat((3.8 + (id % 3) * 0.35).toFixed(1));
  const fakeReviews = 48 + (id % 5) * 23;
  const fakeWaitTime = `${5 + (id % 4) * 5} mins`;
  const color = typeColors[type] || '#6C63FF';

  return (
    <div className="detail-page">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back to Results
      </button>

      {/* Hero Section */}
      <div className="detail-hero" style={{ '--accent-color': color }}>
        <div className="detail-hero-badge" style={{ background: color + '22', color, border: `1px solid ${color}44` }}>
          {typeEmojis[type]} {formatType(type)}
        </div>
        <h1 className="detail-title">{name}</h1>
        <p className="detail-address">📍 {address}</p>

        <div className="detail-meta-row">
          <StarRating rating={fakeRating} />
          <span className="detail-meta-pill">({fakeReviews} reviews)</span>
          <span className="detail-meta-pill">📍 {distance.toFixed(1)} km away</span>
          <span className="detail-meta-pill">⏱ ~{fakeWaitTime} avg. wait</span>
        </div>

        {phone && (
          <a href={`tel:${phone}`} className="detail-call-btn" style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}>
            📞 Call Now — {phone}
          </a>
        )}
      </div>

      <div className="detail-body">

        {/* Quick Stats */}
        <div className="detail-stats">
          <div className="stat-card">
            <span className="stat-number">{fakeReviews}+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{fakeRating}</span>
            <span className="stat-label">Average Rating</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{doctors.length * 3}+</span>
            <span className="stat-label">Years Combined Exp.</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{distance.toFixed(1)} km</span>
            <span className="stat-label">From You</span>
          </div>
        </div>

        {/* Meet the Team */}
        <div className="detail-section">
          <h2 className="detail-section-title">👨‍⚕️ Meet the Team</h2>
          <div className="detail-doctors">
            {doctors.map((doc, i) => (
              <div key={i} className="detail-doctor-card">
                <div className="detail-doctor-avatar">{doc.avatar}</div>
                <div className="detail-doctor-info">
                  <p className="detail-doctor-name">{doc.name}</p>
                  <p className="detail-doctor-title" style={{ color }}>{doc.title}</p>
                  <p className="detail-doctor-meta">🏅 {doc.experience} experience</p>
                  <p className="detail-doctor-meta">🎯 Speciality: {doc.speciality}</p>
                  <StarRating rating={fakeRating - i * 0.1} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pet Care Tips */}
        <div className="detail-section">
          <h2 className="detail-section-title">🐾 Pet Care Tips from This Center</h2>
          <ul className="detail-tips">
            {tips.map((tip, i) => (
              <li key={i} className="detail-tip-item" style={{ animationDelay: `${i * 0.07}s`, borderLeftColor: color }}>
                {tip}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetail;
