import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
    return (
        <Fragment>
            <h1>NewsPage</h1>
            <ul>
                <li>
                    <Link href="/news/link1">Link 1</Link>
                </li>
                <li>Link 2</li>
            </ul>
        </Fragment>
    );
}

export default NewsPage;
