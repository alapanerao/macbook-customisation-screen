import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, PriceLabel } from './OptionCard.styles';

const OptionCards = ({ cardData, selected, onCardClick, selectedOption, ...restProps }) => {
  const selectedOptionIndex = cardData.findIndex(item => item.id === selectedOption.id);
  return (
    <>
      {
        cardData.map((item, index) =>
          <Container
            key={item.id}
            onClick={() => onCardClick(item)}
            selected={index === selectedOptionIndex}
            data-testid={item.id}
          >
            <Label data-testid={"card-label-" + item.id}>{item.displayText}</Label>
            {
              Number(item.additionalCost) > 0 && index < selectedOptionIndex &&
              <PriceLabel data-testid={"card-price-label-" + item.id}>
                - ₹ {selectedOption.additionalCost - item.additionalCost}
              </PriceLabel>
            }
            {
              Number(item.additionalCost) > 0 && index > selectedOptionIndex &&
              <PriceLabel data-testid={"card-price-label-" + item.id}>
                + ₹ {item.additionalCost}
              </PriceLabel>
            }
            {
              Number(item.additionalCost) === 0 && selectedOptionIndex > 0 &&
              <PriceLabel data-testid={"card-price-label-" + item.id}>
                - ₹ {selectedOption.additionalCost}
              </PriceLabel>
            }
          </Container>
        )
      }
    </>
  );
};

OptionCards.propTypes = {
  /** Data of Card */
  cardData: PropTypes.array,

  selected: PropTypes.bool,

  onCardClick: PropTypes.func,

  selectedOption: PropTypes.object
};

OptionCards.defaultProps = {
  cardData: {},
  selected: false,
  onCardClick: () => { },
  selectedOption: {}
};

export default OptionCards;
