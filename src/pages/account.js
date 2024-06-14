import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AccountSite() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      const token = await user.getIdToken();
      fetch("https://api.sure-briefing.com/user/delivery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email }),
      })
        .then((response) => response.json())
        .then((data) => {
          setMessage("Email submitted successfully.");
        })
        .catch((error) => {
          setMessage("Error submitting email.");
          console.error("Error submitting email", error);
        });
    } else {
      setMessage("User not authenticated.");
      console.error("User not authenticated");
    }
  };

  const handleSubscribe = async () => {
    if (user) {
      const token = await user.getIdToken();
      fetch("https://api.sure-briefing.com/user/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setMessage("Subscribed successfully.");
        })
        .catch((error) => {
          setMessage("Error subscribing.");
          console.error("Error subscribing", error);
        });
    } else {
      setMessage("User not authenticated.");
      console.error("User not authenticated");
    }
  };

  const handleUnsubscribe = async () => {
    if (user) {
      const token = await user.getIdToken();
      fetch("https://api.sure-briefing.com/user/unsubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setMessage("Unsubscribed successfully.");
        })
        .catch((error) => {
          setMessage("Error unsubscribing.");
          console.error("Error unsubscribing", error);
        });
    } else {
      setMessage("User not authenticated.");
      console.error("User not authenticated");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8 px-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-3xl p-8">
        {message && (
          <div className="mb-4 p-4 border rounded text-center" role="alert">
            {message}
          </div>
        )}
        <form onSubmit={handleFormSubmit} className="mb-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Delivery E-Mail
            </label>
            <p className="text-gray-600 text-sm mb-2">
              This address will be used to deliver your daily briefing. By adding it, you agree that it will be associated with your account.
            </p>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Set Delivery E-Mail
            </button>
          </div>
        </form>
        <p className="text-gray-600 text-sm mb-6">
          After creating your account and setting the delivery email, you are automatically subscribed to the daily briefing. 
          You can use the buttons below to stop receiving the daily briefing or reactivate it.
        </p>
        <div className="flex justify-between">
          <button
            onClick={handleSubscribe}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Subscribe
          </button>
          <button
            onClick={handleUnsubscribe}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Unsubscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountSite;