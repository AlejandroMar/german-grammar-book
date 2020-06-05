import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledGatsbyLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 2rem;
  color: ${props => props.theme.theme_colors.link};
  text-decoration: none;
  transition: 600ms;
`;