import styled from "styled-components";
import { lighten } from "polished";

export const Wrapper = styled.div`
  min-height: 100%;

  background: ${lighten(0.01, "#313131")};
`;
