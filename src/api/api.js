export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };
  fetch("https://genius-car-server-eta-eight-73.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //local storage is the easiest but  not the best place to store jwt
      localStorage.setItem("genius-token", data.token);
    });
};
