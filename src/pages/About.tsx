import useRouter from "../hooks/useRouter";

const About = () => {
    const { push } = useRouter();

    return (
        <div className="wrapper">
            <div className="title">about</div>
            <button className="btn" onClick={()=> push("/") }>go main</button>
        </div>
    )
};

export default About;