let button = document.getElementById("btn");

button.addEventListener('click',()=>{
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById("output");
    console.log(height)
    let height_status = false;
    let weight_status = false;

    if(height === '' || isNaN(height) || (height <=0)){
        document.getElementById('height_error').innerHTML = "tolong sediakan nilai tinggi badan yang benar"
    
    } else{
        document.getElementById("height_error").innerHTML = '';
        height_status = true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = "tolong sediakan nilai berat badan yang benar"
        
    }else{
        document.getElementById("height_error").innerHTML = '';
        weight_status = true;
    }

    if(height_status && weight_status){
        const bmi = ((weight / (height/100)**2)).toFixed(1)
        if(bmi < 18.5){
            result.innerHTML = 'BMI Categories: dibawah berat badan :' + bmi;
        } else if(bmi > 18.5 && bmi < 24.9){
            result.innerHTML = 'BMI Categories: Berat Normal berat badan :'+ bmi;
        } else if(bmi > 25 && bmi < 29.9) {
            result.innerHTML = 'BMI Categories: Kelebihan berat badan :' + bmi;
        } else{
            result.innerHTML = 'BMI Categories: Obesitas berat badan  :' + bmi
        }
    } else{
        alert('The form has errors')
        result.innerHTML = ''
    }
})