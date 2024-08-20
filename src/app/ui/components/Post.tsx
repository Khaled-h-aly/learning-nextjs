import React, { JSX } from "react";

export default function Component({ id, title, content, date }: { id: string; title: string; content: string; date: string }) {
  return (
      <div key={id} className="border border-gray-200 p-4 m-4">
      <h3>{title}</h3>
      <p className="text-gray-500">{date}</p>
      <p>{content}</p>
    </div>
  );
}