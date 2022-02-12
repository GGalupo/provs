import { Link } from "../components/Link";
import { Typography } from "../components/MUI/Typography";
import { Container } from "../components/MUI/Container";

const SignUp = () => {
  return (
    <Container>
      <Typography variant="h1">Sign up page</Typography>
      <Link href="/login">To login page</Link>
      <Link href="/">To home page</Link>
    </Container>
  );
};

export default SignUp;
