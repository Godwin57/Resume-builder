import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ResumeViewer from "./components/ResumeViewer";
import './App.css'

function App() {
    const [formData, setFormData] = useState({});
    const [hideForm, setHideForm] = useState(false);

    return (
        <div className="container">
            <Header />
            {!hideForm? <Form formData = {formData} setFormData= {setFormData} setHideForm = {setHideForm}/> :
            <ResumeViewer formData = {formData} setHideForm = {setHideForm}/>}
        </div>
    );
}

export default App;