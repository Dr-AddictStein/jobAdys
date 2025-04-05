export default function AllOffersPage() {
  // Sample data - in a real app this would come from an API or database
  const offers = [
    {
      id: 1,
      title: "Website Development",
      description: "Build a modern e-commerce website",
      budget: 2000,
      deadline: "2023-12-20",
      status: "Active",
      applications: 5
    },
    {
      id: 2,
      title: "Logo Design",
      description: "Create a logo for a tech startup",
      budget: 500,
      deadline: "2023-11-15",
      status: "Active",
      applications: 12
    },
    {
      id: 3,
      title: "Content Writing",
      description: "Write 10 blog articles on technology trends",
      budget: 800,
      deadline: "2023-11-30",
      status: "Closed",
      applications: 8
    }
  ];

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Your Offers</h1>
      <div style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
        <a 
          href="/submitter/newOffer" 
          style={{ 
            display: 'inline-block',
            padding: '0.75rem 1.5rem', 
            backgroundColor: '#0070f3', 
            color: 'white', 
            textDecoration: 'none',
            borderRadius: '4px', 
            fontWeight: 'bold'
          }}
        >
          Create New Offer
        </a>
      </div>

      <div>
        {offers.map(offer => (
          <div 
            key={offer.id} 
            style={{ 
              border: '1px solid #eaeaea', 
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1.5rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ margin: 0 }}>{offer.title}</h2>
              <span 
                style={{ 
                  padding: '0.35rem 0.75rem', 
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
            
            <p style={{ marginTop: '0.75rem', color: '#666' }}>{offer.description}</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
              <div>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#666' }}>Budget</p>
                <p style={{ margin: 0, fontWeight: 'bold' }}>${offer.budget}</p>
              </div>
              <div>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#666' }}>Deadline</p>
                <p style={{ margin: 0, fontWeight: 'bold' }}>{offer.deadline}</p>
              </div>
              <div>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#666' }}>Applications</p>
                <p style={{ margin: 0, fontWeight: 'bold' }}>{offer.applications}</p>
              </div>
            </div>
            
            <div style={{ marginTop: '1.5rem' }}>
              <a 
                href={`/submitter/offerDetails/${offer.id}`} 
                style={{ 
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  backgroundColor: 'transparent',
                  color: '#0070f3',
                  border: '1px solid #0070f3',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 'bold'
                }}
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 