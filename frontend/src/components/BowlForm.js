import React, { useState, useEffect, useCallback } from "react"
import Cookies from 'js-cookie'

function BowlForm({ setLoaded }) {
    const [name, setName] = useState("")
    const [style, setStyle] = useState("Miso")
    const [rating, setRating] = useState("1")
    const [comment, setComment] = useState("")

    // sets loaded to false after form submission so that bowl list reloads
    const handleLoaded = useCallback(() => {
        setLoaded(false)
    }, [setLoaded])

    function handleSubmit(event) {
        event.preventDefault()

        // gets CSRF token from cookies
        const csrftoken = Cookies.get('csrftoken')
        // posts form data to DRF, which saves it in database 
        fetch("api/bowl/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify({
                "name": name,
                "style": style,
                "rating": rating,
                "comment": comment,
                // gets user id that's exposed in index.html via window
                "author": window.django.user.id
            })
        })

        // resets form values to empty and defaults
        setName("")
        setStyle("Miso")
        setRating("1")
        setComment("")

        // reset loaded
        handleLoaded()
    }

    return (
        <div className="form-component">
            <h3>Add a new bowl</h3>
            <form onSubmit={handleSubmit}>
                {/* bowl name */}
                <div className="form-item">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input
                        name="name"
                        id="name"
                        className="form-input"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                {/* bowl style */}
                <div className="form-item">
                    <label className="form-label" htmlFor="style">Style</label>
                    <select
                        name="style"
                        id="style"
                        className="form-input"
                        value={style}
                        onChange={e => setStyle(e.target.value)}>
                        <option value="Miso">Miso</option>
                        <option value="Shio">Shio</option>
                        <option value="Shoyu">Shoyu</option>
                        <option value="Tonkotsu">Tonkotsu</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* bowl rating */}
                <div className="form-item">
                    <label className="form-label" htmlFor="rating">Rating</label>
                    <select
                        name="rating"
                        id="rating"
                        className="form-input"
                        value={rating}
                        onChange={e => setRating(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                {/* bowl comment */}
                <div className="form-item">
                    <label className="form-label" htmlFor="comment">Comment</label>
                    <input
                        name="comment"
                        id="comment"
                        className="form-input"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                </div>

                <button type="submit">Add bowl</button>
            </form>
        </div>
    )
}

export default BowlForm;