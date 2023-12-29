import styled from "styled-components";

const StyledHeader = styled.div`
  align-items: center;
  justify-content: space-between;
  padding: 0;
  width: 100%;

  .nav {
    background-color: #fafafa;
    color: #353535;
    font-weight: bold;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 16px;
    padding: 0 32px;
    margin: 8px 0;
  }

  .nav a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .nav ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  .nav li {
    padding: 0 8px;
  }

  .nav li:hover {
    background-color: #d8d4d4;
  }

  #login_button {
    margin: 8px 0;
    background: #ee0033;
    gap: 8px;
  }

  svg {
    width: 24px;
    height: 24px;
  }

  div {
    display: flex;
    align-items: center;
  }

  #check {
    margin-right: 8px;
    color: #ee0033;
    font-weight: bold;
  }

  @media screen and (max-width: 1200px) {
    #login_button {
      margin-right: 32px;
    }
  }
`;

export default StyledHeader;
