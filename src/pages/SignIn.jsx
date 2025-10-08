import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../context/UserContext";
import Newsletter from "../components/Newsletter";

const SignIn = () => {
  const navigate = useNavigate();
  const { login } = useUser();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
        general: "",
      }));
    }
    if (errors.general) {
      setErrors((prev) => ({ ...prev, general: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const response = await axios.get("http://localhost:3001/users");
      const users = response.data;
      const user = users.find((u) => u.email === formData.email);

      if (!user) {
        setErrors({ general: "Account not found. Please sign up to continue." });
      } else if (user.password !== formData.password) {
        setErrors({ general: "Password is incorrect. Try again or use 'Forgot Password'." });
      } else {
        login(user);
        alert("Welcome back! You have successfully signed in.");
        navigate("/");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      setErrors({
        general: "Could not connect to server. Try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Banner Section */}
      <section className="banner-section">
        <div className="container">
          <div className="banner-content text-center">
            <h1 className="banner-title">Sign In</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/" className="text-white text-decoration-none">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Sign In</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* Sign In Form */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="card shadow">
                <div className="card-header bg-primary text-white text-center">
                  <h3 className="mb-0 script-font">Welcome Back</h3>
                  <p className="mb-0">Sign in to your account</p>
                </div>
                <div className="card-body p-4">
                  {errors.general && (
                    <div className="alert alert-danger" role="alert">{errors.general}</div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password *</label>
                      <input
                        type="password"
                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter your password"
                        disabled={isSubmitting}
                      />
                      {errors.password && (
                        <div className="invalid-feedback">{errors.password}</div>
                      )}
                    </div>
                    <div className="mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        />
                        <label className="form-check-label">Remember me</label>
                      </div>
                    </div>
                    <div className="text-center mb-4">
                      <button
                        type="submit"
                        className="btn btn-primary-custom btn-lg px-5"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Signing In..." : "Sign In"}
                      </button>
                    </div>
                    <div className="text-center">
                      <p className="mb-2">
                        <Link to="/forgot-password" className="text-primary text-decoration-none">
                          Forgot your password?
                        </Link>
                      </p>
                      <p className="mb-0">
                        Don't have an account?
                        <Link to="/signup" className="text-primary text-decoration-none ms-1">
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </div>
  );
};

export default SignIn;
