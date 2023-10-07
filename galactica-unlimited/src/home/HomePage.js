import background from "./space.jpg";
import DestinationSelection from "./destinations/DestinationSelection";

function HomePage() {
    return (
        <div id="HomePage" style={{backgroundImage: `url(${background})`}}>
            <DestinationSelection/>
        </div>
    );
}

export default HomePage;