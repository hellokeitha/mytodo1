import { useState, ChangeEvent } from "react";
// useState는 React의 상태(state)를 사용하기 위한 훅이며,
// ChangeEvent는 input 요소 값이 변경되었을 때 발생하는 이벤트의 타입을 정의

type UseInputReturnType = [
  string,
  (e: ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<string>>
];
// 첫 번째 요소는 문자열(string) 타입의 상태 값,
// 두 번째 요소는 input 요소 값이 변경될 때 호출되는 함수

const useInput = (initialValue = ""): UseInputReturnType => {
  const [value, setValue] = useState<string>(initialValue);
  //  setValue 함수는 value 상태를 업데이트하는 데 사용
  // 이때 value는 문자열(string) 타입으로 지정

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  // 초기값을 받아와서 useState 훅을 사용하여 상태를 설정하고,
  // 입력 값이 변경되었을 때 해당 값을 업데이트하는 onChange 함수를 반환

  return [value, onChange, setValue];
  // 첫 번째 요소는 현재 input 요소의 값인 value이고, 두 번째 요소는 onChange 함수.
  // 이렇게 반환된 배열은 useInput을 호출한 컴포넌트에서 디스트럭처링(Destructuring)을 통해 사용
};

export default useInput;
