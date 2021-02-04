

import About from "./../components/About/about";
import Services from "./../components/Services/services";
import CV from "./../components/CV/cv";
import MyWork from "./MyWork/my-work";
import Footer from "./../components/Footer/footer";



function Index() {
    return (
        <div className="">
            <About />
            <Services />
            <CV />
            <MyWork />
            <Footer />
        </div>
    );
}

export default Index;
