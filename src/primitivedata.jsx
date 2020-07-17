import React,{Component} from 'react';

export class Primitive extends Component
{
    //this is primitive data properties
    firstName= 'Alvin';
    age = 23;
    height= 5.10;
    isPermanentEmployee = true;

    //this is primitive data array. ES7 -- Provides a Function --map which will loop through array
    technologies = ['React','Angular','Node','MongoDB','Azure','PowerBI'];
    favNumbers =[10,20,30,40,50];
    example = ['MeatBalls','Clams','Shrimp','Sauce'];

    //this is a JSON object
    employeeDetails = {
        empNo:101,
        empName:'Nik',
        empDesignation:'Sales',
        empSalary:25000,
        empCity:'Mumbai',
        empContact:{
            email:'nik@somewhere.com',
            tel:'022253',
            mobile:986536565,
              location:{
                 latitude:80.90,
                 longitude:986.23
            }
        }
    }
    accountDetails={
        accountNum: 101,
        holder: 'Alvin Tang',
        balance: 200,

    }
    employeeArray = [
        {
            empNo: 100,
            empName: "A",
            empDesignation: "Sales",
            empSalary: 30000
        },
        {
            empNo: 101,
            empName: "B",
            empDesignation: "Sales",
            empSalary: 30000
        },
        {
            empNo: 102,
            empName: "C",
            empDesignation: "Sales",
            empSalary: 30000
        },
        {
            empNo: 103,
            empName: "D",
            empDesignation: "Sales",
            empSalary: 30000
        },
        {
            empNo: 104,
            empName: "E",
            empDesignation: "Sales",
            empSalary: 30000
        },
        {
            empNo: 105,
            empName: "F",
            empDesignation: "Sales",
            empSalary: 30000
        },
        {
            empNo: 106,
            empName: "G",
            empDesignation: "Sales",
            empSalary: 30000
        },
        {
            empNo: 107,
            empName: "H",
            empDesignation: "Sales",
            empSalary: 30000
        },
        {
            empNo: 108,
            empName: "I",
            empDesignation: "Sales",
            empSalary: 30000
        },
        {
            empNo: 109,
            empName: "J",
            empDesignation: "Sales",
            empSalary: 30000
        }
    ]



    render(){
        return(
            <div>
                <h1>Primitive Data</h1>
                <h1>First Name: {this.firstName}</h1>
                <h1>Age: {this.age}</h1>
                <h1>Height: {this.height}</h1>
                <h1>Is Permanent Employee: {this.isPermanentEmployee}</h1>
                <hr/>
                <h1>Primitive Array</h1>

                <ul>
                    {this.technologies.map((t,i)=><li>{t}</li>)}
                </ul>
                <ul>
                    {this.favNumbers.map((n,i)=><li>{n+22}</li>)}
                </ul>
                <ul>
                    {this.example.map((item,i)=><li>Spaghetti & {item}</li>)}
                </ul>
                <h1>Employee Details for Employee Number: {this.employeeDetails.empNo}</h1>
                <h4>Name : {this.employeeDetails.empName}</h4>
                <h1>Designation: {this.employeeDetails.empDesignation}</h1>
                <h1>Account Num: {this.accountDetails.accountNum}</h1>
                <h1>Account Balance: {this.accountDetails.balance}</h1>
                <h1>Account Bonus : {this.accountDetails.balance*2}</h1>
                <h1>Account Interest: {this.accountDetails.balance*.05}</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Employee Number</th>
                            <th>Employee Name</th>
                            <th>Employee Designation</th>
                            <th>Employee Salary</th>
                            <th colSpan="3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.employeeArray.map((employee) => {
                            return <tr>
                                <td>{employee.empNo}</td>
                                <td>{employee.empName}</td>
                                <td>{employee.empDesignation}</td>
                                <td>{employee.empSalary}</td>
                                <td><button className="btn btn-primary">Add</button></td>
                                <td><button className="btn btn-warning">Delete</button></td>
                                <td><button className="btn btn-danger">Update</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>


            </div>
        )
    }
}

export default Primitive