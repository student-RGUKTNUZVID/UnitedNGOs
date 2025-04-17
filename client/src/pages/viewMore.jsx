import React from 'react';
import { useLocation } from 'react-router-dom';

const ViewMore = () => {
  const { state } = useLocation();
  const campaign = state?.ngo;

  if (!campaign) {
    return (
      <div className="p-10 text-center text-red-500">
        No campaign data available.
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white p-6 sm:p-10 mt-16">
        <h1 className="text-3xl font-bold text-green-700 mb-6">
          {campaign.title || "Untitled Campaign"}
        </h1>
      <div className="max-w-5xl mx-auto bg-green-50 rounded-2xl shadow-md p-8 flex gap-18">
        <div>
        {campaign.logo && (
            <div>
              <p className="font-semibold">Banner:</p>
              <img src={campaign.logo} alt="Campaign Banner" className="mt-2 rounded-lg w-full h-full object-cover" />
            </div>
          )}
          </div>
        <div className="space-y-4 text-green-900">
          <p className='text-2xl'><span className="font-semibold">NGO Name:</span> {campaign.name}</p>
          <p><span className="font-semibold">Description:</span> {campaign.description}</p>
          <p><span className="font-semibold">Location:</span> {campaign.city}, {campaign.state}</p>
          <p><span className="font-semibold">Start Date:</span> {campaign.startDate}</p>
          <p><span className="font-semibold">End Date:</span> {campaign.endDate}</p>
          <p><span className="font-semibold">Target Amount:</span> {campaign.targetAmount}</p>
          <p><span className="font-semibold">Target Impact:</span> {campaign.targetImpact}</p>
          <p><span className="font-semibold">collect Amount:</span> ₹{campaign.collectedAmount}</p>
          <p><span className="font-semibold">Agreed to Terms:</span> {campaign.agreedToTerms ? "Yes" : "No"}</p>

         

          {campaign?.document && (
            <div>
              <p className="font-semibold">Supporting Document:</p>
              <a
                href={campaign.document}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 underline"
              >
                View Document
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewMore;
