import { FormEvent } from "react";
import { Email, Lock } from "@mui/icons-material";

import { Link } from "../components/Link";
import {
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "../components/MUI";
import { Container, Form } from "../components/pages/Login/styles";

const Login = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("entrar");
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Typography variant="h1">Entrar</Typography>

        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
          type="email"
          label="E-mail"
          variant="standard"
          placeholder="email@gmail.com"
        />
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
          }}
          label="Senha"
          variant="standard"
          placeholder="********"
          type="password"
          helperText={<Link href="/login">Esqueci minha senha</Link>}
        />

        <Button type="submit" fullWidth variant="contained" color="primary">
          Entrar
        </Button>
        <Typography>
          Não tem cadastro? <Link href="/sign-up">Registar-se</Link>
        </Typography>

        <Link href="/">To home page (temp link)</Link>
      </Form>
    </Container>
  );
};

export default Login;
