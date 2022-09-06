import React, { Fragment, useEffect, useState } from "react";
import { SignUpPage } from "./SignUpPage";
import "./profile-page.scss";
import Button from "../components/Button";
import FormInput from "../components/FormInput";

function ProfilePage() {
  const [editMode, setEditMode] = useState(null);
  const [addMode, setAddMode] = useState(null);
  const [newValue, setNewValue] = useState("");
  const userDetails = {
    name: "Hariprasad Sivapatham Anand",
    address: ["chennai,Tamil nadu"],
    phoneNumber: ["9003842349"],
  };
  useEffect(() => {}, [
    userDetails["name"],
    JSON.stringify(userDetails["address"]),
    JSON.stringify(userDetails["phoneNumber"]),
  ]);
  const [formFields, setFormFields] = useState(userDetails);
  const { name, address, phoneNumber } = formFields;
  const handleChange = (event) => {
    const { value } = event.target;
    setNewValue(value);
  };
  const saveChangeForEdit = (e) => {
    e.preventDefault();
    if (editMode[0] === "address") {
      const obj = {};
      const arr = [...formFields.address];
      arr[editMode[1]] = newValue;
      obj["address"] = arr;
      setFormFields({ ...formFields, ...obj });
      console.log(formFields);
    }
    if (editMode[0] === "name") {
      const obj = {};
      obj["name"] = newValue;
      setFormFields({ ...formFields, ...obj });
    }
    if (editMode[0] === "phoneNumber") {
      console.log(editMode);
      const obj = {};
      const arr = [...formFields.phoneNumber];
      arr[editMode[1]] = newValue;
      obj["phoneNumber"] = arr;
      setFormFields({ ...formFields, ...obj });
      console.log(formFields);
    }
    setNewValue("");
  };
  const saveChangeForAdd = (e) => {
    e.preventDefault();
    if (addMode === "address") {
      const obj = {};
      const arr = [...formFields.address];
      arr.push(newValue);
      obj["address"] = arr;
      setFormFields({ ...formFields, ...obj });
    }
    if (addMode === "phoneNumber") {
      const obj = {};
      const arr = [...formFields.phoneNumber];
      arr.push(newValue);
      obj["phoneNumber"] = arr;
      setFormFields({ ...formFields, ...obj });
    }
  };
  return (
    <div className="profile-card">
      <div className="card-body">
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>:</td>
              <td>{formFields.name}</td>
              <td>
                <i
                  className="fa fa-pen fa-xs edit"
                  onClick={(e) => {
                    e.preventDefault();
                    setEditMode(["name"]);
                  }}
                  name="name"
                  key={"111"}
                ></i>
              </td>
            </tr>
            {/* Printing Addresses */}
            {formFields.address.map((x, i) => (
              <tr>
                <td>Address {i + 1}</td>
                <td>:</td>
                <td>{x}</td>
                <td>
                  <i
                    className="fa fa-pen fa-xs edit"
                    name={`address${i + 1}`}
                    value={i}
                    onClick={(e) => {
                      e.preventDefault();
                      setEditMode(["address", i]);
                      console.log(editMode);
                    }}
                  ></i>
                </td>
              </tr>
            ))}
            {/* Printing Phone Numbers */}
            {formFields.phoneNumber.map((x, i) => (
              <tr>
                <td>Phone Number {i + 1}</td>
                <td>:</td>
                <td>{x}</td>
                <td>
                  <i
                    value={i}
                    className="fa fa-pen fa-xs edit"
                    name={`phoneNumber${i + 1}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setEditMode(["phoneNumber", i]);
                    }}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!addMode ? (
        <div className="button_container">
          <Button
            onClick={(e) => {
              e.preventDefault();
              setAddMode("address");
            }}
          >
            Add Address
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setAddMode("phoneNumber");
            }}
          >
            Add Phone Number
          </Button>
        </div>
      ) : (
        ""
      )}

      {editMode ? (
        <Fragment>
          <FormInput
            label={`Edit ${editMode[0]}${
              editMode[1] + 1 ? editMode[1] + 1 : ""
            }`}
            type="text"
            onChange={handleChange}
            name={editMode[0]}
            value={newValue}
          />
          <div className="button_container">
            <Button onClick={saveChangeForEdit}>Edit</Button>
            <Button
              onClick={() => {
                setEditMode(false);
                setNewValue("");
              }}
            >
              Close
            </Button>
          </div>
        </Fragment>
      ) : (
        ""
      )}
      {addMode ? (
        <Fragment>
          <FormInput
            label={`Add ${addMode}`}
            type="text"
            onChange={handleChange}
            name={addMode}
            value={newValue}
          />
          <div className="button_container">
            <Button onClick={saveChangeForAdd}>Add</Button>
            <Button
              onClick={() => {
                setAddMode(null);
                setNewValue("");
              }}
            >
              Close
            </Button>
          </div>
        </Fragment>
      ) : (
        ""
      )}
    </div>
  );
}

export default ProfilePage;
