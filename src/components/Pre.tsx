
interface Prop {
    load: boolean
}

function Pre(props: Prop) {
    return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
