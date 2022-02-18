var pic;
var city;
var country;
var first;
var last;
var email;
var phone;
var counter = 0;

const getData = () => {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            pic = data.results[0].picture.large;
            city = data.results[0].location.city;
            country = data.results[0].location.country;
            first = data.results[0].name.first;
            last = data.results[0].name.last;
            email = data.results[0].email;
            phone = data.results[0].phone;

            if (counter == 0) {
                document.getElementById('image').src=pic;
                document.getElementById('name').innerHTML=first+" "+last;
                document.getElementById('description').innerHTML=email+"\n"+phone+"\n"+city+", "+country;
                counter++;
            }
            else if (counter == 1) {
                document.getElementById('image2').src=pic;
                document.getElementById('name2').innerHTML=first+" "+last;
                document.getElementById('description2').innerHTML=email+"\n"+phone+"\n"+city+", "+country;
                counter++;
            }
            else if (counter == 2) {
                document.getElementById('image3').src=pic;
                document.getElementById('name3').innerHTML=first+" "+last;
                document.getElementById('description3').innerHTML=email+"\n"+phone+"\n"+city+", "+country;
                counter++;
            }
            else if (counter == 3) {
                document.getElementById('image4').src=pic;
                document.getElementById('name4').innerHTML=first+" "+last;
                document.getElementById('description4').innerHTML=email+"\n"+phone+"\n"+city+", "+country;
                counter++;
            }
            else if (counter == 4) {
                document.getElementById('image5').src=pic;
                document.getElementById('name5').innerHTML=first+" "+last;
                document.getElementById('description5').innerHTML=email+"\n"+phone+"\n"+city+", "+country;
                counter++;
            }
            else {
                document.getElementById('image6').src=pic;
                document.getElementById('name6').innerHTML=first+" "+last;
                document.getElementById('description6').innerHTML=email+"\n"+phone+"\n"+city+", "+country;
                counter++;
            }
        }
    });
}

for (let i = 0; i < 6; i++) { 
    getData();
}

var remove = 1;
var input = "";
var search = document.getElementById('search');
search.addEventListener("keydown", event => {
    if (event.code == 'Backspace') {
        input = input.substring(0, input.length - remove);
        document.querySelectorAll('.card').forEach(item => {
            item.style.display = "block";
        })
        remove++;
    }
    input += String.fromCharCode(event.keyCode).toLowerCase();
    document.querySelectorAll('.card').forEach(item => {
        if (!item.innerHTML.includes(input)) {
            item.style.display = "none";
        }
    })
})