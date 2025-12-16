function Profile(props){
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Role: {props.work}</p>
    </div>
  )
}

export default Profile