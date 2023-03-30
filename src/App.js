import { Fragment, lazy } from 'react';
import './App.css';
import Test from './Components/Practice/test';
// import Stateup from './Components/Practice/Stateup';
import InvoicePageTwo from './Components/TaxInvoicePageTwo/InvoicePageTwo';
const InvoicePageOneComponent = lazy(() => import('./Components/TaxInvoicePageOne/InvoicePageOne'))
function App() {
  return (
    <Fragment >
        <InvoicePageOneComponent/>
        <InvoicePageTwo/>
        <Test/>
    </Fragment>
  );
}


export default App;
