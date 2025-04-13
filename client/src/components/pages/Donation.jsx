import React, { useState } from "react";
import { useParams } from "react-router-dom";

const DonatePage = () => {
  const { id } = useParams();
  const [amount, setAmount] = useState("");

  const handlePayment = async () => {
    const res = await fetch("http://localhost:3000/api/payment/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: Number(amount) * 100 }), // Razorpay uses paisa
    });

    const data = await res.json();

    const options = {
      key: "rzp_test_NYVES9dBF6XouV",
      amount: data.amount,
      currency: "INR",
      name: "NGO Interconnect",
      description: "Donation",
      order_id: data.id,
      handler: async function (response) {
        // verify and update campaign
        await fetch("http://localhost:3000/api/payment/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(response),
        });

        alert("Payment Successful!");
        // You can redirect or show thank you message
      },
      theme: {
        color: "#1c64f2",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
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
