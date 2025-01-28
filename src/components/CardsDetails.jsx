import React from 'react'

function CardsDetails() {
  return (
    <>
      <div className="container mt-2">
        <h2 className='text-center'>Items Details page</h2>
        <section className='container mt-3'>
          <div className="iteamsdetails">
            <div className="items_img">
              <img src="https://b.zmtcdn.com/data/pictures/chains/5/110225/3978e28854b7496dbef9496546734811_o2_featured_v2.jpg" alt="" />
            </div>

            <div className="details">
             <div className="table">
                 <tr>
                   <td>
                     <p> <strong>Restaurant</strong> : Massala Theoryy</p>
                     <p> <strong>Price</strong> : 300</p>
                     <p> <strong>Dishes</strong> : North Indian, Biryani ,Mughlai</p>
                     <p> Total : ₹ 350</p>
                   </td>
                   <td>
                     <p> <strong>Rating</strong> : <span style={{ backgroundColor: "green",color:"#fff",padding:"2px 5px",borderRadius:"5px" }}>3.8 ★</span></p>
                     <p> <strong>Order Review</strong> : 1175 + order placed from here recently</p>
                     <p> <strong>Remove</strong> : <i className="fas fa-trash" style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i> </p>
                    
                   </td>
                 
                 </tr>
             </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default CardsDetails