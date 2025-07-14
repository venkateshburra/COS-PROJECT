// app/layout.js
import './globals.css';
import NavBar from './components/NavBar';

export const metadata = {
  title: 'My App',
  description: 'Next.js App with Header',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-black text-white'>
        <NavBar />
        <main style={{ padding: '2rem' }}>{children}</main>
      </body>
    </html>
  );
}
