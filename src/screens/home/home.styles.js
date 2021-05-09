import styled from 'styled-components'

const smallScreen = 735;

export const ContainerView = styled.div`
  width: 90%;
  max-width: 980px;
  margin: auto;
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  margin-bottom: 101px;
  @media (max-width: ${smallScreen}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ColumnContainer = styled.div`
  width: 50%;
  max-width: 490px;
  float: left;
  @media (max-width: ${smallScreen}px) {
    width: 100%;
		float: none;
  }
`;

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
  letter-spacing: .010em;
  font-family: SF Pro Display,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
  padding: 20px 135px 0 0;
  text-align: left;
  color: #333;
  @media (max-width: ${smallScreen}px) {
    width: 100%;
		height: auto;
    padding: 20px 35px 0 0;
  }
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

export const FooterWrapper = styled.div`
  max-width: 980px;
  height: 81px;
  margin-left: auto;
  margin-right: auto;
  background-color: #f8f8f8;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  bottom: 1px;
  left: 1px;
  right: 1px;
`;

export const PriceLabel = styled.div`
  font-size: 24px;
  line-height: 1.16667;
  letter-spacing: .009em;
  font-family: SF Pro Display,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: 600;
  max-width: 380px;
  text-align: right;
`;