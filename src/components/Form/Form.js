import "bootstrap/dist/css/bootstrap.css";
import "../Form/form.css";
import React, { useEffect, useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    bday: "",
    language: "",
    hft: 0,
    hinch: 0,
    weight: 0,
    smoking: "",
    surgeries: "",
    medication: "",
    occupation: "",
    hobbies: "",
    email: "",
    telno: "",
  });
  useEffect(() => {
    const initial = {
      firstName: "Mursal",
      lastName: "Akhtar",
      gender: "Male",
      bday: "2024-07-03",
      language: "English",
      hft: 4,
      hinch: 5,
      weight: 200,
      smoking: "1",
      surgeries: "No",
      medication: "N",
      occupation: "ASE",
      hobbies: "Cricket",
      email: "mursal@gmail.com",
      telno: "2123123",
    };

    setFormData(initial);
  }, []);

  const handleChange = (event) => {
    // console.log(event.target, "===");
    const { value, id } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (event) => {
    // Prevent default form submission
    event.preventDefault();
    // console.log("Email:", email);
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container justify-content-start mt-5">
          <div className="col-12 d-flex" style={{ height: 50 }}>
            <div className="col-2 h-100 d-flex justify-content-center align-items-center border-end">
              <h4 className="text-center m-0">First Name:</h4>
            </div>
            <div className="col-10 h-100 d-flex justify-content-start align-items-center p-2 ps-4">
              <input
                type="text"
                onChange={(e) => handleChange(e)}
                required=""
                className="ms-3 w-100 h-75 rounded-3 border-1 ps-3 form-control"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                id="firstName"
              />
            </div>
          </div>
          <div className="col-12 d-flex" style={{ height: 50 }}>
            <div className="col-2 h-100 d-flex justify-content-center align-items-center border-end">
              <h4 className="text-center m-0">Last Name:</h4>
            </div>
            <div className="col-10 h-100 d-flex justify-content-start align-items-center p-2 ps-4">
              <input
                type="text"
                onChange={(e) => handleChange(e)}
                required=""
                className="ms-3 w-100 h-75 rounded-3 border-1 ps-3 form-control"
                placeholder="Last Name"
                name="lastName"
                id="lastName"
                value={formData.lastName}
              />
            </div>
          </div>
          <div className="col-12 d-flex" style={{ height: 50 }}>
            <div className="col-2 h-100 d-flex justify-content-center align-items-center border-end">
              <h4 className="text-center m-0">Gender:</h4>
            </div>
            <div className="col-10 h-100 d-flex justify-content-start align-items-center p-2 ps-4">
              <select
                className="ms-3 w-100 h-75 rounded-3 border-1 ps-3 form-control"
                id="gender"
                onChange={(e) => handleChange(e)}
                value={formData.gender}
              >
                <option value={0}>Choose Gender</option>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
                <option value={"Prefer not to say"}>Prefer not to say</option>
              </select>
            </div>
          </div>
          <div className="col-12 d-flex" style={{ height: 50 }}>
            <div className="col-2 h-100 d-flex justify-content-center align-items-center border-end">
              <h4 className="text-center m-0">Birthday:</h4>
            </div>
            <div className="col-10 h-100 d-flex justify-content-start align-items-center p-2 ps-4">
              <input
                type="date"
                required=""
                className="ms-3 w-25 h-75 rounded-3 border-1 ps-3 form-control"
                id="bday"
                value={formData.bday}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="col-12 d-flex" style={{ height: 50 }}>
            <div className="col-2 h-100 d-flex justify-content-center align-items-center border-end">
              <h4 className="text-center m-0">Language:</h4>
            </div>
            <div className="col-10 h-100 d-flex justify-content-center align-items-center p-2 ps-4">
              <select
                className="ms-3 w-100 h-75 rounded-3 border-1 ps-3 form-control"
                id="language"
                onChange={(e) => handleChange(e)}
                value={formData.language}
              >
                <option value={0}></option>
                <option>English</option>
                <option>Dutch</option>
                <option>French</option>
              </select>
            </div>
          </div>
          <div className="col-12 d-flex" style={{ height: 50 }}>
            <div className="col-2 h-100 d-flex justify-content-center align-items-center border-end">
              <h4 className="text-center m-0">Height:</h4>
            </div>
            <div className="col-10 h-100 d-flex justify-content-start align-items-center ps-5 pt-2 pb-2">
              <div
                className="border h-75  d-flex align-items-center border-3 rounded-3 me-3"
                style={{ width: 100 }}
              >
                <input
                  type="number"
                  min={0}
                  max={10}
                  className="border-0 ps-2 h-100 me-1 form-control"
                  style={{ width: 78 }}
                  id="hft"
                  value={formData.hft}
                  onChange={(e) => handleChange(e)}
                ></input>
                <span className="h5 m-0 pe-2">ft</span>
              </div>
              <div
                className="border h-75  d-flex align-items-center border-3 rounded-3"
                style={{ width: 100 }}
              >
                <input
                  type="number"
                  min={0}
                  max={11}
                  className="border-0 ps-2 h-100 me-1 form-control"
                  style={{ width: 78 }}
                  id="hinch"
                  value={formData.hinch}
                  onChange={(e) => handleChange(e)}
                ></input>
                <span className="h5 m-0 pe-2">in</span>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex" style={{ height: 50 }}>
            <div className="col-2 h-100 d-flex justify-content-center align-items-center border-end">
              <h4 className="text-center m-0">Weight:</h4>
            </div>
            <div className="col-10 h-100 d-flex justify-content-start align-items-center p-2 ps-4">
              <input
                type="number"
                min={0}
                className="ms-3 w-25 h-75 rounded-3 border-1 ps-3 form-control"
                placeholder="Weight"
                id="weight"
                value={formData.weight}
                onChange={(e) => handleChange(e)}
              />
              <span className="h5 m-0 pe-2 ms-2">lbs</span>
            </div>
          </div>
          <div className="col-12 d-flex" style={{ height: 50 }}>
            <div className="col-2 h-100 d-flex justify-content-center align-items-center border-end">
              <h4 className="text-center m-0">Smoking #:</h4>
            </div>
            <div className="col-10 h-100 d-flex justify-content-start align-items-center p-2 ps-4">
              <select
                className="ms-3 w-25 h-75 rounded-3 border-1 ps-3 form-control"
                id="smoking"
                value={formData.smoking}
                onChange={(e) => handleChange(e)}
              >
                <option value={0}></option>
                <option value={1}>Yes</option>
                <option value={2}>No</option>
                <option value={3}>Used to</option>
              </select>
            </div>
          </div>
          <div className="col-12 d-flex" style={{ height: 50 }}>
            <div className="col-2 h-100 d-flex justify-content-center align-items-center border-end">
              <h4 className="text-center m-0">Surgeries #:</h4>
            </div>
            <div className="col-10 h-100 d-flex justify-content-start align-items-center p-2 ps-4">
              <input
                type="text"
                required=""
                className="ms-3 w-100 h-75 rounded-3 border-1 ps-3 form-control"
                placeholder="Disclose any major surgeries before"
                id="surgeries"
                value={formData.surgeries}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="col-12 d-flex" style={{ height: 50 }}>
            <div className="col-2 h-100 d-flex justify-content-center align-items-center border-end">
              <h4 className="text-center m-0">Medication #:</h4>
            </div>
            <div className="col-10 h-100 d-flex justify-content-start align-items-center p-2 ps-4">
              <input
                type="text"
                required=""
                className="ms-3 w-100 h-75 rounded-3 border-1 ps-3 form-control"
                placeholder="Any long term medications?"
                id="medication"
                value={formData.medication}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="col-12 d-flex" style={{ height: 50 }}>
            <div className="col-2 h-100 d-flex justify-content-center align-items-center border-end">
              <h4 className="text-center m-0">Occupation #:</h4>
            </div>
            <div className="col-10 h-100 d-flex justify-content-start align-items-center p-2 ps-4">
              <input
                type="text"
                required=""
                className="ms-3 w-100 h-75 rounded-3 border-1 ps-3 form-control"
                placeholder="Occupation #"
                id="occupation"
                value={formData.occupation}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="col-12 d-flex" style={{ height: 50 }}>
            <div className="col-2 h-100 d-flex justify-content-center align-items-center border-end">
              <h4 className="text-center m-0">Hobbies #:</h4>
            </div>
            <div className="col-10 h-100 d-flex justify-content-start align-items-center p-2 ps-4">
              <input
                type="text"
                required=""
                className="ms-3 w-100 h-75 rounded-3 border-1 ps-3 form-control"
                placeholder="Hobbies #"
                id="hobbies"
                value={formData.hobbies}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="col-12 d-flex" style={{ height: 50 }}>
            <div className="col-2 h-100 d-flex justify-content-center align-items-center border-end">
              <h4 className="text-center m-0">Email #:</h4>
            </div>
            <div className="col-10 h-100 d-flex justify-content-start align-items-center p-2 ps-4">
              <input
                type="email"
                required=""
                className="ms-3 w-100 h-75 rounded-3 border-1 ps-3 form-control"
                placeholder="Email #"
                id="email"
                value={formData.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="col-12 d-flex" style={{ height: 50 }}>
            <div className="col-2 h-100 d-flex justify-content-center align-items-center border-end">
              <h4 className="text-center m-0">Cell Phone #:</h4>
            </div>
            <div className="col-10 h-100 d-flex justify-content-start align-items-center p-2 ps-4">
              <input
                type="tel"
                required=""
                className="ms-3 w-100 h-75 rounded-3 border-1 ps-3 form-control"
                placeholder=""
                id="telno"
                value={formData.telno}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <button type="submit" className="m-2 ">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
