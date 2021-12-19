import React, {useState} from "react";
import "./Card.css";
import Zmage from "react-zmage";
// import {StyleSheet, Image, View} from 'react-native';



export default function Card(props) {
    // const [style, setStyle] = useState({display: 'none'});
    const name = props.info.name;
    const date = props.info.date;
    const story = props.info.story;
    const pic = "/images/artImages/"+props.info.image;
    return(
            <div className="container item">
                <div className="pic">
                    <Zmage 
                    src={process.env.PUBLIC_URL+pic}/>
                </div>
                <div className="hide text">
                    <p>
                        {name}<br/>
                        {date}<br/>
                        {story}
                    </p>
                </div>
            </div>
    );
}