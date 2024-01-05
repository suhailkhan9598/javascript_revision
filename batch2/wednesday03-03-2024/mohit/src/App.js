
import './App.css';
import useState, { useEffect } from "react"
import axios from "axios"
function App () {
  const [data, setData] = useState([])
  const getData = () => {
    try {
      let res = axios.get("https://fakestoreapi.com/products")
      console.log(res)
      // setData(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {

    getData()
  }, [])
  return (
    <div className="App">
<h1>home page</h1>
    </div>
  );
}

export default App;
