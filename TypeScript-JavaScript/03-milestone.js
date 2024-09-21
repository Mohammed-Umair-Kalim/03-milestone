document.addEventListener("DOMContentLoaded", () => {
    const button1 = document.getElementById("btn1");
    const resumeForm = document.getElementById("resumeForm");
    function validateForm() {
        const requiredInputs = resumeForm.querySelectorAll("input[required]");
        for (let input of requiredInputs) {
            const inputElement = input;
            if (!inputElement.value.trim()) {
                return false;
            }
        }
        return true;
    }
    button1.addEventListener("click", (event) => {
        event.preventDefault();
        if (validateForm()) {
            const button1 = document.getElementById("btn1");
            button1?.addEventListener("click", () => {
                const newTab = window.open();
                if (newTab) {
                    const name = document.getElementById('name').value;
                    const age = document.getElementById('age').value;
                    const email = document.getElementById('email').value;
                    ;
                    const exp = document.getElementById('exp').value;
                    ;
                    const edu = document.getElementById("edu").value;
                    const ski = document.getElementById("ski").value;
                    const ski2 = document.getElementById("ski2").value;
                    const ski3 = document.getElementById("ski3").value;
                    const ski4 = document.getElementById("ski4").value;
                    const ski5 = document.getElementById("ski5").value;
                    newTab.document.write(`
            <style>
            #div2{
    background-color: rgba(182, 182, 182, 0.74);
    font-size:x-large;
     padding-block-end: 150px;
     margin:100px;

}
            </style>
            <hr>
        <div id="div2" align="center"">

        <h2><u>Interactive Dynamic Resume:</u></h2>
        <img id="image" src="../image/giaic.jpg" width="150px" height="150px"src="" alt="image"/><hr>
        <b>Name:</b> ${name}<hr>
        <b>Age:</b> ${age}<hr>
        <b>Email Address:</b> ${email}<hr>
        <b>Education:</b> ${edu}<hr>
        <b>Work Experience:</b> ${exp}<hr>
        <b>Skill/s:</b><br>
        
        1-${ski}<br>
        2-${ski2}<br>
        3-${ski3}<br>
        4-${ski4}<br>
        5-${ski5} <hr>

        </div>

        `);
                    newTab.document.close();
                }
            });
        }
        else {
            alert("Please fill out all the required fields * before generating resume.");
        }
    });
});
