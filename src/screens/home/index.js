import React from "react";
import logo from '../../assets/mbp.jpeg';
import '../../App.css';
import {
  ContainerView, ColumnContainer, Column, MacbookImage, TitleLabel, DescriptionWrapper, DescriptionLabel,
  ConfigurationTitle
} from './home.styles';

export const Home = () => {

  const processorList = [{
    id: "1",
    displayText: "2.3GHz 8-core 9th-generation Intel Core i9 processor, Turbo Boost up to 4.8GHz",
    additionalCost: 0
  }, {
    id: "2",
    displayText: "2.4GHz 8-core 9th-generation Intel Core i9 processor, Turbo Boost up to 5.0GHz",
    additionalCost: 20000
  }];

  const memoryList = [{
    id: "1",
    displayText: "16GB 2666MHz DDR4 memory",
    additionalCost: 0
  }, {
    id: "1",
    displayText: "32GB 2666MHz DDR4 memory",
    additionalCost: 40000
  }, {
    id: "1",
    displayText: "64GB 2666MHz DDR4 memory",
    additionalCost: 80000
  }]

  const graphicsList = [{
    id: "1",
    displayText: "AMD Radeon Pro 5500M with 4GB of GDDR6 memory",
    additionalCost: 0
  }, {
    id: "1",
    displayText: "AMD Radeon Pro 5500M with 8GB of GDDR6 memory",
    additionalCost: 10000
  }, {
    id: "1",
    displayText: "AMD Radeon Pro 5600M with 8GB of HBM2 memory",
    additionalCost: 70000
  }]

  const storageList = [{
    id: "1",
    displayText: "1TB SSD storage",
    additionalCost: 0
  }, {
    id: "1",
    displayText: "2TB SSD storage",
    additionalCost: 40000
  }, {
    id: "1",
    displayText: "4TB SSD storage",
    additionalCost: 100000
  }, {
    id: "1",
    displayText: "8TB SSD storage",
    additionalCost: 220000
  }]

  const selectedDisplay = "16-inch Retina display with True Tone";
  const selectedKeyboard = "Touch Bar and Touch ID Backlit Magic Keyboard - US English Logic Pro X"

  const [selectedProcessor, setProcessor] = React.useState(processorList[0]);
  const [selectedMemory, setMemory] = React.useState(memoryList[0]);
  const [selectedGraphics, setGraphics] = React.useState(graphicsList[0]);
  const [selectedStorage, setStorage] = React.useState(storageList[0]);

  return (
    <ContainerView>
      <ColumnContainer>
        <Column>
          <MacbookImage src={logo} />
        </Column>
      </ColumnContainer>
      <ColumnContainer>
        <Column>

          <TitleLabel>Customise your 16‑inch MacBook Pro - Space Grey</TitleLabel>

          <DescriptionWrapper>
            <DescriptionLabel>
              {selectedProcessor.displayText}
            </DescriptionLabel>
            <DescriptionLabel>
              {selectedMemory.displayText}
            </DescriptionLabel>
            <DescriptionLabel>
              {selectedGraphics.displayText}
            </DescriptionLabel>
            <DescriptionLabel>
              {selectedStorage.displayText}
            </DescriptionLabel>
            <DescriptionLabel>
              {selectedDisplay}
            </DescriptionLabel>
            <DescriptionLabel>
              {selectedKeyboard}
            </DescriptionLabel>

            <ConfigurationTitle>Processor</ConfigurationTitle>
            <ConfigurationTitle>Memory</ConfigurationTitle>
            <ConfigurationTitle>Graphics</ConfigurationTitle>
            <ConfigurationTitle>Storage</ConfigurationTitle>
          </DescriptionWrapper>
        </Column>
      </ColumnContainer>
    </ContainerView>
  );
}