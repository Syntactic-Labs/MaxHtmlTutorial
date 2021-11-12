$(() => {
    console.log("jQuery ready!");
    $("input").css("border-radius", "7px");
    $("#remove").on("click", () => {
        
    })
    getProductByPk();
});
const getProductByPk = () => {
    let id = getUrlId();
    $.getJSON(`${baseurl}products/${id}`)
        .done(
            res => {
                display(res);
                console.log(res);
            }
        )
        .fail(
            err => {
                console.error(err);
            }
        );
}

const display = (product) => {
    $("#xid").val(product.id);
    $("#xpartnbr").val(product.partNbr);
    $("#xname").val(product.name);
    $("#xprice").val(product.price.toFixed(2));
    $("#xunit").val(product.unit);
    $("#xvendor").val(product.vendor.name);
         
}