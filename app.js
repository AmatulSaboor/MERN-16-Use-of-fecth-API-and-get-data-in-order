import fetch from 'node-fetch';

/**
 * This is a function to get PKR against 1 USD
 */
async function getPkrCurrency() {
  const response = await fetch('https://v6.exchangerate-api.com/v6/a26dfb8fb257dff5cdb33a9d/latest/USD');
  const data = await response.json();
  console.log(data['conversion_rates']['PKR']);
}
getPkrCurrency();


/**
 * This is a function to list all the currencies with their
 * values against 1 USD in descending order
 */
async function getCurrenciesInDescending() {
  const response = await fetch('https://v6.exchangerate-api.com/v6/a26dfb8fb257dff5cdb33a9d/latest/USD');
  const data = await response.json();
  const conversionRates = data['conversion_rates'];
  const sorted = Object.entries(conversionRates).sort((a, b) => {
    return b[1] - a[1];
  });
  console.log(sorted);
}
getCurrenciesInDescending();

