import { useState, useEffect } from "react"
import { Header } from "./components/headerComponents/Header/index.jsx"
import { ProductList } from "./components/productsComponents/ProductList/index.jsx"
import { api } from "../src/services/api.js"
import { Modal } from "./components/modalComponents/Modal/Modal.jsx"


function App() {

  const [shoppingCart, setShoppingCart] = useState([])
  const [list, setList] = useState([])
  const [listDefault, setListDefault] = useState([])
  const [modalStatus, setModalStatus] = useState(false)

  useEffect(() => {
    const request = async () => {
      const promise = await api.get()
      setListDefault(promise.data)
      console.log('listDefault:', listDefault)
      setList(promise.data)
    }
    request()
  }, [])



  return (
    <>
      <Header setModalStatus={setModalStatus} listDefault={listDefault} setList={setList} shoppingCart={shoppingCart} />
      <ProductList shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} list={list} setList={setList} />
      {modalStatus ? <Modal setModalStatus={setModalStatus} setShoppingCart={setShoppingCart} shoppingCart={shoppingCart} /> : null}
    </>
  )
}

export default App
