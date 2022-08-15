import { useSelector } from "react-redux/es/exports";
const User = () => {
  const users = useSelector((state) => state.api.data);

  return (
    <div>
      {users.map((user, index) => (
        <>
          <div key={index}>
            {`${user.name.first} ${user.name.last} | ${user.login.username} | ${user.location.country}`}
          </div>
        </>
      ))}
    </div>
  );
};
export default User;
