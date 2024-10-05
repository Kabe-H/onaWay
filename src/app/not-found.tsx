import { Typography, Container, Button } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container style={{ textAlign: 'center', marginTop: '150px', minHeight:"50vh" }}>
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          Go back to Home
        </Button>
      </Link>
    </Container>
  );
}