import { useRouter } from "next/router";
import { useState } from "react";

export default function EmployeeDetails({ empData }) {
    const router = useRouter()

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
    const initial=0
    const [balance, setBalance] = useState()
    const [deposit, setDeposit] = useState(initial)
    const [withdraw, setWithdraw] = useState(initial)

    const handleSubmission = async (e) => {
        e.preventDefault();
        const res = await fetch("https://api-generator.retool.com/4dcBri/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(state)
        });

        const data = await res.json();
        if (data.id > 0) {
            console.log(data) // { message: "success" }
            router.push(`/component/documentation/atm-project/${data.name}`);
        }
    }
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    function handleWithdraw(evt) {
        const value = evt.target.value;
        setWithdraw(value);
        const b = Number(empData.balance) - Number(withdraw)
        console.log( Number(empData.balance)-Number(withdraw))
        setBalance(b)

    }

    function handleDeposit(evt) {
        const value = evt.target.value;
        setDeposit(value);
        const b = Number(empData.balance) + Number(deposit)
        console.log(Number(empData.balance) + Number(deposit))
        setBalance(b)
    }
    return (
        <div className="container p-5">
            <div className='row row-cols-1 p-2 color-page' style={{ backgroundColor: "blue" }}>
                <h5>Transaction </h5>
                <h5>Current Balance : {empData.balance}</h5>
                <div className="col-12">
                    <p><b>Id:- {empData.id}</b></p>
                </div>
                <div className="col-12">
                    <p><b>Name :- {empData.name}</b></p>
                </div>
                <div className="col-12">
                    <p><b>Name :- {empData.age}</b></p>
                </div>
                <form>
                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            value={empData.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Age
                        <input
                            type="text"
                            name="age"
                            value={empData.age}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        User Id
                        <input
                            type="text"
                            name="userId"
                            value={empData.userId}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Balance
                        <input
                            type="text"
                            name="balance"
                            value={balance}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Withdraw
                        <input
                            type="text"
                            name="withdraw"
                            onChange={handleWithdraw}
                        />
                    </label>
                    <label>
                        Deposit
                        <input
                            type="text"
                            name="deposit"
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
    return { props: { empData } }

}