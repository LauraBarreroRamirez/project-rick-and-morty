function Tarjeta ({info}){

    console.log(info)

    return (
        <div className="card">
            <div className="card-body">
                <div className="">
                    <img className="card-img-top" src={info.image} alt="" />
                </div>
                <h4 className="card-header">{info.name}</h4>
                <p className="">{info.gender}</p>
                <p>{info.species}</p>
            </div>
        </div>
    )
} 

export default Tarjeta