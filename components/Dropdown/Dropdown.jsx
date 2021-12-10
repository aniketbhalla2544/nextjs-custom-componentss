import Option from "./Option";

export default function Dropdown({ btnStyle, name, children }) {
  return (
    <div className="dropdown">
      <div className={(!btnStyle) ? `dropdown__btn` : `${btnStyle}`}>{name}</div>
      <div className="dropdown__content">
        {children}
      </div>
      <style jsx>{`
        .dropdown{
          /* border: 5px solid black; */
          width: 130px;
          margin: 0 auto;
          margin-top: 1rem;
        }

        .dropdown__btn{
          background-color: #06c506;
          color: white;
          text-transform: capitalize;
          padding: 0.6rem 1rem; 
          font-weight: 600;  
        }

        /* important */
        .dropdown:hover > .dropdown__content{
          display: block;
        }

        .dropdown:hover > .dropdown__btn{
          background-color: #069c06;
        }

        .dropdown__btn:hover{
          cursor: pointer;
        }

        /* important */
        .dropdown__content{
          /* border: 5px solid blue; */
          display: none;
          position: absolute;
          left: 0;
          right: 0;
        }
      `}</style>
    </div>
  )
}

Dropdown.Option = Option;


