import { useMemo } from "react";
import SuccessImg from "../assets/images/success.png";
import useFetch from "../hooks/useFetch";
import Classes from "../styles/Summary.module.css";
function Summary({ userscore, noq }) {
  const getKeyword = useMemo(() => {
    if ((userscore / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((userscore / (noq * 5)) * 100 < 75) {
      return "Good";
    } else if ((userscore / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  }, [userscore, noq]);
  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXEL_API_KEY,
    }
  );

  const image = result ? result.photos[0].src.medium : SuccessImg;
  return (
    <div className={Classes.summary}>
      <div className={Classes.point}>
        <p className={Classes.score}>
          Your score is <br />
          {userscore} out of {noq * 5}
        </p>
      </div>
      {loading && <div className="{Classes.badge}">Loading Image ...</div>}
      {error && <div className="{Classes.badge}">Error Occured ...</div>}
      {!loading && !error && (
        <div className={Classes.badge}>
          <img src={image} alt="Success" />
        </div>
      )}
    </div>
  );
}

export default Summary;
