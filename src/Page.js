import React from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";
import Sixth from "./Sixth";
import Seventh from "./Seventh";
import Eighth from "./Eighth";
import Ninth from "./Ninth";

function Page(props){
    return(<div>
        <First letter = {props.acronym[0]}/>
        <Second letter = {props.acronym[1]}/>
        <Third letter = {props.acronym[2]}/>
        <Fourth letter = {props.acronym[3]}/>
        <Fifth letter = {props.acronym[4]}/>
        <Sixth letter = {props.acronym[5]}/>
        <Seventh letter = {props.acronym[6]}/>
        <Eighth letter = {props.acronym[7]}/>
        <Ninth letter = {props.acronym[8]}/>
    </div>)
}
export default Page;