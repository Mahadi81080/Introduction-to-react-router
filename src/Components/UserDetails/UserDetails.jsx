import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const navigate = useNavigate();
  const {userId}= useParams();
  const { name, website } = user;
  console.log(userId)
  const handleBack = () => {
    navigate(-1)
  };
  return (
    <div>
      <h2>Details about user : {user.id}</h2>
      <h4>User Name : {name}</h4>
      <p>Visite Us : {website}</p>
      <button onClick={handleBack}>Go Back</button>
    </div>
  );
};

export default UserDetails;
