import styled from 'styled-components'

const smallScreen = 735;

// background-color: #bcbcbc;
export const ContainerView = styled.div`
  width: 90%;
  max-width: 980px;
  margin: auto;
  display: flex;
  flex-direction: row;
  @media (max-width: ${smallScreen}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ColumnContainer = styled.div`
  margin-top: 60px;
  width: 50%;
  max-width: 490px;
  float: left;
  @media (max-width: ${smallScreen}px) {
    width: 100%;
		float: none;
  }
`;

// background-color: blue;
export const Column = styled.div`
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: ${smallScreen}px) {
    width: 100%;
  }
`;

export const MacbookImage = styled.img`
  width: 85%;
  height: auto;
  float: left;
  @media (max-width: ${smallScreen}px) {
    width: 100%;
		height: auto;
  }
`;

export const TitleLabel = styled.div`
  font-size: 32px;
  line-height: 1.125;
  font-weight: 500;
  letter-spacing: .004em;
  font-family: SF Pro Display,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
  padding: 20px 35px 0 0;
  text-align: left;
  color: #333;
`;

export const DescriptionWrapper = styled.div`
  margin: 20px 0px;
  text-align: left;
  font-family: SF Pro Text,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
`;

export const DescriptionLabel = styled.div`
  font-size: 14px;
  line-height: 1.42861;
  font-weight: 400;
  letter-spacing: -.016em;
  list-style: none;
  margin-bottom: 11px;
  color: #333;
  padding: 0px 35px 0 0;
`;

export const ConfigurationTitle = styled.div`
  font-size: 17px;
  line-height: 1.52947;
  font-weight: 600;
  letter-spacing: -.021em;
  margin-top: 22px;
`;