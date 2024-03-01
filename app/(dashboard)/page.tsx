import Card from "../ui/dashboard/card";
import CategoryBar from "../ui/dashboard/categorybar";
import { curations } from "@/app/lib/placeholder-data";

export default function Page() {
  return (
    <main>
      <CategoryBar />
      <div className="grid grid-cols-2 mt-7 md:grid-cols-5 md:auto-cols-max gap-y-10 overflow-hidden">
        {curations.map((curation) => {
          return (
            <Card
              key={curation.title}
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
