import type { PropsWithChildren } from "react";

type ComponentType = PropsWithChildren<{
  name: string,
  id: number
}> 

// interface ComponentType {
//   name: string;
//   id: number;
//   children?: ReactNode
// }
// interface vs type
// type ComponentType = {
//   name: string;
//   id: number
// }


function Component({name, id, children}: ComponentType) {
 return (
  <div>
    <h2>Props</h2>
    <h2>Name: {name} - ID: {id}</h2>
    {children}
  </div>
 )
}

// Inline
// function Component({name, id}: {name:string; id:number}) {
//  return (
//   <div>
//     <h2>Props</h2>
//     <h2>Name: {name} - ID: {id}</h2>
//   </div>
//  )
// }

export default Component