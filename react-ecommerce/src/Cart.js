import React from 'react'

function Cart(props) {
    var total = 0;

    props.data.map((product) => {
        return (
            total = total + product.data.price
        )
    })

    
    return (
        <div className="row" style={{ margin:"auto" }}>
            {
                props.data.map((cartItem) => {
                    return (
                        <div className="col-sm-4" key={cartItem.data.id}>
                            <div className="card" style={{ margin: "auto" }}>
                                <div className="card-body">
                                <img style={{height:'400px'}} src={cartItem.data.image} alt={cartItem.data.name} />
                                    <h5 className="card-title">{cartItem.data.name}</h5>
                                    <p className="card-text">&#8377;{cartItem.data.price}/-</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div>
                <div className="jumbotron" >
                    <h1 className="display-4">Total cost of the items:{total}</h1>

                    <button className="btn btn-primary" >Make Payment</button>
            
            </div>
        </div>
        </div >
    )
}

export default Cart