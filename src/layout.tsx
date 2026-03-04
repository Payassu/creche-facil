import { Outlet } from 'react-router-dom';
import Header from '@/components/shared/header.tsx';

const RootLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      {/*<Footer />*/}
    </div>
  );
};

export default RootLayout;
