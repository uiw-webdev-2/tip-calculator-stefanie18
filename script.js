/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */

 const formatter = (locale = "en-US", currency = "USD", value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value);
  
    return formattedValue;
  };
  const formatterTwo = (locale = "es-MX", currency = "MX", value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value);
  
    return formattedValue;
  };
  const formatterThree = (locale = "en-CAD", currency = "CAD", value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value);
  
    return formattedValue;
  };
  const formatterFour = (locale = "en-CZ", currency = "CZ", value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value);
  
    return formattedValue;
  };
  const formatterFive = (locale = "sv-SE", currency = "SE", value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value);
  
    return formattedValue;
  };

  
  const tipCalculator = (sum, percentage, locale, currency) => {
    let tip = sum * (percentage / 100);
    let total = sum + tip;
  
    console.log(`
      Sum before tip: ${formatter(locale, currency, sum)}
      Tip percentage: ${percentage}%
      Tip:            ${formatter(locale, currency, tip)}
      Total:          ${formatter(locale, currency, total)}
    `);
  };
  window.onload = () =>
  {
    document.querySelector('#tipCalculator').onclick = calculateTip;
  }

  //displaying the amount
  document.querySelector('.tip').style.display = 'block';
  document.querySelector('#total').innerHTML = total;
  
  tipCalculator(29.95, 18, "en", "USD");
  tipCalculator(29.95, 18, "es", "MXN");
  tipCalculator(29.95, 18, "en", "CAD");
  tipCalculator(29.95, 18, "cs", "CZ");
  tipCalculator(29.95, 18, "es", "MXN");