import React from 'react';

const About = () => {
  const cards = [
    {
      icon: '🎯',
      title: 'Our Mission',
      body: 'We believe every animal deserves access to immediate, high-quality care. Animal Helper was built to bridge the gap between pet parents, animal lovers, and essential pet-related services across India.',
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: '🏠',
      title: 'Why NGOs Matter',
      body: 'Animal NGOs are the backbone of street animal welfare. They provide life-saving treatment, food, and shelter for street dogs, cats, and cows who have no one to care for them. Most importantly, NGOs do not charge money from rescuers for street animal treatments, as they operate solely on community support and donations.',
      image: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: '🛠️',
      title: 'How It Works',
      body: 'Enter your 6-digit Indian Pincode, choose the type of service you need — Veterinary, Grooming, NGO, or First Aid — and our system instantly finds the closest resources within a 15 km radius, sorted by distance.',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: '❤️',
      title: 'Get Involved',
      body: 'Are you an animal shelter, a veterinary clinic, or an individual offering pet first aid? Join our growing network to become discoverable by people in your local community who need you the most.',
      image: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: '🧴',
      title: 'Grooming & Hygiene',
      body: 'Regular grooming is essential for preventing bacterial infections and protecting animals from parasites like ticks and fleas. Ticks carry dangerous bacteria that can lead to severe illnesses if not spotted early. Professional grooming ensures your pets and street animals stay healthy, clean, and bacteria-free.',
      image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&auto=format&fit=crop&q=80',
    },
    {
      icon: '🩹',
      title: 'Emergency First Aid',
      body: 'In critical moments like accidents or sudden illness, basic first aid knowledge is a lifesaver. Immediate intervention—like stopping bleeding or managing heatstroke—can stabilize an animal before professional veterinary help arrives, significantly increasing their chances of a full recovery.',
      image: 'https://images.unsplash.com/photo-1599443015574-be5fe8a05783?w=800&auto=format&fit=crop&q=80',
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1596733430284-f74370603735?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1537151608804-ea2f1ea14a15?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1544568100-847a948585b9?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1506993708131-b0bf29d16b76?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?w=600&auto=format&fit=crop&q=80",
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1><span className="gradient-text">About Animal Helper</span></h1>
        <p>Connecting pet parents and animal rescuers with the best care, instantly.</p>
      </div>

      <div className="about-content">
        {cards.map((card) => (
          <div className="about-card" key={card.title}>
            <div className="about-card-image-container">
              <img src={card.image} alt={card.title} className="about-card-image" />
              <div className="about-card-image-overlay"></div>
            </div>
            <div className="about-card-text">
              <h2>{card.icon} {card.title}</h2>
              <p>{card.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* New Gallery Section */}
      <div className="gallery-section">
        <h2 className="gallery-title">The Lives We Help Save</h2>
        <p className="gallery-subtitle">Every animal matters. Thank you for being part of the solution.</p>
        <div className="masonry-gallery">
          {galleryImages.map((src, index) => (
            <div className="gallery-item" key={index} style={{ animationDelay: `${index * 0.05}s` }}>
              <img src={src} alt={`Saved animal ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
