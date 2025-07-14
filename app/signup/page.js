"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [step, setStep] = useState("buyer"); // 'buyer' | 'transition' | 'seller'
  const [buyerForm, setBuyerForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
  });
  const [sellerForm, setSellerForm] = useState({
    instagram: "",
    facebook: "",
    twitter: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const router = useRouter();

  const handleBuyerChange = (e) => {
    setBuyerForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSellerChange = (e) => {
    setSellerForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBuyerSubmit = (e) => {
    e.preventDefault();
    console.log("Buyer signup:", buyerForm);
    setStep("transition"); // Move to transition view
    setBuyerForm({
      name: "",
      email: "",
      password: "",
      phone: "",
      dob: "",
    });
  };

  const handleSellerSubmit = (e) => {
    e.preventDefault();
    console.log("Seller signup:", sellerForm);
    setShowPopup(true);
    setSellerForm({
      instagram: "",
      facebook: "",
      twitter: "",
    });
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setIsRedirecting(true);
        router.push("/");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup, router]);

  const closePopupManually = () => {
    setIsRedirecting(true);
    router.push("/");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-lg bg-white shadow text-black relative">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {step === "buyer" && "Buyer Signup"}
        {step === "seller" && "Seller Signup"}
      </h2>

      {/* Buyer Signup */}
      {step === "buyer" && (
        <form onSubmit={handleBuyerSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={buyerForm.name}
            onChange={handleBuyerChange}
            placeholder="Full Name"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            value={buyerForm.email}
            onChange={handleBuyerChange}
            placeholder="Email Address"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            name="password"
            value={buyerForm.password}
            onChange={handleBuyerChange}
            placeholder="Password"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="tel"
            name="phone"
            value={buyerForm.phone}
            onChange={handleBuyerChange}
            placeholder="Phone Number"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="date"
            name="dob"
            value={buyerForm.dob}
            onChange={handleBuyerChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 cursor-pointer text-white p-2 rounded hover:bg-blue-700"
          >
            Sign Up as Buyer
          </button>
        </form>
      )}

      {/* Transition Screen */}
      {step === "transition" && (
        <div className="text-center space-y-4  p-8 relative">
          {/* ✖ Close button */}
          <button
            onClick={closePopupManually}
            className="absolute cursor-pointer top-0 right-0 bg-red-800 hover:bg-red-500 text-white text-2xl px-2"
            title="Skip seller signup"
          >
            &times;
          </button>

          <p className="text-lg font-medium text-green-700">
            🎉 Buyer registration successful!
          </p>
          <p className="text-gray-700">Want to sell products too?</p>
          <button
            onClick={() => setStep("seller")}
            className="bg-purple-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Start Seller Signup
          </button>
        </div>
      )}

      {/* Seller Signup Form */}
      {step === "seller" && (
        <form onSubmit={handleSellerSubmit} className="space-y-4">
          <input
            type="url"
            name="instagram"
            value={sellerForm.instagram}
            onChange={handleSellerChange}
            placeholder="Instagram Profile Link"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="url"
            name="facebook"
            value={sellerForm.facebook}
            onChange={handleSellerChange}
            placeholder="Facebook Profile Link"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="url"
            name="twitter"
            value={sellerForm.twitter}
            onChange={handleSellerChange}
            placeholder="Twitter Profile Link"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full cursor-pointer bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            Submit Seller Info
          </button>
        </form>
      )}

      {/* ✅ Confirmation Popup */}
      {showPopup && (
        <div className="fixed top-[120px] left-0 right-0 bottom-0  bg-black  bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black p-[60px] rounded-lg shadow-lg text-center relative max-w-md w-full">
            <h3 className="text-2xl font-semibold mb-2">
              🎉 Registration Complete!
            </h3>
            <p className="text-xl my-8">
              You’ve registered as a <strong>seller</strong> successfully.
            </p>
            <p className="mt-5 text-md text-gray-600">
              Redirecting to home page...
            </p>
          </div>
        </div>
      )}

      {/* 🔄 Redirect Loader */}
      {/* {isRedirecting && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="text-white text-xl font-semibold animate-pulse">
            Redirecting...
          </div>
        </div>
      )} */}
    </div>
  );
}
