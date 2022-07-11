import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

type PropertyListInterface = {
  type: string
  count: number
}

const PropertyList = () => {
  // const { data, loading, error } = useFetch(
  //   "http://localhost:8000/api/v1/hotels/countByType?cities=berlin,madrid,london"
  // );
  const { data, loading, error } = useFetch(
    "http://localhost:8000/api/v1/hotels/countByType"
  );

  const images = [
    "https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
    "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
    "https://media.istockphoto.com/photos/tourist-woman-sitting-on-bed-nearly-window-looking-to-beautiful-view-picture-id1308530136?b=1&k=20&m=1308530136&s=170667a&w=0&h=_WCu7BvjDwT4UiEbzwAUr1TRzqY5Q9c7JXeMUjb4BI4=",
    "https://media.istockphoto.com/photos/triangular-modern-lake-house-at-fall-picture-id1327080125?b=1&k=20&m=1327080125&s=170667a&w=0&h=MElJJ3dR0Ng3J1ux-384q4K5JC9WNJjLv6d2ttrsZlw="
  ];

  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data && images.map((img,idx) => (<div className="pListItem" key={idx}>
            <img
              src={img}
              alt="Image"
              className="pListImg"
            />
            <div className="pListTitles">
              <h1> {data[idx].type} </h1>
              <h2>{data[idx].count} {data[idx].type} </h2>
            </div>
          </div>))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
