import react from "react";
import listdata from "../../public/list.json";
import Card from "../components/Card"

export default function Coures() {
  const list = listdata.filter((item) => item.category === "Free");
  console.log(list);
  return (
    <>
      <div className="p-10 bg-slate-100">
        <div>
          <h1>ALL BROWSER COURES</h1>
        </div>
        <div className="grid grid-cols-4 gap-7 rounded-md">
            {listdata.map((item) =>(
                <Card item={item} key={item.id}></Card>
            ))}
        </div>
      </div>
    </>
  );
}
