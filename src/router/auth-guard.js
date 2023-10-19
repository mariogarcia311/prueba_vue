const isAuthenticatedGuard = async (to, from, next) => {
  console.log({ to, from, next });
  const token = localStorage.getItem("token");

  if (token) {
    next();
  } else {
    next({ name: "login" });
  }
};

export default isAuthenticatedGuard;
