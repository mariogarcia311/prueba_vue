const isNotAuthenticatedGuard = async (to, from, next) => {
  const token = localStorage.getItem("token");
  if (!token) {
    next();
  } else {
    next({ name: "inicio", params: { id: "sells" } });
  }
};

export default isNotAuthenticatedGuard;
