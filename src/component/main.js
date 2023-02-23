import HeroSlider from "./slider";
import CardGroup1 from "./cardgroup";
import TextForm from "./form";
import Counter from "./counter";

const title = ['title1', 'title2', 'title3', 'title4', 'title5', 'title6']
function Main(props) {
    return (
        <>
            <div className="hero-section">
                <HeroSlider />
            </div>
            <div className="cards-wrapper">
                <div className="container">
                    <div className="row">
                        <CardGroup1 title={title} mode={props.mode} />
                    </div>
                </div>
            </div>
            <div className="form-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 p-4">
                            <TextForm mode={props.mode} setAlert={props.setAlert}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="counter-wrapper my-4">
                <div className="container">
                    <Counter />
                </div>
            </div> 
        </>
    );
}
export default Main;