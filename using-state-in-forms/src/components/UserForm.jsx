import { useState } from "react"

const UserForm = () =>
{
    const maxLength = 200;

    const [formData, setFormData] =
        useState(
            {
                userName: "",
                email: "",
                feedback: ""
            }
        );

    const handleChange = (event) => {
        let updatedData = {
            ...formData,
            [event.target.id]: event.target.value
        };

        setFormData(updatedData);
    };   

/*
        const handleChange = (event) =>
        {
        const {name, value} = event.target;

        setFormData((prevData) => (
            {
                ...prevData,
                [name]: value    
            }));
    };
*/

    return (
        <div className="feedbackForm">
            <form>
                <fieldset>
                    <legend>Feedback</legend>
                    
                    <label htmlFor="userName">Name:</label>
                    <input type="text"
                           id="userName"
                           name="userName"
                           value={formData.userName}
                           onChange={handleChange}
                           required
                           placeholder="Enter your full name"
                           maxlength="100"
                           size="40"
                    />
                                        
                    <label htmlFor="email">Email:</label>
                    <input type="email"
                           id="email"
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           required
                           placeholder="example@example.com"
                           maxlength="100"
                           size="40"
                    />
                                                      
                    <label htmlFor="feedback">Feedback:</label>
                    <textarea 
                        className="textArea"
                        id="feedback"
                        name="feedback"
                        rows="5"
                        cols="100"
                        placeholder="Enter your message here..."
                        value={formData.feedback}
                        onChange={handleChange}
                        maxLength={maxLength}
                    >        
                    </textarea>
                
                    <p className="characterCount">
                        {formData.feedback.length}/{maxLength} characters
                    </p>
                            
                    <button type="submit" disabled={!formData.userName.trim().length 
                                            || !formData.email.trim().length 
                                            || !formData.feedback.trim().length}>
                        Submit
                    </button>
               
                </fieldset>

            </form>

            <div className="preview">
                <h2>Preview:</h2>
                <p>Name: {formData.userName}</p>
                <p>Email: {formData.email}</p>
                <p>Feedback: {formData.feedback}</p>            
            </div>

        </div>
    );
}

export default UserForm;

