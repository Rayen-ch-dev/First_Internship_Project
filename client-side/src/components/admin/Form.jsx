import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({
  mode,
  onSubmit,
  setPasswordValue,
  setUsernameValue,
  setRoleValue,
}) => {
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (mode === "signup" && password !== confirmPassword) {
      setError("Passwords do not match!");
      setIsSubmitting(false);
      return;
    }

    try {
      await onSubmit(e);
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const navigate = useNavigate();
  const goBack = ()=>{navigate(-1)};

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-900 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">
          {mode === "signup" ? "Add New Admin" : "Login"}
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-900/50 border border-red-500 text-red-400 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-orange-600 mb-1">
              Username <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all placeholder-gray-500"
              placeholder="Enter your username"
              onChange={(e) => setUsernameValue(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-orange-600 mb-1">
              Password <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-orange-600 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all placeholder-gray-500"
              placeholder="••••••••"
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordValue(e.target.value);
              }}
            />
          </div>

          {mode === "signup" && (
            <>
              <div>
                <label className="block text-sm font-medium text-orange-600 mb-1">
                  Confirm Password <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="password"
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-orange-600 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all placeholder-gray-500"
                  placeholder="••••••••"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-orange-600 mb-1">
                  Role <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all"
                  onChange={(e) => setRoleValue(e.target.value)}
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">Sub-Admin</option>
                </select>
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2.5 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting
              ? "Processing..."
              : mode === "signup"
                ? "Add Admin"
                : "Login"}
          </button>
          {mode === "signup" && (
            <button
            onClick={goBack}
              type="button"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2.5 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              log out

            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
