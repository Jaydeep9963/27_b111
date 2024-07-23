import { useState } from "react";

function ItemList({ items, setItems }) {
  const [showDetails, setShowDetails] = useState({});
  const [sortOrder, setSortOrder] = useState("asc"); // Default to ascending

  const toggleDetails = (itemId) => {
    setShowDetails((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const handleSort = (field) => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);

    // Perform sorting logic here
    const sortedItems = [...items].sort((a, b) => {
      if (a[field] < b[field]) {
        return sortOrder === "asc" ? -1 : 1;
      } else if (a[field] > b[field]) {
        return sortOrder === "asc" ? 1 : -1;
      } else {
        return 0;
      }
    });

    // Update the items state with the sorted array
    setItems(sortedItems);
  };

  return (
    <div>
      {/* Add sorting buttons here, e.g., for sorting by title, summary, etc. */}
      <button onClick={() => handleSort("title")}>
        Sort by Title ({sortOrder === "asc" ? "Ascending" : "Descending"})
      </button>
      <button onClick={() => handleSort("summary")}>
        Sort by Summary ({sortOrder === "asc" ? "Ascending" : "Descending"})
      </button>

      <ul className="item-list">
        {items.map((item) => (
          <li key={item.id} className="item">
            <button
              onClick={() => toggleDetails(item.id)}
              className="item-button"
            >
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
            </button>
            {showDetails[item.id] && (
              <div className="details">
                <p>{item.fullDescription}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;