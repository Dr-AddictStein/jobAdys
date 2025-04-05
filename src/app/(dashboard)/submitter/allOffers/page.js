export default function AllOffersPage() {
  return (
    <main style={{ 
      padding: '2rem', 
      fontFamily: 'sans-serif', 
      backgroundColor: '#f9f3f3', 
      minHeight: '100vh' 
    }}>
      <div style={{ 
        width: '100%', 
        margin: '0 auto', 
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        padding: '2rem'
      }}>
        {/* Header with icon and title */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '1.5rem' 
        }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            backgroundColor: '#7095e6', 
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '1rem'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" fill="white"/>
            </svg>
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.2rem' }}>My Offers</h2>
            <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>1 Offers</p>
          </div>
        </div>

        {/* Tab navigation */}
        <div style={{ 
          display: 'flex', 
          marginBottom: '1.5rem',
          gap: '1rem',
          maxWidth: '400px'
        }}>
          <button style={{ 
            flex: 1,
            padding: '0.5rem 0',
            backgroundColor: '#6c92e6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '500',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'all 0.2s ease'
          }}>
            All
          </button>
          <button style={{ 
            flex: 1,
            padding: '0.5rem 0',
            backgroundColor: '#6c92e6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '500',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'all 0.2s ease'
          }}>
            Running
          </button>
          <button style={{ 
            flex: 1,
            padding: '0.5rem 0',
            backgroundColor: '#6c92e6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '500',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'all 0.2s ease'
          }}>
            Done
          </button>
        </div>

        {/* Offer item */}
        <div style={{ 
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '1rem'
        }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 'normal' }}>Front-end web developer, Junior</h3>
          </div>
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
                Offer ID <span style={{ color: '#ff0000' }}>#aaaaaa</span>
              </p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
                Posted by, <span style={{ color: '#4a90e2' }}>Vladyslav Titov</span>
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.9rem', color: '#666' }}>Running</span>
              <span style={{ fontSize: '0.9rem', color: '#666' }}>20.2.2025</span>
              <button style={{ 
                padding: '0.5rem 1rem',
                backgroundColor: 'transparent',
                color: '#000',
                border: 'none',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}>
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 