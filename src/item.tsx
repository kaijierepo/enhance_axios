import { User } from './user';

export function Item(props: { user: User }) {  

  const handleClick = () => {
     
  }

    
  return (
    <div className="Item">
      {/* <span>{props.user.name}</span>
      <span>{props.user.age}</span>
      <span>{props.user.gender}</span> */}
       <button onClick={handleClick} >click me</button>
    </div>
  );
}