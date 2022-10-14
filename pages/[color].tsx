
export default function Color({ color }) {
    return <div className='color-page' style={{ backgroundColor: "red"}}>
      <h1>{color.name}</h1>
    </div>
  }
export async function getStaticPaths() {
  // loop through the colors array
  const colors= await fetch(`https://api-generator.retool.com/n63yab/data`).then(res => res.json())
  const paths = colors.map(color => ({
    // return an object with params.color set to the color's name
    params: { color:color.name }
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
    const colors= await fetch(`https://api-generator.retool.com/n63yab/data`).then(res => res.json())
    const color = colors.find(color => color.name === params.color)
    // return it in the necessary format.
    return { props: { color } }
  }