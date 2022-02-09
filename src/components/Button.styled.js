import styled, { css } from 'styled-components';

export const Button = styled.input.attrs((props) => ({
  type: 'button',
}))`
  width: 54px;
  height: 54px;
  font-size: 22px;
  border-radius: 4px;
  border: none;
  background: transparent;

  &:hover {
    background-color: var(--dim-white);
    color: var(--black);
  }

  ${(props) =>
    props.primary &&
    css`
      color: var(--light-red);
      &:hover {
        color: var(--dark-red);
      }
    `}
  ${(props) =>
    props.secondary &&
    css`
      background-color: var(--dark-red);
      color: var(--white);
      box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
        rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
        rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px,
        rgba(0, 0, 0, 0.07) 0px 32px 64px;
      &:hover {
        background-color: var(--dark-red);
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px,
          rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
          rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
      }
      &:active {
        color: var(--white);
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
          rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
          rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px,
          rgba(0, 0, 0, 0.07) 0px 32px 64px;
      }
    `}
`;
