import {Navigation, Hero, FeatureContainer, Footer} from "../Components";

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