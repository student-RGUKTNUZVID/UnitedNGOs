import React, { useState } from "react";
import { useParams } from "react-router-dom";
const DonatePage = () => {
  const { id } = useParams();
  const [amount, setAmount] = useState("");
  const handlePayment = async () => {
    // Basic validation
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      alert("Please enter a valid donation amount");
      return;
    }
    try {
      // Step 1: Create Razorpay order
      const res = await fetch("https://unitedngos-1.onrender.com/api/payment/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: Number(amount) * 100 }), // amount in paisa
      });

      const data = await res.json();

      // Step 2: Razorpay options
      const options = {
        key: "rzp_test_NYVES9dBF6XouV",
        amount: data.amount,
        currency: "INR",
        name: "UNited NGOs",
        description: "Donation",
        order_id: data.id,
        handler: async function (response) {
          // Step 3: Verify the payment
          const verifyRes = await fetch("https://unitedngos-1.onrender.com/api/payment/verify", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(response),
          });

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            // Step 4: Update campaign's collected amount
            await fetch(`https://unitedngos-1.onrender.com/donate-to-campaigns/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ donation: Number(amount) }),
            });

            alert("Payment Successful! Thank you for your donation.");
            // Optional: Redirect or show thank you message
            // window.location.href = `/campaigns/${id}/thank-you`;
          } else {
            alert("Payment verification failed.");
          }
        },
        theme: {
          color: "#1c64f2",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Donate to Campaign {id}</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount in ₹"
        className="border p-2 rounded w-full mb-4"
      />
      <button
        onClick={handlePayment}
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full"
      >
        Proceed to Pay
      </button>
    </div>
  );
};

export default DonatePage;
