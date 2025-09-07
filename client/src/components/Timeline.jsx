import React from "react";
import { Briefcase, Book } from "lucide-react";

function Timeline({ items }) {
  return (
    <div className="relative border-l-2 border-green-600 ml-4 pl-6 space-y-8">
      {items.map((item, index) => (
        <div key={index} className="relative group">
          {/* Timeline Dot */}
          <div className="absolute -left-4 top-0 w-8 h-8 flex items-center justify-center">
            <div className="w-4 h-4 bg-green-600 rounded-full group-hover:bg-green-800 transition" />
            <div className="absolute text-green-600 group-hover:text-green-800">
              {item.school ? <Book size={16} /> : <Briefcase size={16} />}
            </div>
          </div>

          {/* Content */}
          <div className="pl-4">
            <h3 className="font-bold text-green-700 text-lg">
              {item.school || item.company}
            </h3>
            <p className="text-green-900 font-medium">
              {item.degree || item.role}
            </p>
            <span className="text-green-500 text-sm">{item.timeframe}</span>
            {item.description && (
              <p className="text-green-500 text-sm mt-1">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
