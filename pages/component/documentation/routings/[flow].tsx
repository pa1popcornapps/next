
export default function Color({ flow }) {
  return <div className='color-page' style={{ backgroundColor: "blue" }}>
    <div className="">
      <p><h5>Id:- {flow.id}</h5></p>
    </div>
    <div className="">
      <p><h5>Name :- {flow.name}</h5></p>
    </div>
  </div>
}
export async function getStaticPaths() {
  // loop through the colors array
  const colors = await fetch(`https://api-generator.retool.com/QqdBas/data`).then(res => res.json())
  const paths = colors.map(flow => ({
    // return an object with params.color set to the color's name
    params: { flow: flow.name }
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
  const flow = flows.find(flow => flow.name === params.flow)
  // return it in the necessary format.
  return { props: { flow } }
}