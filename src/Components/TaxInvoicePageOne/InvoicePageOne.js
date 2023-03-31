import React from 'react'
import './InvoicePageOne.css';
export default function InvoicePageOne() {
    return (
        <div className="App__invoice">
            {/* Header Part */}
            <div className='header'>
                <div className='right__txt'>
                    <h3>TAX INVOICE</h3>
                </div>
                <div className='left__txt'>
                    <h3>Original Copy</h3>
                    <p>This is computer generate invoice</p>
                </div>
            </div>

            {/* Table */}
            <div className='second__head'>

                <div >
                    <div className='invoice__secondary'>
                        <h1>GatikAI Technologies Pvt. Ltd.</h1>
                        <p>+91-8888888889</p>
                        <address>304, ARG shoppers Opp, Indian Oil Patrol<br />Pump, Road No.9 VIKA Jaipur,<br /> Rajasthan-302039</address>
                        <h2>GSTIN: 08ABCDE1234A1ZZ</h2>
                    </div>
                    <div className='secondary__right'>
                        <div className='display__flex'>
                            <p>Invoice No</p>
                            <h3>INV/JPR/1/FY23</h3>
                        </div>
                        <div className='display__flex'>
                            <p>Issue Date</p>
                            <h1>14/01/2023</h1>
                        </div>

                        <div className='display__flex'>
                            <p>Total Amount</p>
                            <h1>&#2352;5,90,565</h1>
                        </div>

                        <div className='display__flex'>
                            <p>Due Date</p>
                            <h1>24/01/2023</h1>
                        </div>

                        <div className='display__flex'>
                            <p>Buyer Order No.</p>
                            <h1>P/12/JPR/Fy23</h1>
                        </div>

                        <div className='display__flex'>
                            <p>Buyer Order Date</p>
                            <h1>05/01/2023</h1>
                        </div>

                        <div className='display__flex'>
                            <p>Dispatch No.</p>
                            <h1>2343469211231213</h1>
                        </div>

                        <div className='display__flex'>
                            <p>Dispatch Date</p>
                            <h1>14/01/2023</h1>
                        </div>

                        <div className='display__flex'>
                            <p>Dispatch through</p>
                            <h1>BlueDart</h1>
                        </div>

                        <div className='display__flex'>
                            <p>E-way Bill ref</p>
                            <h1>24/01/2023</h1>
                        </div>
                    </div>
                </div>
                {/* third row */}
                <div>
                    <div>
                        <h4>Billing Address</h4>
                        <h2>Gaurav Sharma</h2>
                        <h2>Divam Technologies</h2>
                        <p>0141-12312312</p>
                        <address>F35, Dwarika Tower, Vidhyadhar Nagar, Jaipur. <br /> Rajasthan-302039</address>
                        <h1>GSTIN-302039</h1>
                    </div>
                    <div>

                    </div>
                </div>


            </div>

        </div>
    )
}
