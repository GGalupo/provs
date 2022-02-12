import styled from "@emotion/styled";

import { Container as MUIContainer } from "../components/MUI/Container";

export const GlobalContainer = styled(MUIContainer)`
  max-width: 1440px;

  padding: 2rem 1.25rem;

  @media (min-width: 500px) {
    padding: 3rem 1.75rem;
  }

  @media (min-width: 900px) {
    padding: 4rem 2rem;
  }
`;
