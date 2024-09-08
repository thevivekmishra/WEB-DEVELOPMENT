import './Car.css'
function CarName(props){
    // const carname = "Thar"
    const carname = props.name
    return (
        <div className="carname">
            <h2 >{carname}</h2>
            {props.children}
        </div>
    )
}
export default CarName