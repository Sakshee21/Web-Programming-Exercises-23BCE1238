import image from './Images/image2.jpg';


function Imagesdisplay() {
    return (
        <div>
            <h3>Image from Src Folder</h3>
            <img
                src={image}
                alt="Src"
                width="300"
            />
            <h3>From Public Folder</h3>
            <img
                src="/Images/image.jpg"
                alt="Public"
                width="300"
            />
        </div>

    );
}

export default Imagesdisplay;
