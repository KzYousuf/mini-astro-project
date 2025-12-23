import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      className="mt-4 px-4 py-2 bg-yellow-200 text-gray-900 rounded hover:bg-gray-100 transition"
      onClick={() => setCount(count + 1)}
    >
      Clicked {count} times
    </button>
  );
}
