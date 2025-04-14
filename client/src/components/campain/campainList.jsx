import React, { useState } from "react";
import CampaignCard from "./RaiseCampaign";
const CampaignList = ({ ngos }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNgos = ngos.filter((ngo) =>
    ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ngo.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <input
        type="text"
        placeholder="Search NGOs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      {filteredNgos.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNgos.map((ngo) => (
            <CampaignCard key={ngo.id} ngo={ngo} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No NGOs found.</p>
      )}
    </div>
  );
};

export default CampaignList;
