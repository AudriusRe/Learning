import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
    const navigate = useNavigate()
    useEffect(() => {
        const timeout = setTimeout(() => {
            console.log("turetu numesti i home route");
            navigate("/home")
        }, 3000)

        return () => {
            clearTimeout(timeout)
        }
    }, [])

  return (
    <div>
        <h1>
        404 PAGE NOT FOUND
        </h1>
    </div>
  )
}
