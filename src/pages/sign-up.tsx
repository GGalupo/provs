import { Link } from "../components/Link";
import { Typography } from "../components/MUI";
import { GlobalContainer } from "../styles";

const SignUp = () => {
  return (
    <GlobalContainer>
      <Typography variant="h1">Sign up page</Typography>
      <Link href="/login">To login page</Link>
      <Link href="/">To home page</Link>
    </GlobalContainer>
  );
};

export default SignUp;
