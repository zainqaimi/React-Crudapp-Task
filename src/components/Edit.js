import axios, { Axios } from "axios";
import React, { useState } from "react";
function Edit() {
  const [name, setname] = useState("");
  const [fname, setfname] = useState("");
  const [age, setage] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [Eror, setEror] = useState("");
  const postData = async (e) => {
    try {
      e.preventDefault();
      await axios.post("https://66d992654ad2f6b8ed55375b.mockapi.io/crud", {
        s_name: name,
        s_fname: fname,
        s_age: age,
        s_number: number,
        s_email: email,
      });
    } catch (err) {
      console.log(`enexpected Eror ${err}`);
      setEror("Make Sure Your Internet Is Conect");
    } finally {
      setname("");
      setfname("");
      setage("");
      setnumber("");
      setemail("");
    }
  };
  return (
    <>
      <div className="">
        <form
          action=""
          className="my-10 ml-40 flex space-x-1 items-center text-center px-3"
          onSubmit={postData}
        >
          <input
            type="text"
            value={name}
            className="block rounded-md p-2  border border-gray-400 appearance-none text-sm text-gray-900 bg-gray-50"
            placeholder="Name"
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="text"
            value={fname}
            className="block rounded-md p-2  border border-gray-400 appearance-none text-sm text-gray-900 bg-gray-50"
            placeholder="Father's Name"
            onChange={(e) => setfname(e.target.value)}
          />
          <input
            type="number"
            value={age}
            className="block rounded-md p-2  border border-gray-400 appearance-none text-sm text-gray-900 bg-gray-50"
            placeholder="Age"
            onChange={(e) => setage(e.target.value)}
          />
          <input
            type="number"
            value={number}
            className="block rounded-md p-2  border border-gray-400 appearance-none text-sm text-gray-900 bg-gray-50"
            placeholder="Number"
            onChange={(e) => setnumber(e.target.value)}
          />
          <input
            type="email"
            value={email}
            className="block rounded-md p-2  border border-gray-400 appearance-none text-sm text-gray-900 bg-gray-50"
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
          />
          <button className="block rounded-md p-2 appearance-none text-sm text-white bg-green-600 hover:bg-green-700">
            Add Student
          </button>
        </form>
      </div>
    </>
  );
}

export default Edit;
