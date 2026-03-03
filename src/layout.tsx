import { Outlet } from 'react-router-dom';
import Header from '@/components/shared/header.tsx';

const RootLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      {/*<Footer />*/}
    </div>
  );
};

export default RootLayout;
