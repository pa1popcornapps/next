import { useRouter } from "next/router";
import { useState } from "react";

export default function EmployeeDetails({ empData }) {
  const router = useRouter()

  const [state, setState] = useState({
    name: "",
    age: ""
  })
  const handleSubmission = async (e) => {
    e.preventDefault();
    const res = await fetch("https://api-generator.retool.com/QqdBas/data/"+empData.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    });

    const data = await res.json();
    if(data.id > 0) {
      console.log(data) // { message: "success" }
      router.push(`/component/documentation/crud-api/${data.name}`);
    }
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
      <div className='row row-cols-1 p-2 color-page' style={{ backgroundColor: "blue" }}>
        <h5>Edit Employee</h5>
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
            Edit Post
          </button>
        </form>

      </div>
    </div>
  )
}
export async function getStaticPaths() {
  // loop through the employeesData array
  const employeesData = await fetch(`https://api-generator.retool.com/QqdBas/data`).then(res => res.json())
  const paths = employeesData.map(empData => ({
    // return an object with params.empData set to the employeesData's name
    params: { employeeDetails: empData.name }
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
  const employeesData = await fetch(`https://api-generator.retool.com/QqdBas/data`).then(res => res.json())
  const empData = employeesData.find(empData => empData.name === params.employeeDetails)
  // return it in the necessary format.
  return { props: { empData } }

}