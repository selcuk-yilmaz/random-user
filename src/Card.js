import axios from "axios";
import { useState,useEffect } from "react";
import Single from "./Single";
import Loading from "./Loading";

const Card =  () => {
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(true);
  const url = "https://randomuser.me/api/";

  const pulls= async ()=>{
    try{
      const response = await axios.get(url);
       setLoading(false);
      //  console.log(response.data.results[0]);
       setInfo(response.data.results[0]);
       
    }catch (error){
      setLoading(false);

    }
  };
    useEffect(() => {
      pulls();
    }, []);

    if (loading) {
      return (
        <main>
          <Loading />
        </main>
      );
    }
  const handleClick=()=>{
    pulls()
  }  

  return (
    <div className="container ">
      <Single {...info} />
      <button className="btn btn-primary mb-5" onClick={handleClick}>Random User</button>
    </div>
  );
};

export default Card;
