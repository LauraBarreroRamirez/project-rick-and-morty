function Tarjeta ({info}){

    return (
        <div className="card">
            <div className="card-body">
                <div className="">
                    <img className="card-img-top" src={info.image} alt="" />
                </div>
                    <h4 className="card-header">{info.name}</h4>
                    <p>{info.gender}</p>
                <div className="d-flex justify-content-between">
                    <p>{info.species}</p>
                    <button className="btn btn-primary my-4 mx-2">Buy</button>
                </div>
            </div>
        </div>
    )
} 

export default Tarjeta