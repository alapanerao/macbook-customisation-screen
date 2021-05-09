import styled from 'styled-components'

export const Container = styled.div`
    border: ${props => props.selected ? "2px solid #0070c9" : "1px solid #d6d6d6"};
    border-radius: 4px;
    padding: .64706rem .82353rem;
    min-height: 4.88235rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    &:hover {
        ${props => props.selected ? "2px solid #0070c9" : "border: 1px solid #aaa"};
    }
`;

export const Label = styled.div`
    width: 60%;
    font-weight: 600;
    text-align: left;
`;

export const PriceLabel = styled.div`
    width: 34%;
    text-align: right;
`;