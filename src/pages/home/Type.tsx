import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Software Developer",
                    "Angular Developer",
                    "React Developer",
                    "Java SpringBoot Developer",
                    "Node JS Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 20,
            }}
        />
    );
}

export default Type;
