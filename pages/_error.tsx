import Link from 'next/link';

const ErrorPage = () => {

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>
        Go back to{' '}
        <Link href="/">
          Homepage
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
