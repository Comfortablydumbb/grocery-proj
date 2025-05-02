import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  console.log(auth);

  useEffect(() => {
    const isAdmin = auth?.role?.includes("Admin"); // Adjust if roles are numeric
    console.log(auth);

    if (!auth?.name || !isAdmin) {
      navigate("/login", { replace: true });
    }
  }, [auth, navigate]);

  const isAdmin = auth?.role?.includes("Admin");

  if (!auth?.name || !isAdmin) {
    return null;
  }

  return <Outlet />;
};

export default RequireAuth;
