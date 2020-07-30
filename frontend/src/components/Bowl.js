import React, { Component, useState, useEffect } from "react";

const Bowl = ({ name, style, comment, rating, username, date_added }) => {
    return (
        <div className="bowl-item">
            <h2>{name}</h2>
            <h4>Style: {style}</h4>
            <h4>Rating: {rating}</h4>
            <p>{comment}</p>
            {/* currently not displaying author - need to fix DRF serializer */}
            <small>Author: {username}</small>
            <small>Date: {date_added}</small>
        </div>
    );
}

export default Bowl;