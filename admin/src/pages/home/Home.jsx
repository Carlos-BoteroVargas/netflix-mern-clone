import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

export default function Home() {
  const MONTHS = useMemo(
    () =>  [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], 
    []
  );

  const [ userStats, setUserStats ] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get('/users/stats', {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjgyMWZhZmY5ZGNiNjZjNGYxNDY1OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNjg3NDQyNiwiZXhwIjoxNjI3MzA2NDI2fQ.T-fMiAUj53yP5vk_9lvz5C8ZzTu3_CeCf8GL84iwOUA"
            },
        });
        const statsList = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        statsList.map((item) => 
          setUserStats(prev => [
            ...prev,{name: MONTHS[item._id-1], "New User": item.total },
          ])
        );
      } catch (error) {
          console.log(error);
      }
    };
    getStats();
  }, [MONTHS]); 
 
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
