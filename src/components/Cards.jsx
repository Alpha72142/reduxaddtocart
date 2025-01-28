import React, { useState } from 'react'
import cardsData from './CardsData'
import "./style.scss"
import { useDispatch } from 'react-redux'
import { ADD } from '../redux/actions/action'

function Cards() {

  const [data, setData] = useState(cardsData);
  const dispatch = useDispatch();
  
  const send = (e) => {
    dispatch(ADD(e));
  }


  console.log(data)
  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Add to Cart Project</h2>

      <div className='row d-flex justify-content-center align-items-center'>
  
        {data.map((element, id) => {
          return (
            <div className="card border-0 mx-2 mt-4 card_style" style={{ width: "22rem" }}>
              <img src={element.imgdata} className="mt-3" alt="..." style={{ height: "16rem" }} />
              <div className="card-body">
                <h5 className="card-title">{element.rname}</h5>
                <p className="card-text">Price : ₹ {element.price}</p>
                <div className='button_div -flex justify-content-center'>
                <a href="#btn" className="btn btn-primary col-lg-12" onClick={() => send(element)}>Add to Cart</a>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Cards