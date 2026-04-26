import React from 'react';

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
    '🦷 Brush your pet\'s teeth 2–3 times per week.',
    '⚖️ Monitor your pet\'s weight monthly — obesity leads to joint issues.',
    '👁️ Check eyes & ears weekly for signs of infection.',
    '🧪 Annual blood tests help catch hidden conditions early.',
  ],
  hospital: [
    '🚨 Signs of emergency: difficulty breathing, seizures, heavy bleeding.',
    '🌡️ Normal pet temperature: 38–39.2°C. Higher means fever.',
    '🍖 Never give chocolate, grapes, or onions to pets — toxic!',
    '💊 Always complete the full antibiotic course prescribed.',
    '📋 Keep a medical record folder for all vet visits.',
  ],
  grooming: [
    '🛁 Bathe dogs every 4–6 weeks using pet-safe shampoo.',
    '✂️ Trim nails every 3–4 weeks to prevent overgrowth & pain.',
    '🪮 Brush long-haired breeds daily to prevent matting.',
    '👂 Clean ears gently with vet-approved solution weekly.',
    '🐱 Cats self-groom but still benefit from regular brushing.',
  ],
  ngo: [
    '🏠 Consider adopting from a shelter before buying from a breeder.',
    '🐾 Spay/neuter your pet to prevent overpopulation.',
    '🔖 Microchip your pet so they can be identified if lost.',
    '📣 Report stray animal abuse to local animal welfare boards.',
    '❤️ Fostering pets saves lives and helps them find forever homes.',
  ],
  first_aid: [
    '🩸 For bleeding: apply firm pressure with a clean cloth for 5–10 mins.',
    '🐕 If your pet is choking: look in the mouth, do NOT do blind sweeps.',
    '🔥 For burns: cool with running water for 10 mins. Do NOT use ice.',
    '☠️ Suspected poisoning: call a vet immediately. Note what was ingested.',
    '🦴 Suspected fracture: immobilize the limb, carry the pet flat, go to vet.',
  ],
};

const StarRating = ({ rating }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} style={{ fontSize: '1.1rem', color: s <= Math.round(rating) ? '#FFD166' : '#3A3950' }}>★</span>
      ))}
      <span style={{ marginLeft: '0.4rem', fontWeight: 700, fontSize: '0.95rem', color: '#FFD166' }}>{rating.toFixed(1)}</span>
    </div>
  );
};

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  const type = service.type || 'veterinary';
  const doctors = doctorProfiles[type] || doctorProfiles.veterinary;
  const tips = petCareTips[type] || petCareTips.veterinary;
  const fakeRating = (3.8 + (service.id % 3) * 0.35).toFixed(1);
  const fakeReviews = 48 + (service.id % 5) * 23;
  const fakeWaitTime = `${5 + (service.id % 4) * 5} mins`;

  const formatType = (str) =>
    str.split('_').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const typeColors = {
    veterinary: '#6C63FF',
    hospital: '#FF6584',
    ngo: '#43E97B',
    grooming: '#FFD166',
    first_aid: '#F97316',
  };
  const color = typeColors[type] || '#6C63FF';

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>

        {/* Close Button */}
        <button className="modal-close" onClick={onClose}>✕</button>

        {/* Header */}
        <div className="modal-header" style={{ borderColor: color + '44' }}>
          <div className="modal-type-badge" style={{ background: color + '22', color, borderColor: color + '44' }}>
            {formatType(type)}
          </div>
          <h2 className="modal-title">{service.name}</h2>
          <p className="modal-address">📍 {service.address}</p>

          <div className="modal-meta">
            <StarRating rating={parseFloat(fakeRating)} />
            <span className="modal-reviews">({fakeReviews} reviews)</span>
            <span className="modal-divider">|</span>
            <span className="modal-wait">⏱ ~{fakeWaitTime} wait</span>
            <span className="modal-divider">|</span>
            <span className="modal-dist">📍 {service.distance.toFixed(1)} km away</span>
          </div>

          {service.phone && (
            <a href={`tel:${service.phone}`} className="modal-call-btn" style={{ background: color }}>
              📞 Call Now — {service.phone}
            </a>
          )}
        </div>

        {/* Doctors / Staff */}
        <div className="modal-section">
          <h3 className="modal-section-title">Meet the Team</h3>
          <div className="modal-doctors">
            {doctors.map((doc, i) => (
              <div key={i} className="doctor-card">
                <div className="doctor-avatar">{doc.avatar}</div>
                <div className="doctor-info">
                  <p className="doctor-name">{doc.name}</p>
                  <p className="doctor-title">{doc.title}</p>
                  <p className="doctor-detail">🏅 {doc.experience} experience</p>
                  <p className="doctor-detail">🎯 {doc.speciality}</p>
                </div>
                <StarRating rating={parseFloat(fakeRating) - i * 0.1} />
              </div>
            ))}
          </div>
        </div>

        {/* Pet Care Tips */}
        <div className="modal-section">
          <h3 className="modal-section-title">🐾 Pet Care Tips from This Center</h3>
          <ul className="tips-list">
            {tips.map((tip, i) => (
              <li key={i} className="tip-item" style={{ animationDelay: `${i * 0.06}s` }}>
                {tip}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ServiceModal;
