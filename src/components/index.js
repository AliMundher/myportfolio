

import About from "./../components/About/about";
import Blog from "./../components/Blog/blog";
import CV from "./../components/CV/cv";
import MyWork from "./MyWork/my-work";
import Footer from "./../components/Footer/footer";



function Index() {
    return (
        <div className="">
            <About />
            <Blog />
            <CV />
            <MyWork />
            <Footer />
        </div>
    );
}

export default Index;
