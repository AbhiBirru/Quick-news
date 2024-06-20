import { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";

const PAGE_LIMIT = 10;

const NewsBoard = ({ category, searchKey }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=69215f10409f4210bcd29069ae5cbf5e&pageSize=10&page=${currentPage}`;
    if (searchKey.length > 0) {
      url = `https://newsapi.org/v2/top-headlines?q=${searchKey}&country=us&category=${category}&apiKey=69215f10409f4210bcd29069ae5cbf5e&pageSize=10&page=1`;
    }

    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setTotalCount(data.totalResults);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category, searchKey, currentPage]);

  const totalPages = Math.ceil(totalCount / PAGE_LIMIT);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 0",
        flexDirection: "column",
      }}
    >
      <div>
        <h2 className="text-center">
          Latest <span className="badge bg-danger">News</span>
        </h2>

        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "80vh",
              minWidth: "100%",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div class="spinner-border text-primary" role="status"></div>
            <h4>Loading...</h4>
          </div>
        )}

        {!loading &&
          articles?.map((news, index) => {
            return (
              <NewsItem
                key={index}
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            );
          })}
      </div>
      {!loading && totalCount > PAGE_LIMIT && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 0",
          }}
        >
          <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
