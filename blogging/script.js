var counter = 0;

const getData = (url) => {
    fetch(url)
        .then((response) => response.json())
        .then((JSON) => { 
            var title = JSON.title;
            var body = JSON.body;
            if (counter == 0) {
                document.getElementById('tb1').innerHTML=title;
                document.getElementById('pb1').innerHTML=body;
            }
            else if (counter == 1) {
                document.getElementById('tb2').innerHTML=title;
                document.getElementById('pb2').innerHTML=body;
            }
            else if (counter == 2) {
                document.getElementById('tb3').innerHTML=title;
                document.getElementById('pb3').innerHTML=body;
            }
            else if (counter == 3) {
                document.getElementById('tb4').innerHTML=title;
                document.getElementById('pb4').innerHTML=body;
            }
            else if (counter == 4) {
                document.getElementById('tb5').innerHTML=title;
                document.getElementById('pb5').innerHTML=body;
            }
            else if (counter == 5) {
                document.getElementById('tb6').innerHTML=title;
                document.getElementById('pb6').innerHTML=body;
            }
            else if (counter == 6) {
                document.getElementById('tb7').innerHTML=title;
                document.getElementById('pb7').innerHTML=body;
            }
            else if (counter == 7) {
                document.getElementById('tb8').innerHTML=title;
                document.getElementById('pb8').innerHTML=body;
            }
            else if (counter == 8) {
                document.getElementById('tb9').innerHTML=title;
                document.getElementById('pb9').innerHTML=body;
            }
            else if (counter == 9) {
                document.getElementById('tb10').innerHTML=title;
                document.getElementById('pb10').innerHTML=body;
            }
            else if (counter == 10) {
                document.getElementById('tb11').innerHTML=title;
                document.getElementById('pb11').innerHTML=body;
            }
            counter++;
        });
}

getData('https://jsonplaceholder.typicode.com/posts/1');
getData('https://jsonplaceholder.typicode.com/posts/2');
getData('https://jsonplaceholder.typicode.com/posts/3');
getData('https://jsonplaceholder.typicode.com/posts/4');
getData('https://jsonplaceholder.typicode.com/posts/5');
getData('https://jsonplaceholder.typicode.com/posts/6');
getData('https://jsonplaceholder.typicode.com/posts/7');
getData('https://jsonplaceholder.typicode.com/posts/8');
getData('https://jsonplaceholder.typicode.com/posts/9');
getData('https://jsonplaceholder.typicode.com/posts/10');
getData('https://jsonplaceholder.typicode.com/posts/11');
