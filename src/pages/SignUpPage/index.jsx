import React from "react";
import { useForm } from "react-hook-form";
import s from "../SignUpPage/index.module.css";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView={{ opacity: 1 }}
      variants={containerVariants}
      className={s.wrapperForm}
    >
      <h2>Save your progress. Sign up!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <motion.input
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 1.0 }}
            {...register("name", { required: true })}
            placeholder="Name"
          />
          {errors.name && <span>This field is required</span>}
        </div>

        <div>
          <motion.input
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 1.0 }}
            {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
            placeholder="Email"
          />
          {errors.email && <span>Invalid email address</span>}
        </div>

        <div>
          <motion.input
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 1.0 }}
            {...register("password", {
              required: true,
              minLength: 8,
              pattern:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
            })}
            placeholder="Password"
          />
          {errors.password && (
            <span>
              Strong password required: <br />
              8+ chars, 1 uppercase, 1 lowercase, 1 number, 1 special.
            </span>
          )}
        </div>

        <div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit(e);
            }}
            type="submit"
          >
            Sign Up
          </motion.button>

          <p>
            Already have an account<Link to="#">Log In</Link>
          </p>
        </div>
      </form>
    </motion.div>
  );
}
