import { usePathname } from 'next/navigation'
import styles from './navLink.module.css'

const NavLink = (item) => {

    const pathName = usePathname();
    return (
        <Link href={item.path} className ={`$`}>
            {item.title}
        </Link>
    )
}

export default NavLink