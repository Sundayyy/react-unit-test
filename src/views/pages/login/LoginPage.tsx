import { SubmitHandler, useForm } from "react-hook-form";
import { Navigate, useLocation } from "react-router-dom";

import { useAuthLoginMutation } from "@apps/services/authService";
import { useAppSelector } from "@apps/hooks";
import { SCLogin } from "./style";

type LoginInputProps = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [loginMutation, { isLoading }] = useAuthLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputProps>();

  const onSubmit: SubmitHandler<LoginInputProps> = (data) => {
    loginMutation(data);
  };

  const location = useLocation();

  const { access_token } = useAppSelector((state) => state.auth);
  if (access_token) {
    return <Navigate to={location?.state?.from || "/"} replace />;
  }

  return (
    <SCLogin>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="_form_header">
          <h2 className="__title">Welcome!</h2>
          <div className="__sub_title">Sign in to yout account</div>
        </div>
        <div className="field mb-5">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              placeholder="Enter your email"
              defaultValue="super.admin.dev@gmail.com"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email && (
              <span className="has-text-danger is-size-7 _email_error_report">
                {errors.email?.message}
              </span>
            )}
          </div>
        </div>
        <div className="field mb-5">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="Enter your password"
              // defaultValue="super_admin@gmail.com"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="has-text-danger is-size-7 _password_error_report">
                Password is required
              </span>
            )}
          </div>
        </div>

        <div className="text-center">
          <button
            className={`button is-info ${isLoading ? "is-loading" : ""}`}
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </SCLogin>
  );
}
