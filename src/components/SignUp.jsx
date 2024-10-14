import { useState } from "react";
export default function SignUp() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("female");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleOnSubmit = (event) => {
    alert(`이름: ${name} 성별: ${gender === "female" ? "여성" : "남성"}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label>
        이름 : <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <label>
        성별 :
        <select value={gender} onChange={handleChangeGender}>
          <option value="female">여성</option>
          <option value="male">남성</option>
        </select>
      </label>
      <button type="submit">제출 </button>
    </form>
  );
}
