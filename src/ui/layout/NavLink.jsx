import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  text-transform: capitalize;
  &:i {
    color: var(--color-text);
  }
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    color: var(--color-grey-800);
    font-size: 1.5rem;
    font-weight: 600;
    padding: 1rem 0.8rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #f9f9f9;
    background-color: var(--color-primary);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-grey-600);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-light);
  }
`;
