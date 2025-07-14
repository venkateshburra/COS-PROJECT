"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    // Reset form and show confirmation
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(true);
  };

  function handleStop() {
    router.push('/products')

    setSubmitted(false);
  }

  return (
    <div className="max-w-xl mx-auto p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Place an Order</h1>

      {submitted && (
        <div className="fixed inset-0 top-[120px] left-0 right-0 bottom-0  bg-black  bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black p-[40px] rounded-lg shadow-lg text-center relative max-w-md w-full">
            <h3 className="text-2xl font-semibold mb-2">
              🎉 Success!
            </h3>
            <p className="text-xl my-8">
              Your order was submitted successfully.
            </p>
            <p className="mt-5 text-md text-gray-600 ">
              <button onClick={handleStop} className="bg-yellow-300 cursor-pointer text-black px-8 p-2 rounded-[4px] ">Okay</button>
            </p>
          </div>
        </div>
      )}

     {!submitted &&  <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-100 text-black"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-100 text-black"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 h-32 rounded bg-gray-100 text-black"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          submit Order
        </button>
        <Link href="/products" className="mt-12 text-center cursor-pointer block">
          <button className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700">
            back to product page
          </button>
        </Link>
      </form>}
    </div>
  );
}
