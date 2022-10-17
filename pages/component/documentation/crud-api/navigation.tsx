import Link from "next/link";
function About() {
  return (
    <div>
      <div className="container main-container">
      <Link href="/">
        <a>Back To Home</a>
      </Link>
      <Link href="employeeList">
        <a>Employee List</a>
      </Link>
      <Link href="editEmployee">
        <a>Employee Details</a>
      </Link>
      </div>
    </div>
  )
}
export default About;