import { FaRegHeart } from "react-icons/fa";
import image from "../assets/breakingnews.jpeg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ position: "relative", maxWidth: "345px" }}
    >
      <div>
        <img
          src={src ? src : image}
          style={{ height: "200px", width: "320px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">
            {description
              ? description.slice(0, 90)
              : "Its inmforamtion something happened"}
          </p>
          <a href={url} className="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
      <div style={{ top: "10px", right: "10px", position: "absolute" }}>
        <FaRegHeart
          size={32}
          cursor="pointer"
          onClick={() => {
            const items = window.localStorage.getItem("favourites");
            const newItem = { title, description, src, url };
            let newItems = [newItem];
            if (items) {
              newItems = [...newItems, JSON.parse(items)];
            }
            window.localStorage.setItem("favourites", newItems);
          }}
        />
      </div>
    </div>
  );
};

export default NewsItem;
