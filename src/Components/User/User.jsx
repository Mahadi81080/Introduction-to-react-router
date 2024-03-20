import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
const User = ({user}) => {
    const {id,name,email,phone}=user
    const navigate = useNavigate()
    const userStyle ={
        border : '2px solid yellow',
        padding : '10px',
        borderRadius : "20px",
        marginBottom : "5px"
    }
    const handleDetail =()=>{
        navigate(`/user/${id}`);
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link> <br />
            <button onClick={handleDetail}>Show Detail</button>
        </div>
    );
};
User.propTypes ={
    user:PropTypes.object
}
export default User;