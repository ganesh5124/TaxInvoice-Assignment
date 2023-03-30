import { Fragment, lazy } from 'react';
import './App.css';
import Test from './Components/Practice/test';
// import Stateup from './Components/Practice/Stateup';
// import InvoicePageOne from './Components/TaxInvoicePageOne/InvoicePageOne';
// import InvoicePageTwo from './Components/TaxInvoicePageTwo/InvoicePageTwo';
const StateupComponent = lazy(() => import('./Components/Practice/Stateup'))
function App() {
  return (
    <Fragment >
      <div className='app__primary'>
       <StateupComponent/>
      </div>
        {/* <InvoicePageOne/>
        <InvoicePageTwo/> */}
        <Test/>
    </Fragment>
  );
}

export default App;
