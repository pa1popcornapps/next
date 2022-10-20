import { useState } from "react";
import dynamic from 'next/dynamic';

export default function EmployeeDetails({ flow }) {
  const [state, setState] = useState({
    name: "",
    age: ""
  })
  const handleSubmission = async () => {
    const res = await fetch("https://api-generator.retool.com/QqdBas/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    });

    const data = await res.json();
    console.log(data) // { message: "success" }
  }
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }
  return (
    <div className="container">
      <div className='row row-cols-1 color-page' style={{ backgroundColor: "blue" }}>
        <div className="col-12">
          <p><h5>Id:- {flow.id}</h5></p>
        </div>
        <div className="col-12">
          <p><h5>Name :- {flow.name}</h5></p>
        </div>
        <div className="col-12">
          <p><h5>Name :- {flow.age}</h5></p>
        </div>
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
            Hit Route
          </button>
        </form>

      </div>
    </div>
  )
}
export async function getStaticPaths() {
  // loop through the colors array
  const colors = await fetch(`https://api-generator.retool.com/QqdBas/data`).then(res => res.json())
  const paths = colors.map(flow => ({
    // return an object with params.color set to the color's name
    params: { employeeDetails: flow.name }
  }))

  // Paths will look like this:
  // [
  //   { params: { color: 'Marsala' } },
  //   { params: { color: 'Illuminating'} }
  //   ...
  // ]
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // find the info for just one color
  const flows = await fetch(`https://api-generator.retool.com/QqdBas/data`).then(res => res.json())
  const flow = flows.find(flow => flow.name === params.employeeDetails)
  // return it in the necessary format.
  return { props: { flow } }
}