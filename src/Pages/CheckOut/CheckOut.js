import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const CheckOut = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || "unregistered";
    const massage = form.massage.value;
    const order = {
      service: _id,
      serviceName: title,
      price: price,
      customer: name,
      email: email,
      phone: phone,
      massage: massage,
    };

    // if (phone.length > 11) {
    //   alert("Phone number should be 11 characters or longer");
    // } else {
    //   alert("ok");
    // }

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order placed successfully");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <form onSubmit={handlePlaceOrder}>
        <h2 className="text-4xl">You are about to order:{title}</h2>
        <h4 className="text-3xl">Price:{price}</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:grid-cols-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered input-ghost input-primary w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered input-ghost input-primary w-full"
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            className="input input-bordered input-ghost input-primary w-full"
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            defaultValue={user?.email}
            className="input input-bordered input-ghost input-primary w-full"
            readOnly
          />
        </div>
        <textarea
          name="massage"
          className="textarea textarea-primary mt-10 w-full h-96"
          placeholder="Your massage"
          required
        ></textarea>
        <input
          className="btn btn-warning w-full mt-5 text-white"
          type="submit"
          value="Place Your Order"
        />
      </form>
    </div>
  );
};

export default CheckOut;
