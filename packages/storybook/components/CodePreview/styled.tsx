import { defaultTheme } from '@bigcommerce/big-design';
import { LiveError } from 'react-live';
import styled from 'styled-components';

export const StyledLiveError = styled(LiveError)`
  background-color: ${({ theme }) => theme.colors.secondary70};
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  padding: ${({ theme }) => theme.spacing.small};
`;

StyledLiveError.defaultProps = { theme: defaultTheme };