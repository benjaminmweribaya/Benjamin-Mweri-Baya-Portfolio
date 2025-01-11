import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [attachments, setAttachments] = useState([]);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setAttachments([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get the reCAPTCHA token
      const token = await window.grecaptcha.execute(
        '6Lce4LQqAAAAAFIyrZz_NCGDx0rVKfgkLBhdG5rh',
        { action: 'submit' }
      );
      setRecaptchaToken(token);

      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('message', formData.message);
      formDataObj.append('recaptchaToken', token);

      attachments.forEach((file, idx) =>
        formDataObj.append(`attachments[${idx}]`, file)
      );

      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        body: formDataObj,
      });

      if (response.ok) {
        setStatus('success');
      } else {
        const errorData = await response.json();
        setStatus(`error: ${errorData.message}`);
      }
    } catch (err) {
      console.error('Error:', err);
      setStatus('error: Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          maxLength={800}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="attachments">
          Attachments
        </label>
        <input
          type="file"
          id="attachments"
          name="attachments"
          onChange={handleFileChange}
          multiple
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>
      <div className="mb-4">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {status === 'loading' ? 'Sending...' : 'Send'}
        </button>
      </div>
      {status && (
        <p
          className={`text-sm mt-2 ${status === 'success' ? 'text-green-500' : 'text-red-500'
            }`}
        >
          {status === 'success'
            ? 'Message sent successfully!'
            : `Error: ${status}`}
        </p>
      )}
    </form>
  );
};

export default Contact;
