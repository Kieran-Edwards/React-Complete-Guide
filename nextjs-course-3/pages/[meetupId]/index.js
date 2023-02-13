import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <MeetupDetail
            image="http://placekitten.com/1000/1000"
            title="TITLE1"
            address="ADDRESS1"
            description="DESCRIPTION1"
        />
    );
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: "m1",
                },
            },
            {
                params: {
                    meetupId: "m2",
                },
            },
        ],
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    console.log(meetupId);
    return {
        props: {
            MeetupData: {
                id: meetupId,
                image: "http://placekitten.com/1000/1000",
                title: "TITLE1",
                address: "ADDRESS1",
                description: "DESCRIPTION1",
            },
        },
    };
}

export default MeetupDetails;
