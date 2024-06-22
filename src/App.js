import { Fragment, useEffect, useState } from "react";

const SERVICE_PROD = 'https://cs-api-p04v.onrender.com'
const SERVICE_DEV = 'http://localhost:5247'

function App() {
  const [state, setState] = useState()

  useEffect(() => {
    fetch(`${SERVICE_PROD}/api/stock`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setState(data))
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, [])


  console.log(state)

  return (
    <Fragment>
      <h1>test</h1>
      {state?.map(item => {
        const { companyName, industry, lastDiv, marketCap, purchase, symbol } = item
        return (
          <div>{companyName}, {industry}, {lastDiv}, {marketCap}, {purchase}, {symbol}</div>
        )
      })
      }
    </Fragment>
  );
}

export default App;
