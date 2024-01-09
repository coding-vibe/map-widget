import { css } from '@emotion/react';

export const field = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const input = css`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
`;

export const label = css`
  display: block;
  position: relative;
  width: 200px;
  height: 20px;
  border-radius: 5px;
  background-color: #f9fcff;
  background-image: linear-gradient(147deg, #f9fcff 0%, #dee4ea 74%);
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  cursor: pointer;
  transition: transform 0.2s ease-out;
`;
