"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      });
      if (!res.ok) throw new Error("Error");
      reset();
      setSuccess("Message Sent! 🚀");
      setTimeout(() => {
        setSuccess(null);
      }, 3000);
    } catch (err: any) {
      setError(
        "Oops, looks like our email server is taking a coffee break! Please try again later."
      );
      setTimeout(() => {
        setError(null);
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-4 md:px-10 justify-evenly items-center mx-auto">
      <h2 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-xl ">
        Contact
      </h2>
      <div className="flex flex-col space-y-10 mt-10">
        <h4 className=" text-lg lg:text-xl text-center max-w-[60ch]">
          {`Whether you want to talk tech, share travel stories, or discuss the latest binge-worthy TV series, I'm all ears.`}
        </h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <input
            placeholder="Name"
            {...register("name")}
            className="contactInput"
            type="text"
            required
          />
          <input
            placeholder="Email"
            {...register("email")}
            className="contactInput"
            type="email"
            required
          />
          <input
            placeholder="Subject"
            {...register("subject")}
            className="contactInput"
            type="text"
            required
          />
          <textarea
            placeholder="Message"
            {...register("message")}
            className="contactInput"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#318ce7] py-4 px-10 rounded-md text-black text-base tracking-widest"
            disabled={loading}
          >
            {loading ? (
              <div className=" flex items-center justify-center">
                <svg
                  className="w-6 h-6  text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            exit={{ y: -100, opacity: 0 }}
            className="text-white top-5 fixed bg-red-500 p-3 rounded-md"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {success && (
          <motion.p
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            exit={{ y: -100, opacity: 0 }}
            className="text-white bg-green-500 top-5 fixed p-3 rounded-md"
          >
            {success}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
