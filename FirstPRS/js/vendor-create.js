const save = () => {
    let vendor = {};
    vendor.id = +document.getElementById("xid").value;
    vendor.code = document.getElementById("xcode").value;
    vendor.name = document.getElementById("xname").value;
    vendor.address = document.getElementById("xaddress").value;
    vendor.city = document.getElementById("xcity").value;
    vendor.zip = document.getElementById("xzip").value;
    vendor.phone = document.getElementById("xphone").checked;
    vendor.email = document.getElementById("xemail").value;
    console.log(vendor);

    window.location.href="vendor-list.html"
}

