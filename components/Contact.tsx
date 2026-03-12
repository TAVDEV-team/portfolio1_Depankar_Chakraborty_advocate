"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [category, setCategory] = useState("");

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE - CONTACT INFO */}
<div className="space-y-8">

  <h2 className="text-3xl font-bold text-black">
    Get in Touch
  </h2>

  <p className="text-gray-600 leading-relaxed">
    What would you like to share with us? If you'd like to contact us with
    questions or suggestions, we would love to hear from you. If you have
    a comment about this website, you can also send us your feedback.
  </p>

  <div className="space-y-6 text-gray-700">

    {/* Judge Court */}
    <div className="flex gap-4">
      <FaMapMarkerAlt className="text-blue-800 text-xl mt-1" />
      <div>
        <h4 className="font-semibold text-black border-b-2 border-blue-700 inline-block pb-1">
          Judge Court Chamber :
        </h4>
        <p>
          Ajimunnessa Bhavan 5/1, Kailash Ghosh Lane <br />
          Room: 2003 (1st Floor) <br />
          Kotwali, Dhaka-1100
        </p>
      </div>
    </div>

    {/* High Court */}
    <div className="flex gap-4">
      <FaMapMarkerAlt className="text-blue-800 text-xl mt-1" />
      <div>
        <h4 className="font-semibold text-black border-b-2 border-blue-700 inline-block pb-1">
          High Court Chamber :
        </h4>
        <p>
          Chamber No: 8045 (7th Floor) <br />
          Shohrawardi Building <br />
          Supreme Court Bar Association
        </p>
      </div>
    </div>

    {/* Contact Info */}
    <div className="space-y-2">

      <div className="flex items-center gap-3">
        <FaPhoneAlt className="text-blue-800" />
        <p><strong>Mobile:</strong> 01715353165</p>
      </div>

      <div className="flex items-center gap-3">
        <FaEnvelope className="text-blue-800" />
        <p><strong>Email:</strong> crajib8844@gmail.com</p>
      </div>

    </div>

  </div>

</div>

          {/* RIGHT SIDE - FORM */}
          <div>

            <h2 className="text-3xl font-bold mb-8 text-black">
              Send us a Message
            </h2>

            <form className="space-y-6">

  {/* Name */}
  <div>
    <label className="block mb-2 font-medium text-gray-700">
      Your Name
    </label>
    <input
      type="text"
      required
      className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Email */}
  <div>
    <label className="block mb-2 font-medium text-gray-700">
      Your Email
    </label>
    <input
      type="email"
      required
      className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Category */}
  <div>
    <label className="block mb-2 font-medium text-gray-700">
      Legal Matter Category
    </label>
    <select
      required
      className="w-full border text-gray-700 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="">Select Category</option>
      <option value="civil">Civil</option>
      <option value="criminal">Criminal</option>
      <option value="income-tax">Income Tax</option>
      <option value="company-matters">Company Matters</option>
    </select>
  </div>

  {/* Message */}
  <div>
    <label className="block mb-2 font-medium text-gray-700">
      Your Message
    </label>
    <textarea
      required
      rows={4}
      className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <button
    type="submit"
    className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
  >
    Submit Message
  </button>

</form>

          </div>

        </div>

      </div>
    </section>
  );
}