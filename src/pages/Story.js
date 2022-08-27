import React from "react";
import { useParams } from "react-router-dom";

export default function Story(props) {
    const { id } = useParams();

    return <div>Story {id}</div>;
}
