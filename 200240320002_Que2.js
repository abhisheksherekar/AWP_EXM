

function readvalue() {
    let usename = document.getElementById("uname").value;
    // console.log(usename);
    let password1 = document.getElementById("password").value;
    let email1 = document.getElementById("email").value;

    //   let box = document.getElementById("box").cloneNode(true);
    // let ans = usename + " " + " " + password + " " + email;
    //  console.log(ans);
    //  box.children[0].appendChild(ans);

    document.getElementById("u").innerHTML = usename;
    document.getElementById("e").innerHTML = email1;
    document.getElementById("p").innerHTML = password1;


}