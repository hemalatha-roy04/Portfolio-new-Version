import React from 'react';


function Skills() {
    const imgStyle = {
        height: '600px', // Sett ønsket høyde her
        width: '100vw'    // Sett ønsket bredde her
    };

    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.WeX8Uvgs4gxgeVRGvJR7aQHaDt&pid=Api&P=0&h=180.jpg" className="d-block w-100" style={imgStyle} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://tse2.mm.bing.net/th?id=OIP.Cqt6j3TVGiYzPIwcrii1_gHaDt&pid=Api&P=0&h=180.jpg" className="d-block w-100" style={imgStyle} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.Z7oz-UE96cn06LU5Uid04gHaEK&pid=Api&P=0&h=180.jpg" className="d-block w-100" style={imgStyle} alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://tse1.mm.bing.net/th?id=OIP.YePVzjkjsadOqzQ03wl5kAHaEO&pid=Api&P=0&h=180.jpg" className="d-block w-100" style={imgStyle} alt="Fourth slide"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.S_9pgiKacbi3FxPKxDmusgHaFy&pid=Api&P=0&h=180.jpg" className="d-block w-100" style={imgStyle} alt="Fifth slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    );
}

export default Skills;
