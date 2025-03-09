import { useEffect } from "react";
import { Carousel } from "bootstrap";

import "./pixel-slider.css"

import StardewIcon from "../../assets/Stardew_Valley_executable_icon.png";

import StardewFarm_1 from "../../assets/Farm_1.png";
import StardewFarm_2 from "../../assets/Farm_2.png";
import StardewFarm_3 from "../../assets/Farm_3.png";

import Strawberry from "../../assets/Strawberry.png";
import Rabbit from "../../assets/Rabbit.png";
import IridiumPickaxe from "../../assets/Iridium_Pickaxe.png";

import PelicanTown from "../../assets/Pelican_Town.png";
import GingerIsland from "../../assets/Ginger_Island.png";
import MinesEntrance from "../../assets/MinesEntrance.png";

export default function PixelFarmSlider() {
    useEffect(() => {
        // Отримуємо елемент каруселі
        const carouselElement = document.getElementById("carouselExampleCaptions");

        if (carouselElement) {
            new Carousel(carouselElement, { interval: 5000, ride: "carousel" });
        }
    }, []);

    return (
        <div className="main"> {/* Main design */}
            <div className="container-fluid">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
                    <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                        <img className="me-3" src={StardewIcon} alt="Stardew Valley" width="40" height="40" />
                        <div>
                            <span className="fs-3 text-uppercase text-header d-block">Stardew Valley</span>
                            <span className="fs-8 text-signature d-block">Pixel Farm Adventures</span>
                        </div>
                    </div>

                    <ul className="nav d-flex align-items-center justify-content-center">
                        <li className="nav-item"><a href="/pixelFarmSlider" className="nav-link active text-header text-uppercase" aria-current="page">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-header text-uppercase">Farm</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-header text-uppercase">Seasons</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-header text-uppercase">Villagers</a></li>
                        <li className="nav-item"><a href="https://stardewvalleywiki.com/Stardew_Valley_Wiki" className="nav-link text-header text-uppercase">Fandom</a></li>
                    </ul>
                </header>

                {/* Line */}
                <div className="main-border"></div>

                {/* Welcoming text */}
                <div className="text-center">
                    <h2 className="text-uppercase text-signature welcome-text fs-3">Welcome to your pixel farm</h2>
                    <p className="mt-4 text-header font-pixelify fs-5 text-limited">Escape to the countryside and build the farm of your dreams. Grow crops, raise animals, craft products, and explore the charming world of Stardew Valley.</p>
                </div>

                {/* Slider */}
                <div id="carouselExampleCaptions" className="carousel slide custom-carousel mt-4">
                    {/* Індикатори */}
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                    </div>

                    {/* Слайди */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={StardewFarm_1} className="d-block w-100 slide-image" alt="Stardew Valley Farm 1"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Your Farm</h5>
                                <p>Start with an overgrown plot and turn it into the farm of your dreams!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={StardewFarm_2} className="d-block w-100 slide-image" alt="Stardew Valley Farm 2"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Seasons Change</h5>
                                <p>Experience the beauty of different seasons and adapt your farm accordingly.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={StardewFarm_3} className="d-block w-100 slide-image" alt="Stardew Valley Farm 3"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Meet the Villagers</h5>
                                <p>Befriend the locals, form relationships, and start a new life in town!</p>
                            </div>
                        </div>
                    </div>

                    {/* Кнопки навігації */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* Farm Features */}
                <div className="container">
                    <h2 className="mt-5 text-center text-uppercase text-header welcome-text fs-3">
                        Farm Features
                    </h2>

                    <div className="mt-4 row justify-content-center">
                        <div className="col-md-4 d-flex justify-content-center">
                            <div className="feature-box">
                                <img src={Strawberry} alt="Strawberry" className="feature-icon" />
                                <h3 className="feature-title">Grow Crops</h3>
                                <p className="text-header font-pixelify fs-6">
                                    Plant and harvest seasonal crops to sell or use in crafting recipes.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 d-flex justify-content-center">
                            <div className="feature-box">
                                <img src={Rabbit} alt="Cow Icon" className="feature-icon" />
                                <h3 className="feature-title">Raise Animals</h3>
                                <p className="text-header font-pixelify fs-6">
                                    Take care of cows, chickens, and other farm animals to produce goods.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 d-flex justify-content-center">
                            <div className="feature-box">
                                <img src={IridiumPickaxe} alt="Tools Icon" className="feature-icon" />
                                <h3 className="feature-title">Upgrade Tools</h3>
                                <p className="text-header font-pixelify fs-6">
                                    Improve your tools to work more efficiently on your farm.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* A little about Stardew Valley */}
                <div className="container mt-5">
                    <h2 className="text-center text-uppercase text-header welcome-text fs-3">
                        A little about Stardew Valley
                    </h2>

                    <div className="mt-4 row justify-content-center">
                        {/* Pelican Town */}
                        <div className="col-12 mb-4">
                            <div className="about-box d-flex flex-column flex-md-row align-items-center">
                                <img src={PelicanTown} alt="Pelican Town" className="about-icon border border-5" />
                                <div className="ms-md-3 mt-3 mt-md-0 text-center text-md-start">
                                    <h5 className="about-title fw-bold">Pelican Town.</h5>
                                    <h6 className="text-success fw-bold">Community center.</h6>
                                    <p className="mt-3 card-text text-muted font-pixelify fs-5">
                                        The heart of Stardew Valley, home to over 30 villagers with unique personalities and schedules. Restore the abandoned community center and explore its many shops and seasonal festivals.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Ginger Island */}
                        <div className="col-12 mb-4">
                            <div className="about-box d-flex flex-column-reverse flex-md-row-reverse align-items-center">
                                <img src={GingerIsland} alt="Ginger Island" className="about-icon border border-5" />
                                <div className="me-md-3 mt-3 mt-md-0 text-center text-md-end">
                                    <h5 className="about-title fw-bold">Ginger Island.</h5>
                                    <h6 className="text-success fw-bold">Tropical paradise.</h6>
                                    <p className="mt-3 card-text text-muted font-pixelify fs-5">
                                        A mysterious island added in the 1.5 update. Unlock it by repairing Willy’s boat and discover new farm areas, volcanic dungeons, and hidden treasures.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* The Mines */}
                        <div className="col-12 mb-4">
                            <div className="about-box d-flex flex-column flex-md-row align-items-center">
                                <img src={MinesEntrance} alt="The Mines" className="about-icon border border-5" />
                                <div className="ms-md-3 mt-3 mt-md-0 text-center text-md-start">
                                    <h5 className="about-title fw-bold">The Mines.</h5>
                                    <h6 className="text-success fw-bold">Dangerous exploration.</h6>
                                    <p className="mt-3 card-text text-muted font-pixelify fs-5">
                                        A deep dungeon filled with monsters, ores, and treasures. Venture through different environments, from dirt caves to frozen depths and lava chambers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Footer */}
                <footer className="footer text-center mt-5">
                    <p className="footer-text">Stardew Valley Copyright © 2016-2025 ConcernedApe LLC</p>
                    <div className="footer-links">
                        <a href="https://x.com/concernedape" className="footer-link">Twitter</a>
                        <a href="https://discord.com/invite/StardewValley" className="footer-link">Discord</a>
                        <a href="https://www.reddit.com/r/StardewValley/" className="footer-link">Reddit</a>
                    </div>
                </footer>
            </div>
        </div>
    );
}