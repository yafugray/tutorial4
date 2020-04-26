import Link from 'next/link';
import Router from 'next/router';
import './index.css';
import {FaSearchMinus} from 'react-icons/fa';
import {GiLightningTree} from 'react-icons/gi';


function ClickIndex() {
    document.querySelector('#mainapp').style.right = "-100%";
    setTimeout(function(){
        Router.push("/ChatPage");
    }, 1000)
}

const Index = () => <div id="mainapp">
    <div onClick={ClickIndex}>Index</div>
    <FaSearchMinus/>
    
    
    <Link href="/ChatPage"><button><GiLightningTree color="#BBC" /> Chat!</button></Link>
    <Link href="/Contact"><button>Contact Us!</button></Link>
 {/* why link? we are still using the same js file, a makes different. That's why we use link not 'a' */}
</div>

export default Index;