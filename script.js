function submitform(e){
    e.preventDefault(); 
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value; 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const Phone = document.getElementById('confirmpassword').value;
    let objectform  = {}
    objectform.firstname = firstname;
    objectform.lastname = lastname;
    objectform.email = email;
    objectform.password = password;
    objectform.Phone  = Phone;
    console.log(objectform)
}