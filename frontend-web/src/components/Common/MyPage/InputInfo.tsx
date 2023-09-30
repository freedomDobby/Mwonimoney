import React, { useState } from "react";
import { Container } from "../About/AboutContainer";
import { InputBox, TextBox } from "../About/AboutText";
import { useRecoilState } from "recoil";
import { userCheckState, userDataState } from "../../../states/UserInfoState";

// 입력칸
interface InputImfoProps {
  title: string;
  info: string;
  placeholder: string;
  id: string;
}

function InputInfo({ title, info, placeholder, id }: InputImfoProps) {
  const [userData, setUserData] = useRecoilState(userDataState);
  const [userCheck, setUserCheck] = useRecoilState(userCheckState);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    setUserData((userData: any) => ({
      ...userData,
      [id]: inputValue,
    }));
    setUserCheck((prevUserCheck) => ({
      ...prevUserCheck,
      [`${id}Check`]: true, // Update the specific property you want
    }));
    // alert(inputValue + userCheck.birthCheck);
  };
  return (
    <>
      <Container height="30%">
        <TextBox fontSize="1.5em" height="100%">
          {title}
        </TextBox>
      </Container>
      <Container
        flexDirection="column"
        height="75%"
        justifyContent="center"
        align="center"
      >
        {userData.memberRole === "GUEST" ? (
          <TextBox
            height="40%"
            width="93%"
            fontSize="1em"
            fontWeight="normal"
            marginL="0%"
            style={{ borderBottom: "1px solid black" }}
          >
            <Container height="100%" width="80%">
              <InputBox
                height="100%"
                width="100%"
                fontsize="1.4em"
                placeholder={placeholder}
                id={id}
                onChange={handleInputChange}
              />
            </Container>
            <Container
              height="100%"
              width="20%"
              backcolor="#fbd56e"
              onClick={handleButtonClick}
            >
              추가
            </Container>
          </TextBox>
        ) : (
          <TextBox
            height="30%"
            width="93%"
            fontSize="1em"
            fontWeight="normal"
            marginL="0%"
            style={{ borderBottom: "1px solid black" }}
          >
            {info}
          </TextBox>
        )}
      </Container>
    </>
  );
}
export default InputInfo;