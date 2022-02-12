import { Link } from "../components/Link";
import { Container } from "../components/MUI/Container";
import { Typography } from "../components/MUI/Typography";

const Login = () => {
  return (
    <Container>
      <Typography variant="h1">Login page</Typography>
      <Link href="/sign-up">To sign up page</Link>
      <Link href="/">To home page</Link>
    </Container>
  );
};

export default Login;
