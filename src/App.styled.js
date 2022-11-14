import styled from "styled-components";

export const AppContainer = styled.div`
  width: 80%;
  padding: 1rem 0;
  border: 1px solid black;
  border-radius: 4px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  cursor: default;

  & h1 {
    text-transform: capitalize;
    font-size: 3rem;
    color: red;
    margin: 0;
  }

  & p {
    margin: 0;
    font-size: 0.8rem;
  }
`;

export const List = styled.ul`
  padding: 1rem;
  margin: 0;
  text-align: start;
  list-style-type: none;

  & li {
    margin-bottom: 0.5rem;

    &:hover {
      font-weight: 700;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const Button = styled.button`
  background: black;
  border: 1px solid transparent;
  border-radius: 4px;
  color: white;
  padding: 0.5rem 1.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: capitalize;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    color: black;
    background: white;
    border: 1px solid black;
  }

  &:active {
    transform: scale(0.98);
  }
`;
