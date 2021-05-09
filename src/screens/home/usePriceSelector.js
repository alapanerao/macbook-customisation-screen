import { useState } from "react";

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

const usePriceSelector = () => {
    const [state, setState] = useState({
        selectedProcessor: processorList[0],
        selectedMemory: memoryList[0],
        selectedGraphics: graphicsList[0],
        selectedStorage: storageList[0],
        finalPrice: 239900
    });
    const onClickProcessor = (data) => {
        console.log("Processor Selected :: ", data);
        setState({ 
            ...state,
            selectedProcessor: data,
        });
    };
    const onClickMemory = (data) => {
        setState({ 
            ...state,
            selectedMemory: data
        });
    };
    const onClickGraphics = (data) => {
        setState({ 
            ...state,
            selectedGraphics: data
        });
    };
    const onClickStorage = (data) => {
        setState({ 
            ...state,
            selectedStorage: data
        });
    };
    return {
        onClickProcessor, onClickMemory, onClickGraphics, onClickStorage,
        processorList, memoryList, graphicsList, storageList, selectedDisplay, selectedKeyboard,
        state
    };
};

export default usePriceSelector;
