import useFetch from "../../hooks/useFetch";
import './featured.css'

const Featured = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8000/api/v1/hotels/countByCity?cities=Lagos,Accra,Abuja"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading, please wait..."
      ) : (
        <>
          <div className="featuredItem">
            <img src="https://media.istockphoto.com/photos/guest-bedroom-with-a-queen-sized-bed-and-nightstand-at-a-short-term-picture-id1336925615?b=1&k=20&m=1336925615&s=170667a&w=0&h=Kj0woErKXcYjj1L0z1yddfPvHbkc11CoN5f1dVdKx60=" alt="Featured Image" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Lagos</h1>
              <h2> { data[0] } properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img src="https://media.istockphoto.com/photos/guest-bedroom-with-a-queen-sized-bed-and-nightstand-at-a-short-term-picture-id1336925615?b=1&k=20&m=1336925615&s=170667a&w=0&h=Kj0woErKXcYjj1L0z1yddfPvHbkc11CoN5f1dVdKx60=" alt="Featured Image" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Accra</h1>
              <h2> {data[1]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img src="https://media.istockphoto.com/photos/guest-bedroom-with-a-queen-sized-bed-and-nightstand-at-a-short-term-picture-id1336925615?b=1&k=20&m=1336925615&s=170667a&w=0&h=Kj0woErKXcYjj1L0z1yddfPvHbkc11CoN5f1dVdKx60=" alt="Featured Image" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Abuja</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
