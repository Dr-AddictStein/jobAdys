export default function NewOfferPage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Create New Offer</h1>
      <div style={{ marginTop: '2rem' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label htmlFor="title" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Offer Title
            </label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                borderRadius: '4px', 
                border: '1px solid #ccc' 
              }} 
              placeholder="Enter a descriptive title for your offer"
            />
          </div>
          
          <div>
            <label htmlFor="description" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Description
            </label>
            <textarea 
              id="description" 
              name="description" 
              rows="4" 
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                borderRadius: '4px', 
                border: '1px solid #ccc' 
              }} 
              placeholder="Describe the details of your offer"
            ></textarea>
          </div>
          
          <div>
            <label htmlFor="budget" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Budget
            </label>
            <input 
              type="number" 
              id="budget" 
              name="budget" 
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                borderRadius: '4px', 
                border: '1px solid #ccc' 
              }} 
              placeholder="Enter your budget"
            />
          </div>
          
          <div>
            <label htmlFor="deadline" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Deadline
            </label>
            <input 
              type="date" 
              id="deadline" 
              name="deadline" 
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                borderRadius: '4px', 
                border: '1px solid #ccc' 
              }}
            />
          </div>
          
          <button 
            type="submit" 
            style={{ 
              padding: '0.75rem 1.5rem', 
              backgroundColor: '#0070f3', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer',
              fontWeight: 'bold',
              marginTop: '1rem'
            }}
          >
            Create Offer
          </button>
        </form>
      </div>
    </main>
  );
} 