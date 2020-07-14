import React, { Component, useState, useEffect } from "react";

const Bowl = ({ name, style, comment }) => {
    return (
        <div>
            <h2>{name}</h2>
            <h4>{style}</h4>
            <p>{comment}</p>
        </div>
    );
}

export default Bowl;