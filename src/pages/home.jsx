const Homepage = () => {
    return (
        <div>
            {/* <!-- ! start scroll to top button --> */}
            <button
                id="scrollToTopBtn"
                className="btn btn-outline rounded-circle"
                title="Go to top"
            >
                <i className="fa-solid fa-arrow-up"></i>
            </button>
            {/* <!-- ! start main section --> */}

            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="../src/assets/images/Cover_5.png" className="d-block w-100" alt="..." />
                    </div>

                    <div className="carousel-item">
                        <img src="../src/assets/images/edite.png" className="d-block w-100" alt="..." />
                    </div>

                    <div className="carousel-item">
                        <img src="../src/assets/images/edited 2.png" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* <!--! ending main section--> */}

            {/* <!--! start category section--> */}

            <div className="sub-nav">
                <h1 className="dynapuff">CATEGORY</h1>
            </div>

            <section className="category container" id="cat">
                <div className="cat-con">
                    <a href="#"><img src="../src/assets/images/HO.png" /></a>
                    <a href="#"
                    ><img src="../src/assets/images/JA_aebd9e3f-614d-433b-bab8-61b6ebff4787.png"
                        /></a>
                    <a href="#"><img src="../src/assets/images/Kids.png" /></a>
                </div>
            </section>

            {/* <!--! ending category section--> */}
            {/* <!--! start decoration section --> */}
            <div className="container deco rounded-5">
                <div className="deco-bg rounded-5">
                    {/* <!-- <img src="./images/decoration.png" alt="decoration"> --> */}
                </div>
                <div
                    className="deco-con m-auto rounded-5 text-center d-flex flex-column justify-content-center align-items-center"
                >
                    <h1 className="dynapuff">DRESS LOUD</h1>
                    <p>vibrant fits for extroverted energy. the new collection drops now</p>
                    <span className="links">
                        <button href="#" className="btn btn-outline rounded-pill dynapuff">
                            shop the Drop
                        </button>
                        <button href="#" className="btn btn-outline rounded-pill dynapuff">
                            view collection
                        </button>
                    </span>
                </div>
            </div>
            {/* <!--! end decoration section --> */}
            {/* <!--! start Drop list section  --> */}
            <div className="container drop-list w-100 mt-3">
                <h1 className="dynapuff">New Drops</h1>
                <div className="drop-list-con d-flex justify-content-between flex-wrap">
                    <div className="drop-item dynapuff">
                        <img src="../src/assets/images/drop item 4 .png" />
                        <div className="it-con">
                            <span className="texts">
                                <h4>Cobalt Core Hoodie</h4>
                                <p>85$</p>
                            </span>
                            <button className="btn">+</button>
                        </div>
                    </div>

                    <div className="drop-item dynapuff">
                        <img src="../src/assets/images/drop item 3 .png" />
                        <div className="it-con">
                            <span className="texts">
                                <h4>Geo Pulse Shirt</h4>
                                <p>85$</p>
                            </span>
                            <button className="btn">+</button>
                        </div>
                    </div>

                    <div className="drop-item dynapuff">
                        <img src="../src/assets/images/drop item 2 .png" />
                        <div className="it-con">
                            <span className="texts">
                                <h4>Fluid Cargo Pants</h4>
                                <p>85$</p>
                            </span>
                            <button className="btn">+</button>
                        </div>
                    </div>

                    <div className="drop-item dynapuff">
                        <img src="../src/assets/images/drop item 1 .png" />
                        <div className="it-con">
                            <span className="texts">
                                <h4>Neon Rib Beanie</h4>
                                <p>85$</p>
                            </span>
                            <button className="btn">+</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--! end Drop list section  --> */}
        </div>
    );
}

export default Homepage;