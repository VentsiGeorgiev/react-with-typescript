import type { PropsWithChildren } from "react"

type BasicProps = {
  type: 'basic';
  name: string;
  email?: never;
}

type AdvancedProps = {
  type: 'advanced';
  name: string;
  email: string
}

type ComponentProps = PropsWithChildren<BasicProps | AdvancedProps>

function Component({type, name, email}: ComponentProps) {
  return (
    <div>
      <p>type: {type}</p>
      <h2>{name} {type === 'advanced' && <span>email: {email}</span>}</h2>
    </div>
  )
}

export default Component