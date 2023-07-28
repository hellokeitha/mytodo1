import { useState } from "react";

// 1. UI 만들기
// 2. state로 필요한 값이 들어간 배열 만들어주기
// 3. map으로 main 뿌려주기
// 4. filter 할일목록, 완료목록
// 5. 버튼 만들어서 완료, 완료 취소, 삭제
// 6. 인풋에 넣은 값이 아래 할일목록으로 리스트업

// (1) interface를 이용한 Person 타입 정의
// interface Person {
//   name: string;
//   age: number;
// }

// (2) type를 이용한 Person 타입 정의
type Person = {
  name: string;
  age: number;
};

const App = () => {
  // 타입이 지정된 배열 상태와 초기값
  const [names, setNames] = useState<string[]>([
    "원장",
    "제천",
    "동훈",
    "상림",
    "명한",
    "병수",
    "창영",
    "재상",
  ]);

  // 타입이 지정된 객체 상태와 초기값
  const [person, setPerson] = useState<Person>({
    name: "원장",
    age: 21,
  });

  // 기존의 배열에 새로운 이름을 추가하는 함수
  const addNewName = () => {
    // 추가할 때 마다 배열의 개수가 덧붙여져 신규 튜터님 이름이 생성됩니다.
    const newName = `신규 튜터님 -> ${names.length + 1}`;
    setNames([...names, newName]);
  };

  // 나이를 업데이트하는 함수
  const updateAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <div>
      <h1>리액트 튜터 목록</h1>
      <ul>
        {names.map((name: string, index: number) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <button onClick={addNewName}>튜터 추가하기</button>

      <h1>가장 젊은 사람</h1>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <button onClick={updateAge}>철들이기</button>
    </div>
  );
};

export default App;
