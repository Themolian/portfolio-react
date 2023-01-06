import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/global/Header'

const SiteRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}></Route>
        </Routes>
      </BrowserRouter>
    )
}

  export default SiteRouter