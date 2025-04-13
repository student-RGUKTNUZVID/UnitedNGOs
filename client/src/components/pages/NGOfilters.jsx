// NGOFilters.jsx
import React from "react";

const NGOFilters = ({ filters, setFilters, unique }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {/* State Filter */}
      <select
        className="p-2 border border-gray-300 rounded bg-white text-black"
        value={filters.state}
        onChange={(e) => setFilters({ ...filters, state: e.target.value })}
      >
        <option value="">All States</option>
        {unique("state").map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      {/* City Filter */}
      <select
        className="p-2 border border-gray-300 rounded bg-white text-black"
        value={filters.city}
        onChange={(e) => setFilters({ ...filters, city: e.target.value })}
      >
        <option value="">All Cities</option>
        {unique("city").map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* Theme Filter */}
      <select
        className="p-2 border border-gray-300 rounded bg-white text-black"
        value={filters.theme}
        onChange={(e) => setFilters({ ...filters, theme: e.target.value })}
      >
        <option value="">All Themes</option>
        {unique("theme").map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NGOFilters;
