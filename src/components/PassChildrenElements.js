import React from "react";

export default function ParentComponent() {
  return (
    <div>
      <ChildComponent>
        <p>Child Element 1</p>
        <p>Child Element 2</p>
      </ChildComponent>
    </div>
  );
}

function ChildComponent({ children }) {
  return <div>{children}</div>;
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