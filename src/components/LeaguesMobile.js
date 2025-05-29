import React, { useEffect, useState } from 'react';
import { Accordion } from "react-bootstrap";
import axios from 'axios';
import Papa from 'papaparse';


const LeaguesMobile = () => {

    const [advMens, setAdvMens] = useState([]);
    const [advMixed, setAdvMixed] = useState([]);
    const [intMens, setIntMens] = useState([]);
    const [intMixed, setIntMixed] = useState([]);
    const [morningMixed, setMorningMixed] = useState([]);

    useEffect(() =>{
        fetchGoogleSheets();
    }, []);

    const fetchGoogleSheets = () => {
    const advMensSheets = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSZdSKxEE4cpe3oFMwZccwpqfFwtJE9YZJR-E0jnaqDPTVAERyqzRDcPvFBpa-44TrnJsTqP4hBgFs2/pub?output=csv';
    const advMixedSheets = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSov27PLqI1LbLGXUHbYQa273psiVxoY6A2_8bUhHo7xMr4nnXf2zR-Vmm2YmruE5OB5EudAhm0nnM3/pub?output=csv';
    const intMensSheets = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSK7fpqqKAPND-ucg-zLZ_soSdBJp0bBpSqcCmHtBSPNyzAj1QeyoyMGgizUb0wtebRjmVmD4bLDeTY/pub?output=csv';
    const intMixedSheets = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQR_7utALn_RPVJcwwfnRXBZ9k-155NilCORK4lxYsYZCyr09DtJjvWMmS5qnZZFaHfuZzc6uPmzzgO/pub?output=csv';
    const morningMixedSheets = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSWNBRxJr8MmoRBzvozKFVF3kTn-gXozGitat_Ot0P59A6HBNaNlfwDXDl70j13YF1Fg4tR7I6CuSMs/pub?output=csv';
    
    const key1 = "";

        axios.get(advMensSheets)
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);
                setAdvMens(parsedCsvData);
            })
            .catch((error) => {
                console.error('Error fetching Advanced Men\'s data:', error);
            });
        axios.get(advMixedSheets)
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);
                setAdvMixed(parsedCsvData);
            })
            .catch((error) => {
                console.error('Error fetching Advanced Mixed data:', error);
            });
        axios.get(intMensSheets)
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);
                setIntMens(parsedCsvData);
            })
            .catch((error) => {
                console.error('Error fetching Intermediate Men\'s data:', error);
            });
        axios.get(intMixedSheets)
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);
                setIntMixed(parsedCsvData);
            })
            .catch((error) => {
                console.error('Error fetching Intermediate Mixed data:', error);
            });
        axios.get(morningMixedSheets)
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);
                setMorningMixed(parsedCsvData);
            })
            .catch((error) => {
                console.error('Error fetching Morning Mixed data:', error);
            });
    }

    function parseCSV(csvText) {
        const results = Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true
        });
        return results.data;
    }

    return (
        <div>
            
        </div>
    );
}

export default LeaguesMobile;
