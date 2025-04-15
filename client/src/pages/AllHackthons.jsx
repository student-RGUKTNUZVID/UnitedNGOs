import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllHackathons = () => {
  const [hackathons, setHackathons] = useState([]);
  const [filteredHackathons, setFilteredHackathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const res = await axios.get('http://localhost:3000/getAllHackathons');
        if (Array.isArray(res?.data?.hackathons)) {
          setHackathons(res.data.hackathons);
          setFilteredHackathons(res.data.hackathons);
        } else {
          setError('Unexpected response format.');
        }
      } catch (err) {
        console.error('Error fetching hackathons:', err);
        setError('Failed to fetch hackathons. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchHackathons();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredHackathons(
      hackathons.filter((hackathon) =>
        hackathon.title.toLowerCase().includes(query)
      )
    );
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setFilteredHackathons(hackathons);
  };

  return (
    <div className="relative min-h-screen px-6 py-16 bg-white overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 -left-24 w-96 h-96 bg-green-100 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 -right-24 w-96 h-96 bg-green-200 rounded-full opacity-30 blur-2xl -z-10"></div>

      <h1 className="text-4xl font-extrabold text-center text-green-700 mb-10">All Hackathons</h1>

      <div className="max-w-md mx-auto mb-12 relative">
        <input
          type="text"
          placeholder="Search hackathons by title..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full px-6 py-3 border border-green-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
        />
        {searchQuery && (
          <button
            onClick={handleClearSearch}
            className="absolute right-2 top-1.5 bg-green-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-green-700 transition-all duration-300"
          >
            Clear
          </button>
        )}
      </div>

      {loading ? (
        <div className="text-center text-green-600 animate-pulse font-medium">Loading hackathons...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : filteredHackathons.length === 0 ? (
        <div className="text-center text-gray-500">No hackathons found.</div>
      ) : (
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredHackathons.map((hackathon) => (
            <div
              key={hackathon._id}
              className="bg-white shadow-lg hover:shadow-[0_10px_25px_-5px_rgba(34,197,94,0.5)] border border-green-100 rounded-3xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
            >
              <img
                src={hackathon.image?.trim() || '/default-hackathon.jpg'}
                alt={hackathon.title}
                className="w-full h-48 object-cover rounded-t-3xl"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold text-green-800 mb-2">{hackathon.title}</h2>
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(hackathon.startDate).toLocaleDateString()} –{' '}
                  {new Date(hackathon.endDate).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">{hackathon.description}</p>

                <div className="flex justify-between items-center mb-4 text-xs text-gray-600">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full capitalize font-medium">
                    {hackathon.status}
                  </span>
                  <span className="text-gray-700 font-medium">{hackathon.location}</span>
                </div>

                <a
                  href={`/hackathon/${hackathon._id}`}
                  className="block w-full text-center bg-green-600 text-white font-semibold py-2.5 rounded-full hover:bg-green-700 transition-all duration-300"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllHackathons;
