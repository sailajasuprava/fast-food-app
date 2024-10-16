import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../user/userSlice";

function Order() {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      fullname,
      phone,
      address,
    };
    setFullname("");
    setPhone("");
    setAddress("");
    dispatch(createUser(newUser));
    navigate("/order/details");
  }

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">
        Ready to order? Let&apos;s go!
      </h2>

      <form className="bg-gray-100 p-10" onSubmit={handleSubmit}>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Full Name</label>
          <input
            className="input grow"
            type="text"
            required
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input
              className="input w-full"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <button className="btn">Order now</button>
      </form>
    </div>
  );
}

export default Order;
