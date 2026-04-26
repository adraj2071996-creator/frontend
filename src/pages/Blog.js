import React from 'react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: '5 Essential Tips for Summer Pet Care',
      excerpt: 'Keep your furry friends safe and cool during hot Indian summers with these veterinarian-approved tips that every pet parent should know.',
      date: 'May 12, 2026',
      category: 'Pet Health',
      image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&q=80',
    },
    {
      id: 2,
      title: 'First Aid for Street Cows & Bulls',
      excerpt: 'Stray cattle often ingest plastic or face road injuries. Learn how to provide temporary relief and which specialized NGOs to contact for cow rescue.',
      date: 'May 05, 2026',
      category: 'Cattle Welfare',
      image: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&q=80',
    },
    {
      id: 3,
      title: 'Helping Injured Birds in Summer',
      excerpt: 'Heatstroke is common among birds like pigeons and sparrows. Discover how simple water bowls and "Sakoras" can save lives in your balcony.',
      date: 'April 20, 2026',
      category: 'Avian Care',
      image: 'https://images.unsplash.com/photo-1444464666168-49d633b867ad?w=800&q=80',
    },
    {
      id: 4,
      title: 'Understanding Pet First Aid',
      excerpt: 'Knowing how to react in a pet emergency can save lives. Here is a comprehensive guide every pet owner should bookmark.',
      date: 'April 28, 2026',
      category: 'First Aid',
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&q=80',
    },
    {
      id: 5,
      title: 'Street Cat Welfare & TNR',
      excerpt: 'Street cats face unique challenges. Learn about the importance of Trap-Neuter-Return (TNR) and why feeding milk is actually harmful to cats.',
      date: 'April 10, 2026',
      category: 'Cat Care',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80',
    },
    {
      id: 6,
      title: 'The Impact of Local Animal NGOs',
      excerpt: 'Highlighting the incredible work being done by local rescue organizations and how you can support them in your city.',
      date: 'March 15, 2026',
      category: 'Community',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80',
    },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1><span className="gradient-text">Latest Articles</span></h1>
        <p>Expert advice and community stories covering dogs, cats, cows, and more.</p>
      </div>

      <div className="blog-grid">
        {posts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-image-container">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-image-overlay" />
              <span className="blog-category">{post.category}</span>
            </div>
            <div className="blog-content">
              <span className="blog-date">{post.date}</span>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <button className="read-more">Read Article →</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
