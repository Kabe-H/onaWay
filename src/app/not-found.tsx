import { Typography, Container, Button } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container
      style={{ textAlign: "center", marginTop: "150px", minHeight: "50vh" }}
    >
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        ¡Ups! La página que estás buscando no existe.
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          Volver
        </Button>
      </Link>
    </Container>
  );
}
