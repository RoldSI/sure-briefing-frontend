import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AccountSite() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      const token = await user.getIdToken();
      fetch("https://sure-briefing-frontend-rv4heagjaa-ew.a.run.app/user/delivery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ 'email': email }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Email submitted successfully", data);
        })
        .catch((error) => {
          console.error("Error submitting email", error);
        });
    } else {
      console.error("User not authenticated");
    }
  };

  const handleSubscribe = async () => {
    if (user) {
      const token = await user.getIdToken();
      fetch("https://sure-briefing-frontend-rv4heagjaa-ew.a.run.app/user/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Subscribed successfully", data);
        })
        .catch((error) => {
          console.error("Error subscribing", error);
        });
    } else {
      console.error("User not authenticated");
    }
  };

  const handleUnsubscribe = async () => {
    if (user) {
      const token = await user.getIdToken();
      fetch("https://sure-briefing-frontend-rv4heagjaa-ew.a.run.app/user/unsubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Unsubscribed successfully", data);
        })
        .catch((error) => {
          console.error("Error unsubscribing", error);
        });
    } else {
      console.error("User not authenticated");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit Email
            </button>
          </div>
        </form>
        <div className="flex items-center justify-between">
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
