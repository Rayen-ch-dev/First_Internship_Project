import { useState } from "react";
import Swal from 'sweetalert2';
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const api="http://localhost:3002"

  const createMessageUser = async () => {
    const userData = {
      name,
      email,
      phone,
      subject,
      message,
    };

    try {
      const response = await fetch(`${api}/createMessageUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json(); // Parse response to JSON

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create user message');
      }

      console.log('UserMessage created successfully:', data);
      Swal.fire({
        title: 'Message Sent Successfully!',
        text: 'Thank you for reaching out to us! We will respond to your message within 24 hours.',
        icon: 'success',
        confirmButtonText: 'OK',
        iconColor: '#f43006',
        confirmButtonColor: '#f43006',
      });
    } catch (error) {
      console.error('Error:', error.message);
    }

  };

  return (
    <div id="contact-form" className="p-2 text-white">
      <form
        className="max-w-lg mx-auto"
        onSubmit={(e) => {
          e.preventDefault(); 
          createMessageUser();
          e.target.reset();
        }}
      >
        <div className="mb-4">
          <label htmlFor="from_name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-600"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-600"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-600"
            placeholder="Your Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-600"
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-600"
            rows="5"
            placeholder="Your Message"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-orange-600 text-white w-full py-2 px-4 rounded-lg hover:bg-orange-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Form;
