import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //Items in cart counter
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar count={count} />
    <Header />
    <Main count={count} setCount={setCount} />
    </>
  )
}

//navbar component
function NavBar({count}){
  return(
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">All products</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
              <button className="btn btn-primary cart-btn" type="button">
                {/* cart icon */}
                <span className='cart-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                  </svg>
                </span>
                {`Cart ${count}`}
              </button>
          </div>
        </div>
      </nav>
    </>
  )
}

function Header(){
  return (
    <>
      <div className="container-fluid bg-dark text-white header">
        <h1>Shop in style</h1>
        <p>With this shop hompeage template</p>
      </div>
    </>
  )
}

//card component
function Card({data, count, setCount}){
  //state handling add to cart button
  const [show, setShow] = useState(true);

  function addTOCart(){
    setShow(!show);
    //increasing the counter for items in cart
    setCount(count +1);
  }
  function removeFromCart(){
    setShow(!show);
    //decreasing the counter for items in cart
    setCount(count -1);
  }
  return (
    <>
      <div className="card">
        <div className="badge bg-dark text-white position-absolute sale-badge">Sale</div>
        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt={`${data.name} image`} />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          {data.rating != "" ? (<p className='card-text'>{data.rating}</p>) : (<></>)}
          <p className='card-text'>{`${data.price}`}</p>
        </div>
        {show ? (<a className="btn btn-primary card-btn" onClick={addTOCart}>Add to Cart</a>) : 
          (<a className="btn btn-primary card-btn" onClick={removeFromCart}>Remove from Cart</a>)}
      </div>
    </>
  )
}

function Main({count, setCount}){
  //product data
  const products = [
    {
        name : "Fancy Product",
        rating : "",
        price : "$80.00"
    },
    {
        name : "Special Item",
        rating : "⭐⭐⭐⭐⭐",
        price : "$20.00"
    },
    {
        name : "Sale Item",
        rating : "",
        price : "$25.00"
    },
    {
        name : "Popular Item",
        rating : "⭐⭐⭐⭐⭐",
        price : "$40.00"
    },
    {
        name : "Fancy Product",
        rating : "",
        price : "$280.00"
    },
    {
        name : "Special Item",
        rating : "⭐⭐⭐⭐⭐",
        price : "$25.00"
    },    
    {
        name : "Popular Item",
        rating : "⭐⭐⭐⭐⭐",
        price : "$40.00"
    },
    {
      name : "Fancy Product",
      rating : "",
      price : "$280.00"
    },
    {
      name : "Special Item",
      rating : "⭐⭐⭐⭐⭐",
      price : "$25.00"
    }    
]

  return (
    <>
      <div className="container text-center main">
        {products.map((value, index) => (
          <Card data={value} key={index} count={count} setCount={setCount} />
        ))}
      </div>
    </>
  )
}

export default App