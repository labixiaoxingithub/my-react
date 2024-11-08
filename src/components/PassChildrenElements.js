import React, { useState } from "react";

export default function ParentComponent() {

  const [msgColor, setMsgColor] = useState('blue');

  return (
    <div>
      {msgColor}
      <ChildComponent messageColor={msgColor}>
        <p>Child Element 1</p>
        <p>Child Element 2</p>
      </ChildComponent>
      <button onClick={() => {setMsgColor('red')}}>Change Color</button>
    </div>
  );
}

function ChildComponent({ messageColor, children }) {

  const divStyle = {
    color: messageColor
  };

  console.log('ccc');

  setMsgColor

  return <div style={divStyle}>{children}</div>;
}





// export default function ParentComponent() {
//   return (
//     <div>
//       <ChildComponent>
//         <p>Child Element 1</p> // not working
//         <p>Child Element 2</p> // not working
//       </ChildComponent>
//     </div>
//   );
// }

// function ChildComponent() {
//   return (
//     <div>
//       <p>Nested Element 1</p>
//       <p>Nested Element 2</p>
//     </div>
//   );
// }





// export default function ParentComponent() {
//     return (
//       <div>
//         <WrapperComponent>
//           <p>Child Element 1</p>
//           <p>Child Element 2</p>
//         </WrapperComponent>
//       </div>
//     );
//   }

//   function WrapperComponent({ children }) {
//     return <ChildComponent>{children}</ChildComponent>;
//   }

//   function ChildComponent({ children }) {
//     return <div>{children}</div>;
//   }