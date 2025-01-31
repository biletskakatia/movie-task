import { Link } from "react-router-dom";
import css from './NotFoundPage.module.css';
export default function NotFoundPage() {
    return (
        <div className={css.container}>
            <h2 className={css.message }>Not page found! </h2>
            <Link to ="/" className={css.link}>Please go to Home page</Link>
        </div>
    );
}