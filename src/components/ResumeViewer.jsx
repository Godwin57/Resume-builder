function ResumeViewer({formData, setHideForm}) {
    const {name, email, mobile, collegeName, studyTitle, studyDate, companies, officeHeld, 
        active, dateResumed, dateLeft} = formData;
        
    return (
        <>
            <div className="display-section">
                <div className="per-info">
                    <h2>Personal Information</h2>
                    <p>Name: {name}</p>
                    <p>E-mail: {email}</p>
                    <p>Mobile number: {mobile}</p>
                </div>
                <br />
                <div className="edu-exp">
                    <h2>Educational Experience</h2>
                    <p>Institution name: {collegeName}</p>
                    <p>Study title: {studyTitle}</p>
                    <p>Date of study: {studyDate}</p>
                </div>
                <br />
                <div className="pro-exp">
                    <h3>Professional and Industrial Experience</h3>
                    <p>Company/ Organization name: {companies}</p>
                    <p>Office/ Position held in company: {officeHeld} </p>
                    <p>Date of work resumption in company: {dateResumed}</p>
                    {!active && <p>Date of leaving company: {dateLeft}</p>}
                </div>
                <button onClick={e => setHideForm(false)}>Edit CV</button>
            </div>
        </>
    );
}

export default ResumeViewer;