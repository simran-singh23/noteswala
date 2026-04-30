import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent successfully! We will get back to you soon.");
    console.log(form);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">

        

        <h1 className="text-3xl font-bold text-center mb-6">
          Contact Us
        </h1>

       
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}

              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

        
          <div>
            <label className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea name="message"  value={form.message} onChange={handleChange}

              placeholder="Write your message..."
              rows="4"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
        <div className="text-center mt-6 text-sm text-gray-500">
          Or reach us at: contact@notewala.com
        </div>
      </div>
    </div>
  );
}