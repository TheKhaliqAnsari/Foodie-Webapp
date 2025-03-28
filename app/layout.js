import RootHeader from '@/components/main-header';
import './globals.css';
import MainHederBackground from '@/components/main-header-background';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHederBackground />
        <RootHeader />
        

        {children}
      </body>
    </html>
  );
}
