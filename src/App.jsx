import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './componentes/Navbar.jsx'
import ProductCard from './componentes/ProductCard.jsx'

function App() {
  const [count, setCount] = useState(0)
  const products = [
    { id: 1, title: 'laptop', price: 2000 },
    { id: 2, title: 'teclado', price: 100 },
    { id: 3, title: 'mouse', price: 50 },
    { id: 4, title: 'monitor', price: 500 },
    { id: 5, title: 'auriculares', price: 100 }
  ];

  const [cart, setCart] = useState([])
  const addToCart = (product) => { setCart([...cart, product]) }
  return (
    <>
  <Navbar/> 
  <section>
          
        <section>
          <h1>jhoan sebastian morales arias</h1>
          <h2>pirobo :D</h2>
          <h3>Cesde bogota</h3>
        </section>
    
    <button onClick={() => console.log(products)}>
      ver en la consola
      </button>
    <br />
    <button onClick={() =>{
      setproducts([
        ...products,
        { id: products.length + 1, title: 'nuevo producto', price: 500 },
      ])
    }}> 
    agregar producto
    </button>


    
  </section>
    <ProductCard title="laptop" price={2000}/>
    <ProductCard title="teclado" price={100}/>
    <ProductCard title="mouse" price={50}/>
    <ProductCard title="monitor" price={500}/>
    <ProductCard title="auriculares" price={100}/>
    <ProductCard onAdd={() => addToCart(products)} />

    {products.map(product => (
      <ProductCard
       key={product.id} 
      title={product.title} 
      price={product.price}
      />
    ))}
    </>
   
  )
}

export default App;
