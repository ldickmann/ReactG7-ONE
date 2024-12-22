/* Component DropdownList */

import "./DropdownList.css";

const DropdownList = (props) => {
  console.log(props.items);

  return (
    <div className="dropdownList">
      <label>{props.label}</label>
      <select required={props.required}>
        {props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownList;
