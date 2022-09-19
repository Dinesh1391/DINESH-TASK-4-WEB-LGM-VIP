const data = [
    {
        Name: "Harshal",
        TOC:"97",
        SPOS:"98",
        SPM:"100",
        DBMS:"99",
        CNS: "95",

    
    },
    {
        Name: "Dinesh",
        TOC:"97",
        SPOS:"95",
        SPM:"99",
        DBMS:"93",
        CNS: "91",
      
    },
    {
        Name: "Yogesh",
        TOC:"90",
        SPOS:"92",
        SPM:"96",
        DBMS:"94",
        CNS: "90",
      
    },
    {
        Name: "Dipak",
        TOC:"97",
        SPOS:"98",
        SPM:"90",
        DBMS:"99",
        CNS: "90",
    },
    {
        Name: "Dipak",
        TOC:"97",
        SPOS:"93",
        SPM:"100",
        DBMS:"99",
        CNS: "90",
    }
]

const results = document.getElementById('results')

const submit= document.getElementById('submit')
submit.addEventListener("click", function() {
    const Name = document.getElementById('num-box').value;
    for(let i = 0; i < data.length; i++){
        if(data[i].Name.toLowerCase() == Name.toLowerCase()){
            console.log(data[i].marks)
            results.innerHTML =
             "<h3>" + "TOC: " + data[i].TOC +"</h3>" + 
             "<h3>" + "SPOS : " + data[i].SPOS +"</h3>" + 
             "<h3>" + "SPM : " + data[i].SPM +"</h3>" + 
             "<h3>" + "DBMS : "  + data[i].DBMS +"</h3>"+
             "<h3>" + "CNS : " + data[i].CNS +"</h3>"

            return;
        }
    }
    results.innerHTML = "<h3>" + "No information ! " + "</h3>" 
}) 