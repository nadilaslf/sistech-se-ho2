import {Navigation, Hero, Footer} from "../Components";
import FeatureContainer from '../Components/Feature/FeatureContainer';

export default function Home(){
    return (
        <div className="container">
            <div className="w-full min-h-screen">
                <Navigation feature1="Kelas" feature2="Perpustakaan" feature3="Komunitas" />
                <Hero />
            </div>
            <FeatureContainer/>
            <Footer name={"Nadila"} />
        </div>
        
    );
}