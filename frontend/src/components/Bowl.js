import React, { Component, useState, useEffect } from "react";

const Bowl = ({ name, style, comment, rating }) => {
    return (
        <div>
            <h2>{name}</h2>
            <h4>{style}</h4>
            <h4>Rating: {rating}</h4>
            <p>{comment}</p>
        </div>
    );
}

export default Bowl;