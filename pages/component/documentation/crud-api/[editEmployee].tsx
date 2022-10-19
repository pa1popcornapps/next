import React, { useState, useEffect } from 'react'
import axios from 'axios';
export default function Fl({ props,flow }) {

 
  const UpdateAccount = async(e) => {
    e.preventDefault();
    let res = await fetch("https://api-generator.retool.com/eK34lw/data"+flow.id, {
      method: "PUT",
      body: JSON.stringify({
      
      }),
    });
  };

  return(
  <div className='color-page' style={{ backgroundColor: "blue" }}>
    <div className="">
      <h5>{flow.id}</h5>
      <h5>{flow.name}</h5>
      <h5>{flow.salary}</h5>
    </div>
  </div>
  )
}
export async function getStaticPaths() {
  // loop through the colors array
  const colors = await fetch(`https://api-generator.retool.com/eK34lw/data`).then(res => res.json())
  const paths = colors.map(flow => ({
    // return an object with params.color set to the color's name
    params: { editEmployee: flow.name }
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
  const flows = await fetch(`https://api-generator.retool.com/eK34lw/data`).then(res => res.json())
  const flow = flows.find(flow => flow.name === params.editEmployee)
  // return it in the necessary format.
  return { props: { flow } }
}