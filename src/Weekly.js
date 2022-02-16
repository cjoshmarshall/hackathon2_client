import { useEffect, useState } from "react";
import "./style2.css"
function Weekly(){
    let [weeklyData,setWeeklyData]=useState([])
    useEffect(async ()=>{
        let output = await fetch("https://607432b1066e7e0017e794b3.mockapi.io/weekly");
        let userData = await output.json();               
        setWeeklyData([...userData]);
    },[]);
    return<>
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">WEEK WISE TABLE</h1>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>username</th>
                                    <th>expense_Name</th>
                                    <th>payment_Method</th>
                                    <th>currency</th>
                                    <th>Expense_Entry_Date</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                weeklyData.map((obj)=>{
                                    return<>
                                    <tr>
                                        <td>{obj.username}</td>
                                        <td>{obj.expense_Name}</td>
                                        <td>{obj.payment_Method}</td>
                                        <td>{obj.currency}</td>
                                        <td>{obj.Expense_Entry_Date}</td>
                                        <td>{obj.Amount}</td>
                                    </tr>
                                    </>;
                                })
                            }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>

    </>;
}
export default Weekly;