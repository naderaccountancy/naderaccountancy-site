"use client";

import { useState, FormEvent } from "react";

/* ===========================================
   CONTACT FORM COMPONENT
   
   Contact form with validation
   
   To customize:
   - Update form fields as needed
   - Connect to your backend/email service
   - Currently logs to console for demo
   =========================================== */

interface FormData {
  name: string;
  email: string;
  phone: string;
  propertyCount: string;
  propertyStates: string;
  reason: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  propertyCount: "",
  propertyStates: "",
  reason: "",
  message: "",
};

const reasonOptions = [
  { value: "", label: "Select a reason..." },
  { value: "new-client", label: "I'm looking for a new tax strategist" },
  { value: "cost-seg", label: "Cost segregation analysis inquiry" },
  { value: "1031", label: "1031 exchange planning" },
  { value: "entity-structure", label: "Entity structure review" },
  { value: "tax-planning", label: "General tax planning" },
  { value: "second-opinion", label: "Second opinion on current strategy" },
  { value: "other", label: "Other" },
];

const propertyCountOptions = [
  { value: "", label: "Select..." },
  { value: "0", label: "0 (Looking to start)" },
  { value: "1-2", label: "1-2 properties" },
  { value: "3-5", label: "3-5 properties" },
  { value: "6-10", label: "6-10 properties" },
  { value: "10+", label: "10+ properties" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.propertyCount) {
      newErrors.propertyCount = "Please select number of properties";
    }

    if (!formData.reason) {
      newErrors.reason = "Please select a reason";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call - REPLACE THIS with actual form submission
    // e.g., send to your backend, email service, or CRM
    try {
      // Log form data for demo purposes
      console.log("Form submitted:", formData);
      
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when field is edited
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[var(--color-navy-deep)] mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600 mb-6">
          Your message has been received. I&apos;ll review your information and get back to you within 1-2 business days.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-[var(--color-gold)] font-semibold hover:text-[var(--color-gold-dark)] transition-colors"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="md:col-span-2">
          <label htmlFor="name" className="form-label">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${errors.name ? "border-red-500" : ""}`}
            placeholder="John Smith"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="form-label">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? "border-red-500" : ""}`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="form-label">
            Phone Number <span className="text-gray-400">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Number of Properties */}
        <div>
          <label htmlFor="propertyCount" className="form-label">
            Number of Properties <span className="text-red-500">*</span>
          </label>
          <select
            id="propertyCount"
            name="propertyCount"
            value={formData.propertyCount}
            onChange={handleChange}
            className={`form-input ${errors.propertyCount ? "border-red-500" : ""}`}
          >
            {propertyCountOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.propertyCount && (
            <p className="mt-1 text-sm text-red-500">{errors.propertyCount}</p>
          )}
        </div>

        {/* States of Properties */}
        <div>
          <label htmlFor="propertyStates" className="form-label">
            States of Properties <span className="text-gray-400">(e.g., CA, TX)</span>
          </label>
          <input
            type="text"
            id="propertyStates"
            name="propertyStates"
            value={formData.propertyStates}
            onChange={handleChange}
            className="form-input"
            placeholder="CA, TX, FL"
          />
        </div>

        {/* Reason for Reaching Out */}
        <div className="md:col-span-2">
          <label htmlFor="reason" className="form-label">
            Reason for Reaching Out <span className="text-red-500">*</span>
          </label>
          <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className={`form-input ${errors.reason ? "border-red-500" : ""}`}
          >
            {reasonOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.reason && (
            <p className="mt-1 text-sm text-red-500">{errors.reason}</p>
          )}
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label htmlFor="message" className="form-label">
            Additional Information <span className="text-gray-400">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="form-input resize-none"
            placeholder="Tell me a bit about your situation, goals, or any specific questions you have..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>
      </div>

      {/* Privacy Note */}
      <p className="mt-4 text-sm text-gray-500 text-center">
        Your information is secure and will never be shared with third parties.
      </p>
    </form>
  );
}


