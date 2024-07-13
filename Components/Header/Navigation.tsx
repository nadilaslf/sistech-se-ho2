import {Logo} from "./Logo";

type NavigationProps = {
    feature1 : string;
    feature2 : string;
    feature3 : string;
}

function Navigation ({feature1, feature2, feature3} : NavigationProps) {
    return (
        <div className="flex justify-between px-8">
            <Logo name="Gradient"/>
            <div className="flex gap-12">
                <p>{feature1}</p>
                <p>{feature2}</p>
                <p>{feature3}</p>
            </div>
        </div>
    );
}

export { Navigation };