import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ADD, DLT, RMV } from '../redux/actions/action';


function CardsDetails() {
  const { id } = useParams();
  const history = useNavigate();

  const [data, setData] = useState([]);
  console.log(data);

  const getdata = useSelector(state => state.cartreducer.carts);
  const dispatch = useDispatch();

  const compare = () => {
    const comparedata = getdata.filter((e) => {
      return e.id === Number(id)
    });
    setData(comparedata);
  }

  useEffect(() => {
    compare();
  }, [id])

const send = (e) => {
    dispatch(ADD(e));
  }

const dlt = (id) => {
        dispatch(DLT(id));
        history('/');
    }

//remove one item
const remove = (item) => {
  dispatch(RMV(item));
}
  return (
    <>
      <div className="container mt-2">
        <h2 className='text-center'>Items Details page</h2>
        <section className='container mt-3'>
          <div className="iteamsdetails">
            {
              data.map((ele,id) => {
                return (
                  <div key={id} style={{display:"contents"}}>
                    <div className="items_img m-2 ">
                      <img src={ele.imgdata} alt="" />
                    </div>

                    <div className="details">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className='border-0'>
                              <p> <strong>Restaurant</strong> : {ele.rname}</p>
                              <p> <strong>Price</strong> : ₹ {ele.price}</p>
                              <p> <strong>Dishes</strong> : {ele.address}</p>
                              <p> Total : ₹ {ele.price * ele.qnty}</p>
                              <div className='mt-5 d-flex justify-content-center align-items-center' style={{ width : 100, cursor : "pointer",background:"#ddd", color: "#111" }}>
                               <span className='m-2 w-100 d-flex justify-content-around align-items-center' style={{ fontSize: 24 }} onClick={ele.qnty <= 1 ? () => dlt(ele.id) : () => remove(ele)}>-</span>
                               <span className='m-2 w-100 d-flex justify-content-center align-items-center' style={{ fontSize: 24 }}>{ele.qnty}</span>
                               <span className='m-2 w-100 d-flex justify-content-center align-items-center' style={{ fontSize: 24 }} onClick={() => send(ele)}>+</span>
                              </div>
                            </td>
                            <td className='border-0'>
                              <p> <strong>Rating</strong> : <span style={{ backgroundColor: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating} ★</span></p>
                              <p> <strong>Order Review</strong> : {ele.somedata}</p>
                              <p> <strong>Remove</strong> : <i className="fas fa-trash" style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(ele.id)}></i> </p>

                            </td>

                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )})
              }
           
          </div>
        </section>
      </div>
    </>
  )
}

export default CardsDetails