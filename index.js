const results = document.getElementById("result");
const cf = document.getElementById("cf");
const fc = document.getElementById("fc");
const temp = document.getElementById("temp");
submit = mysubmit.onclick;


  document.getElementById("converter").addEventListener("submit", function(event) {
        event.preventDefault(); // stop page refresh

        const tempValue = parseFloat(temp.value);

        if (cf.checked) {
            const resultValue = (tempValue * 9/5) + 32;
            result.textContent = resultValue + " °F";
        }
        else if (fc.checked) {
            const resultValue = (tempValue - 32) * 5/9;
            result.textContent = resultValue + " °C";
        }
        else {
            result.textContent = "Please select a conversion type";
        }
    });