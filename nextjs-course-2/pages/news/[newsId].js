import { useRouter } from "next/router";

function DetailPage() {
    const router = useRouter();

    const newsId = router.query.newsId;

    return <h1>DetailPage</h1>;
}

export default DetailPage;
