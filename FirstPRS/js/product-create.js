$(() => {
    console.log("jQuery is ready!");
    $("input, select").css("border-radius", "7px");

    $("#save").on("click", () => {
        save();
    });
    getVendors();
});
const getVendors = () => {
    $.getJSON(`${baseurl}vendors`)
    .done(res => {
        console.log(res);
        loadVendors(res);
    })
    .fail(err => {
        console.error(err);
    });

}

const loadVendors = (vendors) => {
    let select = $("#vendors");
    select.empty();
    for(let v of vendors) {
        select.append($(`<option value="${v.id}">${v.name}</option>`)).prop("selectedIndex, -1")
    }
}

const save = () => {
    let product = {
        id: 0,
        partNbr: $("#xpartnbr").val(),
        partNbr: $("#xname").val(),
        partNbr: +$("#xprice").val(),
        partNbr: $("#xunit").val(),
        partNbr: +$("select").val()
    }
    console.log("Product:", product);
    create(product)
}

const create = (product) => {
    $.ajax({
        method: "Post",
        url: `${baseurl}products`,
        data: JSON.stringify(product),
        contentType: "application/json"
    })
        .done(res => {
            console.log("Created", res);
            window.location.href = "product-lest.html";
        })
        .fail(err => {
            console.error(err);
        });
}