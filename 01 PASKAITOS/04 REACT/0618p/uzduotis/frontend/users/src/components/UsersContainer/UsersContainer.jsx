import User from "../User/User"

export default function UsersContainer({ users }) {
    // console.log(users);
  return (
    <div>
        {
            users.map((user) =>
            <User key={user.id} user={user}/>
          )
        }
    </div>
  );
}
