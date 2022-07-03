import useFetch from "../../hooks/useFetch";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading, please wait..."
      ) : (
        <>
          <div className="featuredItem">
            <img src="" alt="Featured Image" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Dublin</h1>
              <h2>123 properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
