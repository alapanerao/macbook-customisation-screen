import { fireEvent, render, screen } from '@testing-library/react';
import {Home} from './index';

test('renders with default price of 239900', () => {
    render(<Home />)
    const inputNode = screen.getByTestId('final-price-label');
    expect(inputNode.textContent).toStrictEqual("From ₹22590.58/mo. with EMI OR ₹239900")
});

test('trigger onClick of variant b of Processor & check if it is Selected & it should update pricing and interests', () => {
    render(<Home />)
    const inputNode = screen.getByTestId('processor-2');
    fireEvent.click(inputNode)
    expect(inputNode.selected).toBeTruthy();
    const priceLabel = screen.getByTestId('final-price-label');
    expect(priceLabel.textContent).toStrictEqual("From ₹24473.92/mo. with EMI OR ₹259900")
});

test('trigger onClick of variant d of Storage & it should update price on card', () => {
    render(<Home />)
    const inputNode = screen.getByTestId('storage-4');
    fireEvent.click(inputNode)
    expect(inputNode.selected).toBeTruthy();
    const priceLabelA = screen.getByTestId('card-price-label-storage-1');
    expect(priceLabelA.textContent).toStrictEqual("- ₹ 220000")
});

test('test case 2 || b + C + C + a = 409900', () => {
    render(<Home />)
    const inputNode1 = screen.getByTestId('processor-2');
    fireEvent.click(inputNode1)
    const inputNode2 = screen.getByTestId('graphics-3');
    fireEvent.click(inputNode2)
    const inputNode3 = screen.getByTestId('memory-3');
    fireEvent.click(inputNode3)
    const inputNode4 = screen.getByTestId('storage-1');
    fireEvent.click(inputNode4)
    const priceLabel = screen.getByTestId('final-price-label');
    expect(priceLabel.textContent).toStrictEqual("From ₹38598.92/mo. with EMI OR ₹409900")
});

test('test case 2 || b + C + C + d = 409900', () => {
    render(<Home />)
    const inputNode1 = screen.getByTestId('processor-2');
    fireEvent.click(inputNode1)
    const inputNode2 = screen.getByTestId('graphics-3');
    fireEvent.click(inputNode2)
    const inputNode3 = screen.getByTestId('memory-3');
    fireEvent.click(inputNode3)
    const inputNode4 = screen.getByTestId('storage-4');
    fireEvent.click(inputNode4)
    const priceLabel = screen.getByTestId('final-price-label');
    expect(priceLabel.textContent).toStrictEqual("From ₹59315.58/mo. with EMI OR ₹629900")
});
