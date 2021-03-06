import data from '../../content.json'

const TechStack = () => {
    return (
        <section id="techstack">
            <div className="label">
                <small>I use these</small>
                <h1>Techstack and Tools</h1>
            </div>
            <div className="techs">
                <div className="tech">
                    <div className="image frontend"></div>
                    <div className="details">
                        <h3>Frontend Development</h3>
                        <ul>
                            {data.techstacks.frontend.stacks.map(e => {
                                return (
                                    <li>{e}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="tech">
                    <div className="image backend"></div>
                    <div className="details">
                        <h3>Backend Development</h3><ul>
                            {data.techstacks.backend.stacks.map(e => {
                                return (
                                    <li>{e}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="tech">
                    <div className="image tools"></div>
                    <div className="details">
                        <h3>Tools and Frameworks</h3><ul>
                            {data.techstacks.tools.stacks.map(e => {
                                return (
                                    <li>{e}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="tech">
                    <div className="image ui"></div>
                    <div className="details">
                        <h3>UI/UX Design</h3><ul>
                            {data.techstacks.ui.stacks.map(e => {
                                return (
                                    <li>{e}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="stacks">
                <div className="stack">
                    <div className="image">
                        <img src={data.techstacks.frontend.cover_img} alt="Frontend" />
                    </div>
                    <div className="details">
                        <h3>Frontend</h3>
                        <ul>
                            {data.techstacks.frontend.stacks.map(e => {
                                return (
                                    <li>{e}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="stack">
                    <div className="image">
                        <img src={data.techstacks.backend.cover_img} alt="Backend" />
                    </div>
                    <div className="details">
                        <h3>Backend</h3>
                        <ul>
                            {data.techstacks.backend.stacks.map(e => {
                                return (
                                    <li>{e}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="stack">
                    <img src={data.techstacks.tools.cover_img} alt="Tools" />
                    <div className="details">
                        <h3>Tools</h3>
                        <ul>
                            {data.techstacks.tools.stacks.map(e => {
                                return (
                                    <li>{e}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export default TechStack