import Option from "./Option";

export default function Dropdown({ btnStyle, name, children }) {
  return (
    <div className="dropdown">
      <div className={(!btnStyle) ? `dropdown__btn` : `${btnStyle}`}>{name}<i className="rightarrow bi bi-caret-down-fill"></i></div>
      <div className="dropdown__content">
        {children}
      </div>
      <style jsx>{`
        .dropdown{
          margin: 0 auto;
        }

        .dropdown__btn{
          background-color: #06c506;
          color: white;
          text-transform: capitalize;
          padding: 0; 
          font-weight: 600;  
        }

        /* important */
        .dropdown__content{
          display: none;
          /* border: 1px solid purple; */
          width: fit-content;
          position: absolute;
          left: 0px;
          right: 500px;
          top: 100%;
        }

        /* important */
        /* .dropdown:hover > .dropdown__content{ */
          /* display: inline-block; */
          /* display: block; */
        /* } */

        .dropdown__btn:hover{
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

Dropdown.Option = Option;


