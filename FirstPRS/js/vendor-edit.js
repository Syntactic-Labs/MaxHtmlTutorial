const loaded = () => {
    let url = getUrlId();
    document.getElementById("xid").value = vendor.id;
    document.getElementById("xcode").value = vendor.code;
    document.getElementById("xname").value = vendor.name;
    document.getElementById("xaddress").value = vendor.address;
    document.getElementById("xcity").value = vendor.city;
    document.getElementById("xstate").value = vendor.state;
    document.getElementById("xzip").value =vendor.zip;
    document.getElementById("xphone").value =vendor.phone;
    document.getElementById("xemail").value =vendor.email;
}
const save = () => {
    let vendor = {};
    vendor.id = +document.getElementById("xid").value;
    vendor.code = document.getElementById("xcode").value;
    vendor.name = document.getElementById("xname").value;
    vendor.address = document.getElementById("xaddress").value;
    vendor.city = document.getElementById("xcity").value;
    vendor.state = document.getElementById("xstate").value;
    vendor.zip = document.getElementById("xzip").value;
    vendor.phone = document.getElementById("xphone").checked;
    vendor.email = document.getElementById("xemail").checked;
    console.log(vendor);

    //window.location.href="vendor-list.html"
}