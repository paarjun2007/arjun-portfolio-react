import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Message should contain at least 10 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="form-group">
        <label htmlFor="name">
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
        />

        {errors.name && (
          <span className="form-error">
            {errors.name}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />

        {errors.email && (
          <span className="form-error">
            {errors.email}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="message">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me what you'd like to build..."
        />

        {errors.message && (
          <span className="form-error">
            {errors.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="btn btn-primary"
      >
        Send message
      </button>

      {submitted && (
        <div className="form-success">
          Thanks! Your message has been submitted successfully.
        </div>
      )}
    </form>
  );
}

export default ContactForm;