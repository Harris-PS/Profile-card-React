import PropTypes from 'prop-types'

function Profile({ name = "Guest", age = 0, children }){
  return (
    <div className="details">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      {children}
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
}


export default Profile