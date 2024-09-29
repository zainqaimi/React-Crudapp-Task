import axios, { Axios } from "axios";
import React, { useState } from "react";
const baseUrl = "https://66d992654ad2f6b8ed55375b.mockapi.io/crud";
function CrudCreate() {
  const [Eror, setEror] = useState(null);
  const [loader, setLoader] = useState(false);
  const [name, setname] = useState("");
  const [id, setId] = useState("");
  const [fname, setfname] = useState("");
  const [age, setage] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [apidata, setapidata] = useState([]);
  const [check, setCheck] = useState(false);
  const [stdButton, setStdButton] = useState("Add Student");
  const postData = async (e) => {
    try {
      e.preventDefault();
      setLoader(true);
      setEror(null);
      if (check === false) {
        await axios.post("https://66d992654ad2f6b8ed55375b.mockapi.io/crud", {
          s_name: name,
          s_fname: fname,
          s_age: age,
          s_number: number,
          s_email: email,
        }).then((value) => alert('Add Sucsess'));
      } else if (check === true) {
        await axios.put(
          `https://66d992654ad2f6b8ed55375b.mockapi.io/crud/${id}`,
          {
            s_name: name,
            s_fname: fname,
            s_age: age,
            s_number: number,
            s_email: email,
          }
        ).then((value) => alert('Edit Sucsess'));
      }
    } catch (err) {
      console.log(`enexpected Eror ${err}`);
      setEror("Make Sure Your Internet Is Conect");
    } finally {
      setname("");
      setfname("");
      setage("");
      setnumber("");
      setemail("");
      setLoader(false)
    }
  };
  const getData = async () => {
    try {
      setLoader(true);
      setEror(null);
      const res = await axios.get(baseUrl);
      console.log(res.data);
      if (res.status === 200) {
        setapidata(res.data);
      } else {
        setEror(`Unexpected response status: ${res.status}`);
      }
    } catch (err) {
      setEror("Failed to fetch data. Please try again.");
      console.error("Error fetching data:", err);
    } finally {
      setLoader(false)
    }
  };
  function handleDelete(id) {
    try {
      setLoader(true);
      setEror(null);
      axios.delete(`https://66d992654ad2f6b8ed55375b.mockapi.io/crud/${id}`).then((value) => alert('Delete Sucsess'));
      getData();
    } catch (err) {
      setEror("Failed To Deleting Data. Please try again.");
      console.log("HandleDelete Enexpected Eror==>" + err);
    }
  }
  const HandleEdit = async (id, name, fname, age, number, email) => {
    try {
      setLoader(true);
      setEror(null);
      setCheck(true);
      setStdButton("Update Student");
      const res = await axios.get(
        `https://66d992654ad2f6b8ed55375b.mockapi.io/crud/${id}`
      );
      setId(id);
      setname(name);
      setfname(fname);
      setage(age);
      setnumber(number);
      setemail(email);
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false)
    }
  };

  return (
    <>
      {loader && <p className="font-bold text-2xl">Loading.....</p>}
      {Eror && <p>Oop's Some thing Went wrong....</p>}
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
            {stdButton}
            {/* check == false ? setStdButton('Add Studen') : setStdButton('update Student')  */}
          </button>
        </form>
      </div>
      <div>
        <button
          onClick={getData}
          className="bg-gray-300 hover:bg-gray-400  hover:text-white p-2 rounded-md "
        >
          Reload
        </button>
        <h1 className="m-auto mt-5 font-bold text-2xl">STUDENT'S DATA</h1>
        <table class="m-auto text-center w-1/2 text-sm rtl:text-right text-black mt-5">
          <thead class=" whitespace-nowrap text-black text-md uppercase bg-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Id
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Father's Name
              </th>
              <th scope="col" class="px-6 py-3">
                Age
              </th>
              <th scope="col" class="px-6 py-3">
                phone
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                edit
              </th>
              <th scope="col" class="px-6 py-3">
                delete
              </th>
            </tr>
          </thead>
          <tbody className="space-y-2 whitespace-nowrap uppercase">
            {apidata.map((item) => {
              const { id, s_name, s_fname, s_age, s_number, s_email } = item;
              return (
                <>
                  <tr class="bg-white border  border-gray-300 hover:bg-gray-100 ">
                    <td scope="row" class="px-6 py-4" key={id}>
                      {id}
                    </td>
                    <td scope="row" class="px-6 py-4">
                      {s_name}
                    </td>
                    <td class="px-6 py-4">{s_fname}</td>
                    <td class="px-6 py-4">{s_age}</td>
                    <td class="px-6 py-4"> {s_number} </td>
                    <td class="px-6 py-4 lowercase">{s_email}</td>
                    <td class="px-6 py-4 text-right">
                      <a
                        href="#"
                        class="font-medium text-white bg-green-500 px-4 py-2 rounded-md"
                        onClick={() => {
                          HandleEdit(
                            id,
                            s_name,
                            s_fname,
                            s_age,
                            s_number,
                            s_email
                          );
                        }}
                      >
                        Edit
                      </a>
                    </td>
                    <td class="px-6 py-4 text-right">
                      <a
                        href="#"
                        class="font-medium text-white bg-red-500 px-3 py-2 rounded-md"
                        onClick={() => {
                          if (window.confirm("Are You Sure To Delete Data!")) {
                            handleDelete(id);
                          }
                        }}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      {!loader && !Eror && apidata.length === 0 && <p className="mt-5">no data avalaible....</p>}
    </>
  );
}

export default CrudCreate;
