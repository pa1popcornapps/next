import { useState } from "react";
import { useRouter } from "next/router";
export default function EmployeeDetails() {
  const router = useRouter()
  const [state, setState] = useState({
    name: "",
    age: ""
  })
  const handleSubmission = async (e) => {
    e.preventDefault();
    const res = await fetch("https://api-generator.retool.com/QqdBas/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    });

    const data = await res.json();
    router.push(`/component/documentation/crud-api/employeeList`);
  }
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }
  return (
    <div className="container p-5">
      <div className='row row-cols-1 p-2 color-page' style={{ backgroundColor: "blue",padding:"15px" }}>
        <h5>Create Employee</h5>
        <form>
          <label>
            First name
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Last name
            <input
              type="text"
              name="age"
              value={state.age}
              onChange={handleChange}
            />
          </label>
          <button onClick={handleSubmission}>
            Hit To Post
          </button>
        </form>

      </div>
    </div>
  )
}
