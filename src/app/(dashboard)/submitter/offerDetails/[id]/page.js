export default function OfferDetailsPage({ params }) {
  const { id } = params;
  
  // In a real app, you would fetch this data from your API or database
  // This is just sample data
  const offer = {
    id: id,
    title: "Website Development",
    description: "Looking for an experienced web developer to build a modern e-commerce website with user authentication, product catalog, shopping cart, and payment integration. The website should be responsive and optimized for all devices.",
    budget: 2000,
    deadline: "2023-12-20",
    status: "Active",
    createdAt: "2023-10-15",
    requirements: [
      "5+ years of experience with React and Next.js",
      "Knowledge of e-commerce platforms",
      "Experience with payment gateways integration",
      "Responsive design skills"
    ],
    applications: [
      {
        id: 101,
        performer: "John Doe",
        bid: 1800,
        coverLetter: "I have 6 years of experience building e-commerce websites...",
        status: "Under Review"
      },
      {
        id: 102,
        performer: "Jane Smith",
        bid: 2200,
        coverLetter: "I specialize in building high-performance e-commerce solutions...",
        status: "Under Review"
      },
      {
        id: 103,
        performer: "Mike Johnson",
        bid: 1950,
        coverLetter: "I've built over 15 e-commerce websites in the past 4 years...",
        status: "Under Review"
      }
    ]
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <div style={{ marginBottom: '2rem' }}>
        <a 
          href="/submitter/allOffers" 
          style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            color: '#0070f3',
            textDecoration: 'none',
            fontWeight: 'medium'
          }}
        >
          ← Back to All Offers
        </a>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>{offer.title}</h1>
        <span 
          style={{ 
            padding: '0.5rem 1rem', 
            backgroundColor: offer.status === 'Active' ? '#e6f7f0' : '#f5f5f5',
            color: offer.status === 'Active' ? '#0a8050' : '#666',
            borderRadius: '4px',
            fontSize: '0.875rem',
            fontWeight: 'bold'
          }}
        >
          {offer.status}
        </span>
      </div>

      <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        <div style={{ padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
          <p style={{ margin: 0, fontSize: '0.875rem', color: '#666' }}>Budget</p>
          <p style={{ margin: '0.5rem 0 0 0', fontWeight: 'bold', fontSize: '1.25rem' }}>${offer.budget}</p>
        </div>
        <div style={{ padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
          <p style={{ margin: 0, fontSize: '0.875rem', color: '#666' }}>Deadline</p>
          <p style={{ margin: '0.5rem 0 0 0', fontWeight: 'bold', fontSize: '1.25rem' }}>{offer.deadline}</p>
        </div>
        <div style={{ padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
          <p style={{ margin: 0, fontSize: '0.875rem', color: '#666' }}>Posted On</p>
          <p style={{ margin: '0.5rem 0 0 0', fontWeight: 'bold', fontSize: '1.25rem' }}>{offer.createdAt}</p>
        </div>
      </div>

      <div style={{ marginTop: '2.5rem' }}>
        <h2>Description</h2>
        <p style={{ lineHeight: '1.6', color: '#333' }}>{offer.description}</p>
      </div>

      <div style={{ marginTop: '2.5rem' }}>
        <h2>Requirements</h2>
        <ul style={{ paddingLeft: '1.5rem' }}>
          {offer.requirements.map((req, index) => (
            <li key={index} style={{ marginBottom: '0.75rem', color: '#333' }}>{req}</li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h2>Applications ({offer.applications.length})</h2>
        
        {offer.applications.map(app => (
          <div 
            key={app.id} 
            style={{ 
              border: '1px solid #eaeaea', 
              borderRadius: '8px',
              padding: '1.5rem',
              marginTop: '1.5rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0 }}>{app.performer}</h3>
              <span 
                style={{ 
                  padding: '0.35rem 0.75rem', 
                  backgroundColor: '#f0f7ff',
                  color: '#0070f3',
                  borderRadius: '4px',
                  fontSize: '0.875rem',
                  fontWeight: 'bold'
                }}
              >
                {app.status}
              </span>
            </div>
            
            <div style={{ marginTop: '1rem' }}>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#666' }}>Bid Amount</p>
              <p style={{ margin: '0.25rem 0 0 0', fontWeight: 'bold' }}>${app.bid}</p>
            </div>
            
            <div style={{ marginTop: '1rem' }}>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#666' }}>Cover Letter</p>
              <p style={{ margin: '0.5rem 0 0 0' }}>{app.coverLetter}</p>
            </div>
            
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
              <button 
                style={{ 
                  padding: '0.5rem 1rem',
                  backgroundColor: '#0070f3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: 'bold'
                }}
              >
                Accept
              </button>
              <button 
                style={{ 
                  padding: '0.5rem 1rem',
                  backgroundColor: 'transparent',
                  color: '#666',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: 'bold'
                }}
              >
                Reject
              </button>
              <button 
                style={{ 
                  padding: '0.5rem 1rem',
                  backgroundColor: 'transparent',
                  color: '#0070f3',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: 'bold'
                }}
              >
                Message
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
        <button 
          style={{ 
            padding: '0.75rem 1.5rem',
            backgroundColor: offer.status === 'Active' ? '#f44336' : '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          {offer.status === 'Active' ? 'Close Offer' : 'Reopen Offer'}
        </button>
        <button 
          style={{ 
            padding: '0.75rem 1.5rem',
            backgroundColor: 'transparent',
            color: '#666',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Edit Offer
        </button>
      </div>
    </main>
  );
} 