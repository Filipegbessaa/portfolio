import styled, { css } from 'styled-components';
import { TextStyleVariantsMap } from '../../../../foundation/Text';
import { breakpointsMedia } from '../../../../theme/utils/breakPointsMedia';

export const MenuWrapper = styled.nav`
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.secondary.main};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;

MenuWrapper.Top = styled.div`
  margin-top: 10px;
`
MenuWrapper.Center = styled.div`
  list-style: none;
  a {
    text-decoration: none;
    color: #88989E;
    transition: 200ms ease-in-out;
    /* ${breakpointsMedia({
  xs: css`
                    ${TextStyleVariantsMap.smallestException}
                `,
  md: css`
                  ${TextStyleVariantsMap.paragraph1}
                `,
})} */
  }

`
MenuWrapper.Bottom = styled.div`
  margin-bottom: 10px;
`

