import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import FormField from "./FormField";
import { companySizes, industries } from "./contactData";
import { inquirySchema } from "../../../schemas/inquiry.schema";
import { submitInquiry } from "../../../services/inquiry.service";

const InquiryForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      country: "",
      industry: "",
      companySize: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await submitInquiry(data);

      toast.success(response.message);

      reset();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-5 sm:grid-cols-2">

        <FormField
          id="fullName"
          label="Full Name"
          placeholder="Your full name"
          register={register}
          error={errors.fullName}
          required
        />

        <FormField
          id="companyName"
          label="Company Name"
          placeholder="Your company"
          register={register}
          error={errors.companyName}
          required
        />

        <FormField
          id="email"
          type="email"
          label="Email Address"
          placeholder="you@company.com"
          register={register}
          error={errors.email}
          required
        />

        <FormField
          id="phone"
          type="tel"
          label="Phone Number"
          placeholder="9876543210"
          register={register}
          error={errors.phone}
          required
        />

        <FormField
          id="country"
          label="Country"
          placeholder="India"
          register={register}
          error={errors.country}
          required
        />

        <FormField
          as="select"
          id="industry"
          label="Industry"
          options={industries}
          register={register}
          error={errors.industry}
          required
        />

        <div className="sm:col-span-2">
          <FormField
            as="select"
            id="companySize"
            label="Company Size"
            options={companySizes}
            register={register}
            error={errors.companySize}
            required
          />
        </div>

        <div className="sm:col-span-2">
          <FormField
            as="textarea"
            id="message"
            label="Message"
            placeholder="Tell us about your business goals and challenges."
            register={register}
            error={errors.message}
            rows={5}
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-3.5 font-medium text-white transition-all duration-300 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
};

export default InquiryForm;