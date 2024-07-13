type FooterProps = {
    name: string;
};

function Footer ({name}: FooterProps) {
    return (
            <h4 className="my-8 mr-6 text-right pt-4">Made by {name}</h4>
    )
}

export {Footer};