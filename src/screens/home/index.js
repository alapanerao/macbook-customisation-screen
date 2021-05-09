import React from "react";
import logo from '../../assets/mbp.jpeg';
import '../../App.css';
import OptionCards from "../../components/OptionCard";
import {
  ContainerView, ColumnContainer, Column, MacbookImage, TitleLabel, DescriptionWrapper, DescriptionLabel,
  ConfigurationTitle
} from './home.styles';

export const Home = () => {

  const processorList = [{
    id: "processor-1",
    displayText: "2.3GHz 8-core 9th-generation Intel Core i9 processor, Turbo Boost up to 4.8GHz",
    additionalCost: 0
  }, {
    id: "processor-2",
    displayText: "2.4GHz 8-core 9th-generation Intel Core i9 processor, Turbo Boost up to 5.0GHz",
    additionalCost: 20000
  }];

  const memoryList = [{
    id: "memory-1",
    displayText: "16GB 2666MHz DDR4 memory",
    additionalCost: 0
  }, {
    id: "memory-2",
    displayText: "32GB 2666MHz DDR4 memory",
    additionalCost: 40000
  }, {
    id: "memory-3",
    displayText: "64GB 2666MHz DDR4 memory",
    additionalCost: 80000
  }]

  const graphicsList = [{
    id: "graphics-1",
    displayText: "AMD Radeon Pro 5500M with 4GB of GDDR6 memory",
    additionalCost: 0
  }, {
    id: "graphics-2",
    displayText: "AMD Radeon Pro 5500M with 8GB of GDDR6 memory",
    additionalCost: 10000
  }, {
    id: "graphics-3",
    displayText: "AMD Radeon Pro 5600M with 8GB of HBM2 memory",
    additionalCost: 70000
  }]

  const storageList = [{
    id: "storage-1",
    displayText: "1TB SSD storage",
    additionalCost: 0
  }, {
    id: "storage-2",
    displayText: "2TB SSD storage",
    additionalCost: 40000
  }, {
    id: "storage-3",
    displayText: "4TB SSD storage",
    additionalCost: 100000
  }, {
    id: "storage-4",
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
            <OptionCards 
              cardData={processorList}
              selectedOption={selectedProcessor}
              onCardClick={(selectedOption) => setProcessor(selectedOption)} />

            <ConfigurationTitle>Memory</ConfigurationTitle>
            <OptionCards 
              cardData={memoryList}
              selectedOption={selectedMemory}
              onCardClick={(selectedOption) => setMemory(selectedOption)} />

            <ConfigurationTitle>Graphics</ConfigurationTitle>
            <OptionCards 
              cardData={graphicsList}
              selectedOption={selectedGraphics}
              onCardClick={(selectedOption) => setGraphics(selectedOption)} />

            <ConfigurationTitle>Storage</ConfigurationTitle>
            <OptionCards 
              cardData={storageList}
              selectedOption={selectedStorage}
              onCardClick={(selectedOption) => setStorage(selectedOption)} />

          </DescriptionWrapper>
        </Column>
      </ColumnContainer>
    </ContainerView>
  );
}