import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Feature } from "./Feature";
import type { CardProps } from "../Card";

function FeatureContainer() {
  const [data, setData] = useState<CardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://sistech-server.vercel.app/api/data'); 
        const jsonData = await res.json();

        const formattedData = jsonData.data.map((course: any) => ({
          banner: course.imgUrl,
          title: course.course,
          description: course.description,
          lecturers : course.lecturers,
          alt: course.course,
          topics: course.topics.map((topic: any) => ({
            topicId: topic.topicId,
            name: topic.name,
            content: topic.content,
          })),
        }));

        setData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return <Feature featureItems={data} />;
}


export default FeatureContainer ;