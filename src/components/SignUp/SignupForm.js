import { useForm } from "react-hook-form";
import React, { useRef, useState } from "react";

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch
  } = useForm();

  const password = useRef({});
  const [passwordShown, setPasswordShown] = useState(false);

  const onSubmit = (data) => console.log(data);

  const watchPassword = watch("password", "");

  const togglePasswordVisibility = () => {
    setPasswordShown((prevState) => !prevState);
  };

  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: 25 }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <form
                      className="mx-1 mx-md-4"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      {/* Name */}
                      <div className="mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="name">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            className={`form-control ${
                              errors.name ? "is-invalid" : ""
                            }`}
                            placeholder="Enter Your Name"
                            {...register("name", { required: true })}
                          />
                          <div className="invalid-feedback">
                            {errors.name?.type === "required" && "Name is required"}
                          </div>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            className={`form-control ${
                              errors.email ? "is-invalid" : ""
                            }`}
                            placeholder="Enter Your Email"
                            {...register("email", {
                              required: true,
                              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                            })}
                          />
                          <div className="invalid-feedback">
                            {errors.email?.type === "required" && "Email is required"}
                            {errors.email?.type === "pattern" &&
                              "Please enter a valid email"}
                          </div>
                        </div>
                      </div>

                      {/* Username */}
                      <div className="mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="username">
                            Username
                          </label>
                          <input
                            type="text"
                            id="username"
                            className={`form-control ${
                              errors.username ? "is-invalid" : ""
                            }`}
                            placeholder="Enter Your Username"
                            {...register("username", {
                              required: true,
                              pattern: /^[^\s]+$/,
                            })}
                          />
                          <div className="invalid-feedback">
                            {errors.username?.type === "required" &&
                              "Username is required"}
                            {errors.username?.type === "pattern" &&
                              "Username cannot contain spaces"}
                          </div>
                        </div>
                      </div>

                      {/* Password */}
                      <div className="mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                          <input
                            type={passwordShown ? "text" : "password"}
                            id="password"
                            className={`form-control ${
                              errors.password ? "is-invalid" : ""
                            }`}
                            placeholder="Enter Your Password"
                            {...register("password", {
                              required: true,
                              minLength: 8,
                              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*])[A-Za-z\d@#$%^&*]{8,}$/,
                            })}
                          />
                          <div className="invalid-feedback">
                            {errors.password?.type === "required" &&
                              "Password is required"}
                            {errors.password?.type === "minLength" &&
                              "Password must be at least 8 characters long"}
                            {errors.password?.type === "pattern" &&
                              "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character (@#$%^&*)"}
                          </div>
                        </div>
                      </div>

                      {/* Confirm Password */}
                      <div className="mb-4">
                        <div className="form-outline">
                          <label
                            className="form-label"
                            htmlFor="confirmPassword"
                          >
                            Confirm Password
                          </label>
                          <input
                            type={passwordShown ? "text" : "password"}
                            id="confirmPassword"
                            className={`form-control ${
                              watchPassword !== "" &&
                              watchPassword !== watch("password")
                                ? "is-invalid"
                                : ""
                            }`}
                            placeholder="Confirm Password"
                            {...register("confirmPassword", {
                              required: true,
                              validate: (value) =>
                                value === watch("password"),
                            })}
                          />
                          <div className="invalid-feedback">
                            {errors.confirmPassword?.type === "required" &&
                              "Confirm Password is required"}
                            {errors.confirmPassword?.type === "validate" &&
                              "Passwords do not match"}
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="d-flex justify-content-start mx-4 mb-3 mb-lg-4">
                        <input
                          className="btn btn-warning btn-lg"
                          type="submit"
                          value="Register"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
