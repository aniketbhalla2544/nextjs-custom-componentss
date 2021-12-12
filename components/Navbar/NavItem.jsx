import Link from "next/link";
import Dropdown from "../Dropdown/Dropdown";

export default function NavItem({ navItemData }) {
  console.log(navItemData);
  return (
    <div>
      {
        (!navItemData.select.length > 0)
          ? (
            <Link href={navItemData.link}>
              <a>{navItemData.title}</a>
            </Link>
          )
          : (
            <Dropdown btnStyle="navItem__btnStyle" name={navItemData.title}>
              {
                navItemData.select.map((selectData, index) => {
                  return <Dropdown.Option key={index} href={navItemData.link}>{selectData.title}</Dropdown.Option>
                })
              }
            </Dropdown>
          )
      }
    </div>
  )
}