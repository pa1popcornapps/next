
import axios from 'axios';
import { useState, useEffect } from 'react'
export default function EmployeeList({ flow }) {
  const [name, setName] = useState('');
  const submitForm = async (e) => {
    e.preventDefault();
    const res = await fetch('https://api-generator.retool.com/4dcBri/data', {
      method: 'POST',
      body: JSON.stringify({ name }),
    });
  };
  return <div className='color-page' style={{ backgroundColor: "blue" }}>
    <div className="">
      <p><h5>Id:- {flow.id}</h5></p>
    </div>
    <div className="">
      <p><h5>Name :- {flow.name}</h5></p>
    </div>
    <form onSubmit={submitForm}>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="John Doe"
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />
      <button type="submit">
        Submit
      </button>
    </form>
  </div>
}
export async function getStaticPaths() {
  // loop through the colors array
  const colors = await fetch(`https://api-generator.retool.com/4dcBri/data`).then(res => res.json())
  const paths = colors.map(flow => ({
    // return an object with params.color set to the color's name
    params: { employeeList: flow.name }
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
  const flows = await fetch(`https://api-generator.retool.com/4dcBri/data`).then(res => res.json())
  const flow = flows.find(flow => flow.name === params.employeeList)
  // return it in the necessary format.
  return { props: { flow } }
}