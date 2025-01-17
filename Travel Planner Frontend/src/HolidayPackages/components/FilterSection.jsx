import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

const FilterSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search destinations..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">Duration</option>
            <option value="3-5">3-5 days</option>
            <option value="6-10">6-10 days</option>
            <option value="10+">10+ days</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">Price Range</option>
            <option value="0-1000">$0 - $1000</option>
            <option value="1001-2000">$1001 - $2000</option>
            <option value="2001+">$2001+</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <SlidersHorizontal className="w-5 h-5" />
            <span>More Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;