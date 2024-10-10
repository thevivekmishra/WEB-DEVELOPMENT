import './Company.css'
function Company(props){
    // const company = "Mahindra";
    // const country = "India";

    const company = props.cmp;
    const country = props.country;
    
    return(
        <div className="company">
            <h2>{company}</h2>
            <h2>{country}</h2>
        </div>
    )
}
export default Company