import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from 'axios';

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjgyMWZhZmY5ZGNiNjZjNGYxNDY1OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNjg3NDQyNiwiZXhwIjoxNjI3MzA2NDI2fQ.T-fMiAUj53yP5vk_9lvz5C8ZzTu3_CeCf8GL84iwOUA"
            }
          }
        );
        setLists(res.data);
      } catch (error) {
          console.log(error);
      }
    };
    getRandomLists();
  },[type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list}/>
      ))}
    </div>
  );
};

export default Home;