import styled from "@emotion/styled";

import { GlobalContainer } from "../../../styles";

export const Container = styled(GlobalContainer)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-right: auto;
  }

  .MuiFormHelperText-root {
    margin-left: auto;
  }
`;
