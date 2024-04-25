import { useState } from 'react'
import imdb from '../../assets/imdb.jpeg'
import bookstore from '../../assets/bookstore.png'
import truecaller from '../../assets/truecaller.png'
import ClickButton from '../TabButton/TabButton'
import './AppCoverPage.css'


const pageName = ["IMDB", "BookStore", "TrueCaller"];
export const authorName = "Akhila";
export const AppHeaderDetails = {
    imdb: {
        title: "IMDB",
        description: "IMDB rating for Movies",
        image: {imdb}
    },
    bookstore: {
        title: "BOOKSTORE",
        description: "Books and their Details",
        image: {bookstore}
    },
    truecaller: {
        title: "TRUECALLER",
        description: "Person Details by a Phone Num",
        image: {truecaller}
    }
}

function RandomNumber() {
    return Math.floor(Math.random() * pageName.length);
}

export function MyPageName() {
    return pageName[RandomNumber()];
}


function AppHeader(props) {
    const stmt="I am " + props.title
    return (
        <div>
            <li>
                <img src={props.image} className="logo" alt="App logo" />
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <ClickButton stmt={stmt}>Click Here</ClickButton>
            </li>
        </div>
    );
}

export function AppExamples() {
    const [tabContent, setTabContent] = useState("To know more, click on any of the above components")
    // function handleSelect(actualDesc) {
    //     setTabContent(actualDesc);
    // }
    return (
        <>
            <h2 className="examples">Examples:</h2>
            <ul>
                <button id="examples-button" onClick={() => setTabContent(AppHeaderDetails.imdb.description)}>{AppHeaderDetails.imdb.title}</button>
                <button id="examples-button" onClick={() => setTabContent(AppHeaderDetails.bookstore.description)}>{AppHeaderDetails.bookstore.title}</button>
                <button id="examples-button" onClick={() => setTabContent(AppHeaderDetails.truecaller.description)}>{AppHeaderDetails.truecaller.title}</button>
            </ul>
            <p id="examples-description">{tabContent}</p>
        </>
    );
}

function AppCoverPage() {
    return (
        <div>
            <main>
                <section id="core-concepts">
                    <ul>
                    <AppHeader 
                        image={AppHeaderDetails.imdb.image.imdb}
                        title={AppHeaderDetails.imdb.title}
                        description={AppHeaderDetails.imdb.description}
                    />
                    <AppHeader 
                        image={AppHeaderDetails.bookstore.image.bookstore}
                        title={AppHeaderDetails.bookstore.title}
                        description={AppHeaderDetails.bookstore.description}
                    />
                    <AppHeader 
                        image={AppHeaderDetails.truecaller.image.truecaller}
                        title={AppHeaderDetails.truecaller.title}
                        description={AppHeaderDetails.truecaller.description}
                    />
                    </ul>
                    <AppExamples />
                    {/* <AppExamplesEffect /> */}
                </section>
            </main>
        </div>
    );
}

export default AppCoverPage
