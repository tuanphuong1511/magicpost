import styled from "styled-components";

const StyledTracking = styled.div`
  background-color: #ee0033;
  border-radius: 16px;
  padding: 32px 64px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
  max-width: 1200px;

  .form-title {
    display: flex;
    align-items: center;
    background-color: #ee0033;
  }

  svg {
    width: 24px;
    height: 24px;
    margin: 8px;
    color: #fbfbfb;
  }

  p {
    font-size: 24px;
    color: #fbfbfb;
  }

  #input-tracking {
    background: #fbfbfb;
    border: none;
    border-radius: 16px;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    padding-left: 16px;
  }
`;

export default StyledTracking;
