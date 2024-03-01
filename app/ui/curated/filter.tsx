import React from "react";

type Props = {};

export default function Filter({}: Props) {
  return (
    <div className="max-w-3xl w-full flex gap-4 items-center justify-center \">
      <div>
        <p>
          <span className="font-medium">Category:</span> Movies
        </p>
      </div>
      <div>
        <label htmlFor="pet-select" className="p-2 font-medium">
          Subcategories:
        </label>
        <select id="pet-select" className="bg-gray-50 rounded text-sm">
          <option value="All">All</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div>
        <fieldset className="flex gap-2">
          <label htmlFor="show" className="font-medium">
            Show:
          </label>
          <label htmlFor="All">
            <input type="radio" id="All" name="viewType" />
            All
          </label>
          <label htmlFor="onlylistitems">
            <input type="radio" id="list" name="viewType" />
            List
          </label>
          <label htmlFor="onlytext">
            <input type="radio" id="onlytext" name="viewType" />
            Text
          </label>
        </fieldset>
      </div>
      <p>
        <span className="font-medium">Rating:</span> 🖊🖊🖊🖊🖊
      </p>
    </div>
  );
}
