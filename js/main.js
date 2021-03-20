let match;

    march = document.querySelector('#btn').addEventListener('click', (e) => {
        
        e.preventDefault()
        
        var x,y;
        x = document.getElementById("name").value;
        y = document.getElementById("lover").value;
    if (x == "" || y == "") {
            alert("Enter your name");
            return false;
        }
    else{
        document.querySelector('#msg').innerHTML = "Your Match result is ready"
        document.querySelector('#name').value
        document.querySelector('#lover').value

        let value = Math.floor(Math.random() * 100) + "%"
        if(value > 70){
            var msg = document.getElementById('msg').innerHTML = "Your match is perfect score is "+value
            alert("Your match is perfect score is "+value)
        }
        else{
            
            var msg = document.getElementById('msg').innerHTML = "Try finding true love "+value
            alert("Try finding true love "+value)
        }
    }

        })