import React, {useState} from 'react';
import '../css/App.css';
import { fetchNui } from "../utils/fetchNui";
import { useNuiEvent } from "../hooks/useNuiEvent";
import { setTranslations } from '../utils/translation';
import { Inventory } from './inventory/inventory';


const App: React.FC = () => {
    useNuiEvent<any>('setTranslations', (data: any) => {
        console.log("Translations received");
        setTranslations(data);
    });

    return (
        <div className="App">
            <Inventory />
        </div>
    );
  
}

export default App;

