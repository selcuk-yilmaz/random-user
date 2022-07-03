import emailsvg from "./assets/email.svg";
import locationsvg from "./assets/location.svg";
import phonesvg from "./assets/phone.svg";
const Single = ({ name, email, phone, location, picture, dob, registered }) => {
  return (
    <div className="main">
      <div className="card name">
        <img src={picture.medium} className="card-img-top " alt="..." />
        <h1>
          {name.title} {name.first} {name.last}
        </h1>
      </div>
      <div className="card email">
        <img src={emailsvg} style={{ width: 50 }} alt="" />
        <h4>{email}</h4>
      </div>
      <div className="card phone">
        <img src={phonesvg} style={{ width: 50 }} alt="" />
        <h4>{phone}</h4>
      </div>
      <div className="card location">
        <img src={locationsvg} style={{ width: 50 }} alt="" />
        <h4>
          {location.state} {location.country}
        </h4>
      </div>
      <h5>{dob.age}</h5>
      <h5>{registered.date.slice(0, 10)}</h5>
    </div>
  );
};

export default Single;
