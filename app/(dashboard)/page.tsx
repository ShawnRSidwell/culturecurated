import Card from "../ui/dashboard/card";
import CategoryBar from "../ui/dashboard/categorybar";

export default function Page() {
  return (
    <main>
      <div className="p-3">
        <CategoryBar />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 md:auto-cols-max gap-y-12 overflow-hidden">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
