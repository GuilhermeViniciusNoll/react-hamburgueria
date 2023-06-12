import { useState, useEffect } from "react"
import { Header } from "./components/headerComponents/Header/index.jsx"
import { ProductList } from "./components/productsComponents/ProductList/index.jsx"
import { api } from "../src/services/api.js"
import { Modal } from "./components/modalComponents/Modal/index.jsx"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./styles/globalStyle.js"
import { ResetStyle } from "./styles/resetStyle.js"


function App() {

  const [shoppingCart, setShoppingCart] = useState([])
  const [list, setList] = useState([])
  const [listDefault, setListDefault] = useState([])
  const [modalStatus, setModalStatus] = useState(false)

  useEffect(() => {
    const request = async () => {
      const promise = await api.get()
      setListDefault(promise.data)

      setList(promise.data)
    }
    request()
  }, [])


  return (
    <>
      <GlobalStyle />
      <ResetStyle />
      <Header setModalStatus={setModalStatus} listDefault={listDefault} setList={setList} shoppingCart={shoppingCart} />
      <ProductList shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} list={list} setList={setList} />
      {modalStatus ? <Modal setModalStatus={setModalStatus} setShoppingCart={setShoppingCart} shoppingCart={shoppingCart} /> : null}
      <ToastContainer />
    </>
  )
}

export default App
