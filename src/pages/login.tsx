import { Link } from "../components/Link";
import { Typography } from "../components/MUI";
import { GlobalContainer } from "../styles";

const Login = () => {
  return (
    <GlobalContainer>
      <Typography variant="h1">Login page</Typography>
      <Link href="/sign-up">To sign up page</Link>
      <Link href="/">To home page</Link>
    </GlobalContainer>
  );
};

export default Login;
