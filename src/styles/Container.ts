import styled from "@emotion/styled";

import { Container } from "../components/MUI";

export const GlobalContainer = styled(Container)`
  max-width: 1440px;

  padding: 2rem 1.25rem;

  @media (min-width: 500px) {
    padding: 3rem 1.75rem;
  }

  @media (min-width: 900px) {
    padding: 4rem 2rem;
  }
`;
