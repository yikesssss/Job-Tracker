// console.log("it works!");

const api = import.meta.env.SHETT_LINK; //fix this to actually work

const titleIn = document.getElementById("titleInput");
const companyIn = document.getElementById("companyInput");
const bttn = document.getElementById("submitbbtn");

bttn.addEventListener('click', () => {
    const time = new Date()
    const title = titleIn.value;
    const company = companyIn.value;

    // console.log(time.toDateString() + " " + title + " " + company);

    fetch(api, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
            date: time.toLocaleDateString(),
            title: title,
            company: company
        })
    });

    titleIn.value = "";
    companyIn.value = "";

    

})