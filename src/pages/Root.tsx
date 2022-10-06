import useRouter from "../hooks/useRouter";

const Root = () => {
    const { push } = useRouter();

    return (
        <div className="wrapper">
            <div className="title">root</div>
            <button className="btn" onClick={()=> push("/about")}>about</button>
        </div>
    )
};

export default Root;