function Sections(props) {
    return (
        <div className="sections">
            <section>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.subtitle}</p>
                    <ul className={props.className}>
                        {props.children}
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Sections;