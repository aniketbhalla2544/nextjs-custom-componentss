import Link from 'next/link';

export default function Option({ optionStyle, href, children }) {
  return (
    <div className="dropdown__option">
      <Link href={href}>
        <a className={(!optionStyle) ? `dropdown__link necessaryStyling` : `necessaryStyling ${optionStyle}`}>
          {children}
        </a>
      </Link>
      <style jsx>{`
        .dropdown__option{
          /* border: 2px solid red; */
        }
        
        .dropdown__link {
          padding: 0.5rem 1rem;
          text-transform: capitalize;
          background-color: #cccccc;
          border-bottom: 1px solid white;
          color: #222222;
        }

        .necessaryStyling{
          display: block;
          height: 100%;
        }

        .dropdown__link:hover{
          background-color: #a3a3a3;
        }
      `}</style>
      <style jsx global>{`
       
      `}</style>
    </div >
  )
}

