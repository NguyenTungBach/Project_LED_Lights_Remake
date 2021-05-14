const btnDescription = document.getElementById("btn-description");
const btnReviews = document.getElementById('btn-reviews');
const btnShipping = document.getElementById('btn-shipping');
const divInformation = document.getElementById('information')
btnReviews.onclick = function () {
    divInformation.innerHTML = `<div>
                    <h4>CUSTOMER REVIEWS</h4>
                    <div>
                        <form action="#" name="review">
                            <div class='form-group'>
                                <label>Name</label>
                                <input name="name" type='text' class='form-control' id='name' placeholder='Name'></div>
                            <div class='form-group'>
                                <label>Email</label>
                                <input name="email" type='email' class='form-control' id='email' placeholder='Email'></div>
                            <div class='form-group'>
                                <label>Review Title</label>
                                <input name="title" type='text' class='form-control' id='title' placeholder='Give your reviews title'></div>
                            <div class='form-group'>
                                <label>Body of Review (1500)</label>
                                <textarea name="comment" rows='3' class='form-control' placeholder='Write comment here'></textarea></div>
                            <button class='btn btn-dark' id='submit' type='submit'>Submit</button>
                        </form>
                    </div>
                </div>`

    $("#information form[name=review]").validate({
        rules:{
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            title: "required",
            comment: "required",
        },
        messages:{
            name: {
                required: "Please enter name product"
            },
            email: {
                required:"Please enter your email",
                email: "Your email is not right"
            },
            title: "Please enter your title",
            comment: "Please enter your comment"
        },
        submitHandler: function (){
            $("form[name=review]").submit();
        }
    })
}
btnDescription.onclick = function () {
    divInformation.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat..."
}
btnShipping.onclick = function () {
    divInformation.innerHTML = "We can ship to virtually any address in the world. Note that there are restrictions on some products, and some products cannot be shipped to international destinations. When you place an order, we will estimate shipping and delivery dates for you based on the availability of your items and the shipping options you choose. Depending on the shipping provider you choose, shipping date estimates may appear on the shipping quotes page."
}

$("#thumbnail-1").click(function () {
    var thumnail = `<div><img src="https://res.cloudinary.com/nguyenhs/image/upload/v1620150746/img-Project1/Home-page/newarrivals/newarrivels-2_vqlzjc.jpg" alt=""> </div>`
    $("#thumbnail-main").html(thumnail);
})

$("#thumbnail-2").click(function () {
    var thumnail = `<div><img src="https://res.cloudinary.com/nguyenhs/image/upload/v1620150746/img-Project1/Home-page/newarrivals/newarrivels-3_vcr4fh.jpg" alt=""> </div>`
    $("#thumbnail-main").html(thumnail);
})

$("#thumbnail-3").click(function () {
    var thumnail = `<div><img src="https://res.cloudinary.com/nguyenhs/image/upload/v1620150745/img-Project1/Home-page/newarrivals/newarrivels-1_xtlwdu.jpg" alt=""> </div>`
    $("#thumbnail-main").html(thumnail);
})
