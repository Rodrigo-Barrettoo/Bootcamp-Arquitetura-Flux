import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  @media (min-width: 300px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    list-style: none;
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    list-style: none;
  }

  @media (min-width: 1020px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    list-style: none;
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 25px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 29px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
