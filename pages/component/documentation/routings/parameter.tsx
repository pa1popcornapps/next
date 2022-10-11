import { useRouter } from "next/router"

export default function Parameter() {
  const router = useRouter()
  const {
    query: { id },
  } = router
  return <div><h5>About us: {id}</h5></div>
}