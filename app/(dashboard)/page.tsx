"use client";

import { useState } from "react";
import Card from "../ui/dashboard/card";
import CategoryBar from "../ui/dashboard/categorybar";
import { curations } from "@/app/lib/placeholder-data";
import { topics } from "@/app/lib/placeholder-data";

export default function Page() {
  const [selectedTopic, setSelectedTopic] = useState("All");

  //remove once data is being fetched.
  let filteredCurations =
    selectedTopic != "All"
      ? curations.filter(
          (curation) =>
            curation.topic.toLowerCase() === selectedTopic.toLowerCase(),
        )
      : curations;

  return (
    <main>
      {/* TODO: Change key in category bar */}
      <div className="flex gap-3 overflow-clip h-10  mt-1">
        {topics.map((topic, i) => {
          return (
            <CategoryBar
              key={i}
              selectedTopic={selectedTopic}
              setSelectedTopic={setSelectedTopic}
            >
              {topic}
            </CategoryBar>
          );
        })}
      </div>
      <div className="grid grid-cols-2 mt-7 md:grid-cols-5 md:auto-cols-max gap-y-10 overflow-hidden ">
        {filteredCurations.map((curation) => {
          return (
            <Card
              key={curation.id}
              id={curation.id}
              title={curation.title}
              author={curation.author}
              image={curation.image}
              description={curation.description}
              rating={curation.rating}
              category={curation.category}
              views={curation.views}
              date={curation.date}
              list={curation.list}
            />
          );
        })}
      </div>
    </main>
  );
}
