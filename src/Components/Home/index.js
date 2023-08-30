import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import ListData from '../Lists'
import { CircularProgress } from "@mui/material";
import GitHubLogo from "../logo";
import './index.css';


const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState("");
  const [loading, setLoading] = useState(false);

  const priorDate = moment().subtract(30, "days").format("YYYY-MM-DD");

  const loadRepositories = () => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=created:>${priorDate}&sort=stars&order=desc&page=${page}`
      )
      .then((res) => {
        setData((prevData) => [...prevData, ...res.data.items]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadRepositories();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrolledToBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if (scrolledToBottom && !loading) {
      setPage((prevPage) => prevPage + 1);
      setLoading(true);
    }
  };

  return (
    <>
      <div className="container">
        <GitHubLogo/>
        <h1 className="head">GitHub Repos</h1>
        <ListData data={data} />
        {loading && (
          <div style={{ textAlign: "center" }}>
            <CircularProgress style={{ color: "#36D7B7" }} size={60} />
          </div>
        )}
        <div className="pagination">
          <button
            className="page-button"
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <p className="page-number">Page {page}</p>
          <button
            className="page-button"
            onClick={() => setPage((prevPage) => prevPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
