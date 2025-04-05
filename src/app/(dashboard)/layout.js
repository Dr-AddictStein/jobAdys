import Header from '@/components/Dashboard/Admin/Header';
import Footer from '@/components/Dashboard/Admin/Footer';

export default function AdminLayout({ children }) {
  return (
    <div style={{ backgroundColor: '#f7f0ee', minHeight: '100vh' }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
