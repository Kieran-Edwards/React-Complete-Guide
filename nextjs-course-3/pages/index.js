import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: "m1",
        image: "http://placekitten.com/1000/1000",
        title: "TITLE1",
        address: "ADDRESS1",
        description: "DESCRIPTION1",
    },
    {
        id: "m2",
        image: "http://placekitten.com/2000/2000",
        title: "TITLE2",
        address: "ADDRESS2",
        description: "DESCRIPTION2",
    },
];

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>;
}

export default HomePage;
