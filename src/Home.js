
import React, { useState } from 'react';
import {Modal,Button,Tabs} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import "./Home.css";


function Home(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let [username,setUserName] = useState("");
    let [expenseName,setExpenseName] = useState("");
    let [expenseEntryDate,setExpenseEntryDate] = useState("");
    let [paymentMethod,setPaymentMethod] = useState("");
    let [currency,setCurrency] = useState("");
    let [expensePurpose,setExpensePurpose] = useState("");
    let [expenseReimburse,setExpenseReimburse] = useState("");
    let [expenseNetAmount,setExpenseNetAmount] = useState("");
    let [expenseTaxZone,setExpenseTaxZone] = useState("");
    let [expenseTax,setExpenseTax] = useState("");
    let [expenseAmount,setExpenseAmount] = useState("");

    let userSubmit = async ()=>{
        await fetch("https://607432b1066e7e0017e794b3.mockapi.io/weekly",{
            method:"POST",
            body: JSON.stringify({
                "username":username,
                "expense_Name":expenseName,
                "Expense_Entry_Date":expenseEntryDate,
                "payment_Method":paymentMethod,
                "currency":currency,
                "Purpose":expensePurpose,
                "Reimburse":expenseReimburse,
                "NetAmount":expenseNetAmount,
                "TaxZone":expenseTaxZone,
                "Tax":expenseTax,
                "Amount":expenseAmount
            }),
            headers:{
                "Content-type":"application/json"
            }
        })
        handleClose();
    }

    
    return<>
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="hero-container" data-aos="fade-in">  
        <Button variant="primary" onClick={handleShow}>
        Add Income And Expenditure
      </Button>

        <form>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                <Modal.Title>Add Expense Entry</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs defaultActiveKey="Expense" id="uncontrolled-tab-example">
                        <Tab eventKey="Income" title="Income">
                        <h1>Income</h1>
                        </Tab>

                        <Tab eventKey="Expense" title="Expense">                        
                            <div className="row mt-4">
                                <div className="col-12">
                                    <label>Name</label>
                                    <input type="text" className="form-control" value={username} onChange={(e)=>setUserName(e.target.value)}></input>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-4">
                                    <label>Expense Name</label>
                                    <select class="custom-select" value={expenseName} onChange={(e)=>setExpenseName(e.target.value)}>
                                        <option selected>select expense name</option>
                                        <option value="fuel">fuel</option>
                                        <option value="movie">movie</option>
                                        <option value="food">food</option>
                                        <option value="loan">loan</option>
                                        <option value="medical ">medical </option>
                                        <option value="hotel">hotel</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <label>Payment Method</label>
                                    <select class="custom-select" value={paymentMethod} onChange={(e)=>setPaymentMethod(e.target.value)}>
                                        <option selected>None</option>
                                        <option value="American Express">American Express</option>
                                        <option value="Cash">Cash</option>
                                        <option value="Master Card">Master Card</option>
                                        <option value="Visa">Visa</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <label>Currency</label>
                                    <select class="custom-select" value={currency} onChange={(e)=>setCurrency(e.target.value)}>
                                        <option selected>Select type</option>
                                        <option value="AUD">AUD</option>
                                        <option value="CAD">CAD</option>
                                        <option value="CHF">CHF</option>
                                        <option value="EUR">EUR</option>                                    
                                        <option value="GBR">GBR</option>
                                        <option value="INR">INR</option>
                                        <option value="JPY">JPY</option>
                                    </select>
                                </div>                            
                            </div>
                            <div className="row mt-3">
                                <div className="col-4">
                                    <label>Expense Entry Date</label>
                                    <input type="date" className="form-control" value={expenseEntryDate} onChange={(e)=>setExpenseEntryDate(e.target.value)}></input>
                                </div>
                                <div className="col-4">
                                    <label>Purpose</label>
                                    <select class="custom-select" value={expensePurpose} onChange={(e)=>setExpensePurpose(e.target.value)}>
                                        <option selected>Select pursose</option>
                                        <option value="Office">Office</option>
                                        <option value="Personal">Personal</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                <label>Reimburse</label>
                                    <select class="custom-select" value={expenseReimburse} onChange={(e)=>setExpenseReimburse(e.target.value)}>
                                        <option selected>Select</option>
                                        <option value="yes">yes</option>
                                        <option value="no">no</option>
                                    </select>
                                </div>       
                            </div> 
                            <div className="row mt-3 mb-4">
                                <div className="col-6">
                                    <label>Net Amount</label>
                                    <input type="number" className="form-control" value={expenseNetAmount} onChange={(e)=>setExpenseNetAmount(e.target.value)} ></input>
                                </div>
                                <div className="col-6">
                                    <label>Tax Zone</label>
                                    <select class="custom-select" value={expenseTaxZone} onChange={(e)=>setExpenseTaxZone(e.target.value)}>
                                        <option selected>Select</option>
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <label>Tax </label>
                                    <input type="number" className="form-control" value={expenseTax} onChange={(e)=>setExpenseTax(e.target.value)}></input>
                                </div>
                                <div className="col-6">
                                    <label>Amount </label>
                                    <input type="number" className="form-control" value={expenseAmount} onChange={(e)=>setExpenseAmount(e.target.value)}></input>
                                </div>
                            </div>
                        </Tab>

                        <Tab eventKey="Description" title="Description">
                        <div className="row mt-3 mb-3">
                            <div className="col-12">
                                <label>Description</label><br/>
                                <textarea className="form-control" rows="6" style={{width:"100%"}}></textarea>
                            </div>
                        </div>
                        </Tab>
                        
                        <Tab eventKey="attachment" title="Attachment" disabled>
                        <h1>Attachment</h1>
                        </Tab>
                    </Tabs>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="success" type="submit" onClick={()=>userSubmit()}>
                    Add Expense Entry
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>          
                </Modal.Footer>
            </Modal>  
        </form>
    
    </div>
  </section>
    </>;
}
export default Home;