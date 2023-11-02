import { useState } from "react";

function Form({formData, setFormData, setHideForm}) {
    const [data, setData] = useState({
        name: formData.name || '',
        email: formData.email || '',
        mobile: formData.mobile || '',
        collegeName: formData.collegeName || '',
        studyTitle: formData.studyTitle || '',
        studyDate: formData.studyDate || '',
        companies: formData.companies || '',
        officeHeld: formData.officeHeld || '',
        dateResumed: formData.dateResumed || '',
        active: formData.active || true,
        dateLeft: formData.dateLeft || '',
    });

    function submitForm(e){
        e.preventDefault();

        const {name, email, mobile, collegeName, studyTitle, studyDate, companies, officeHeld, 
            active, dateResumed, dateLeft} = data;

        if(!(name && email && mobile)) {
            alert("Complete your Personal information details")
            return;
        };

        if(!(collegeName && studyDate && studyTitle)) {
            alert("Complete your Educational experience details")
            return;
        };

        if(!active){
            if(!(companies && officeHeld && dateResumed && dateLeft)) {
                alert("Complete your Professional experience details")
                return;
            };
        }

        if(!(companies && officeHeld && dateResumed)){
            alert("Complete your Professional experience details");
            return;
        }

        setFormData(data);
        setHideForm(true);
    }

    return (
        <form className="form-container">
            {/* General experience */}
            <div className="gen-exp">
                <h2>Personal Information</h2>
                <p>Full name:</p>
                <input type="text" value={data.name} onChange={e => setData({...data, name: e.target.value})}/>
                <p>Email</p>
                <input type="email" value={data.email} onChange={e => setData({...data, email: e.target.value})}/>
                <p>Enter your mobile number</p>
                <input type="number" value={data.mobile} onChange={e => setData({...data, mobile: e.target.value})}/>
            </div>
            {/* Educational experience */}
            <div className="edu-exp">
                <h2>Educational Experience</h2>
                <p>College/ institution's name</p>
                <input type="text" value={data.collegeName} onChange={e => setData({...data, collegeName: e.target.value})}/>
                <p>Title of Study</p>
                <input type="text" value={data.studyTitle} onChange={e => setData({...data, studyTitle: e.target.value})}/>
                <p>Date of Study completion</p>
                <input type="date"value={data.studyDate} onChange={e => setData({...data, studyDate: e.target.value})}/>
            </div>
            {/* Practical experience */}
            <div className="prac-exp">
                <h2>Professional Experience</h2>
                <p>Company(ie) worked for </p>
                <input type="text" value={data.companies} onChange={e => setData({...data, companies: e.target.value})}/>
                <p>Office/ position in company</p>
                <input type="text" value={data.officeHeld} onChange={e => setData({...data, officeHeld: e.target.value})}/>
                <p>Date you resumed office</p>
                <input type="date" value={data.dateResumed} onChange={e => setData({...data, dateResumed: e.target.value})}/>
                <p>Still in office <input type="checkbox" checked={data.active}  onChange={e => setData({...data, active: e.target.checked})}/></p>
                {!data.active && <div><p>Date you left office(Leave empty if still in position)</p>
                <input type="date" value={data.dateLeft} onChange={e => setData({...data, dateLeft: e.target.value})}/>
                </div>}
            </div>
            <button type="submit" onClick={e => submitForm(e)}>Submit</button>
        </form>
    );
}

export default Form;