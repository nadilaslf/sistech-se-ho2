import Image from "next/image";

type LogoProps = {
    name : string;    
};

function Logo ({name} : LogoProps) {
    return(
        <section id="logo" className="logo">
            <div className="flex items-center font-urbanist">
                <h1>{name}</h1>
            </div>
        </section>
        
    );
}

export {Logo};