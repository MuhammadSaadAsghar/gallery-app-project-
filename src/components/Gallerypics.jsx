import React, { useEffect, useState } from "react";
import axios from "axios";

const Gallerypics = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const [loading, setLoading] = useState(false);

  const getdata = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );

    setUserData(response.data);
    console.log(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getdata();
  }, [index]);

  let printdata;
  if (loading) {
     printdata = (
    <h3 className="absolute top-1/2 text-2xl text-gray-500 left-1/2 -translate-y-1/2 -translate-x-1/2">
      Loading....
    </h3>
  );
  } else if(userData.length > 0){
     printdata = userData.map((elem) => {
      return (
        <div key={elem.id} className="">
          <a  href={elem.url} target="_blank" rel="noopener noreferrer" >
          <div className="h-44 w-52 bg-white overflow-hidden rounded-xl  ">
            <img
              className="h-full w-full object-cover"
              src={elem.download_url}
              
              alt=""
            />
          </div>

          <h3 className="text-xl font-bold text-white">{elem.author}</h3>
          </a>
        </div>
      );
    });
  } else {
    printdata = <h3>No Data Found</h3>;
  }





  return (
    <>
   
    </>
  );
};

export default Gallerypics;
