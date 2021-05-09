import React from "react";
import logo from '../../assets/mbp.jpeg';
import '../../App.css';
import OptionCards from "../../components/OptionCard";
import {
  ContainerView, ColumnContainer, Column, MacbookImage, TitleLabel, DescriptionWrapper, DescriptionLabel,
  ConfigurationTitle, FooterWrapper, PriceLabel
} from './home.styles';
import usePriceSelector from "./usePriceSelector";

export const Home = () => {

  const {
    onClickProcessor, onClickMemory, onClickGraphics, onClickStorage,
    processorList, memoryList, graphicsList, storageList, selectedDisplay, selectedKeyboard,
    state
  } = usePriceSelector();
  const { selectedProcessor, selectedMemory, selectedGraphics, selectedStorage, finalPrice } = state;

  return (
    <>
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
                onCardClick={(selectedOption) => onClickProcessor(selectedOption)} />

              <ConfigurationTitle>Memory</ConfigurationTitle>
              <OptionCards
                cardData={memoryList}
                selectedOption={selectedMemory}
                onCardClick={(selectedOption) => onClickMemory(selectedOption)} />

              <ConfigurationTitle>Graphics</ConfigurationTitle>
              <OptionCards
                cardData={graphicsList}
                selectedOption={selectedGraphics}
                onCardClick={(selectedOption) => onClickGraphics(selectedOption)} />

              <ConfigurationTitle>Storage</ConfigurationTitle>
              <OptionCards
                cardData={storageList}
                selectedOption={selectedStorage}
                onCardClick={(selectedOption) => onClickStorage(selectedOption)} />

            </DescriptionWrapper>
          </Column>
        </ColumnContainer>
      </ContainerView>
      <FooterWrapper>
        <PriceLabel>
          {finalPrice}
        </PriceLabel>
      </FooterWrapper>
    </>
  );
}