import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
export default function EmployeeDetails({ empData, employeesData }) {
    console.log(employeesData)
    const initial = empData.balance
    const intg = ""
    const router = useRouter()
    const [mainList, setMainList] = useState([])

    const [state, setState] = useState({
        name: "",
        location: "",
        date: "",
        age: "",
        userId: "",
        balance: "",
        deposit: "",
        withdraw: "",
        accountNo: "",

    })
    const [balance, setBalance] = useState(initial)
    const [deposit, setDeposit] = useState(intg)
    const [withdraw, setWithdraw] = useState(intg)
    const [reqList, setReqList] = useState({
        id:"",
        name: "",
        location: "",
        date: "",
        age: "",
        userId: "",
        balance: "",
        deposit: "",
        withdraw: "",
        accountNo: "",

    })
 
    useEffect(() => {
        const arr = [];
        for (let i = 0; i < employeesData.length; i++) {
            if (empData.accountNo === employeesData[i].accountNo) {
                arr.push(employeesData[i])
            }
        }
        setReqList(arr[(arr.length - 1)])
    }, []);
    const handleSubmission = async (e) => {
        e.preventDefault();
        const datas = {
            age: empData.age, date: state.date, name: empData.name,
            mobile: empData.mobile, userId: empData.userId, balance: balance, deposit: deposit,
            location: state.location, withdraw: withdraw, accountNo: empData.accountNo
        }
        const res = await fetch("https://api-generator.retool.com/4dcBri/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datas)
        });

        const data = await res.json();
        if (data.id > 0) { // { message: "success" }
            router.push(`/component/documentation/atm-project/empList`);
        }
    }
    const handleChange = (evt) => {
        evt.persist();
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }
    const handleWithdraw = (evt) => {
        evt.persist();
        const value = evt.target.value;
        const b = Number(reqList.balance) - Number(value)
        setBalance(b)
        setWithdraw(value)
    }
    const handleDeposit = (evt) => {
        evt.persist();
        const value = evt.target.value;
        const b = Number(reqList.balance) + Number(value)
        setBalance(b)
        setDeposit(value)
    }
    return (
        <div className="container p-5">
            <div className='row row-cols-1 p-2 color-page' style={{ backgroundColor: "blue" }}>
                <h5>Transaction </h5>
                <h5>Current Balance : {reqList.balance}</h5>
                <div className="col-12">
                    <p><b>Id:- {reqList.id}</b></p>
                </div>
                <div className="col-12">
                    <p><b>Name :- {reqList.name}</b></p>
                </div>
                <div className="col-12">
                    <p><b>Age :- {reqList.age}</b></p>
                </div>
                <form>
                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            value={reqList.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Age
                        <input
                            type="text"
                            name="age"
                            value={reqList.age}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        User Id
                        <input
                            type="text"
                            name="userId"
                            value={reqList.userId}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Balance
                        <input
                            type="text"
                            name="balance"
                            value={reqList.balance}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Withdraw
                        <input
                            type="text"
                            name="withdraw"
                            value={withdraw}
                            onChange={handleWithdraw}
                        />
                    </label>
                    <label>
                        Deposit
                        <input
                            type="text"
                            name="deposit"
                            value={deposit}
                            onChange={handleDeposit}
                        />
                    </label>
                    <label>
                        Location
                        <input
                            type="text"
                            name="location"
                            value={state.location}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Date
                        <input
                            type="date"
                            name="date"
                            value={state.date}
                            onChange={handleChange}
                        />
                    </label>
                    <button onClick={handleSubmission}>
                        Edit Post
                    </button>
                </form>

            </div>
        </div>
    )
}
export async function getStaticPaths() {
    // loop through the employeesData array
    const employeesData = await fetch(`https://api-generator.retool.com/4dcBri/data`).then(res => res.json())
    const paths = employeesData.map(empData => ({
        // return an object with params.empData set to the employeesData's name
        params: { transaction: empData.name }
    }))

    // Paths will look like this:
    // [
    //   { params: { employeeDetails: 'Marsala' } },
    //   { params: { employeeDetails: 'Illuminating'} }
    //   ...
    // ]
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    // find the info for just one empData
    const employeesData = await fetch(`https://api-generator.retool.com/4dcBri/data`).then(res => res.json())
    const empData = employeesData.find(empData => empData.name === params.transaction)
    // return it in the necessary format.
    return { props: { empData, employeesData } }

}
