document.addEventListener("DOMContentLoaded",function (){
    $("form[name=checkout]").validate({
        rules:{
            email: {
                required: true,
                email:true
            },
            phone: {
                required: true,
                number: true,
                maxlength: 10
            },
            fist_name: "required",
            last_name: "required",
            address: "required",
            apartment: "required",
            city: "required",
            country: "required",
        },
        messages:{
            email: {
                required:"Please enter your email",
                email: "Your email is not right"
            },
            phone: {
                required:"Please enter your phone",
                number: "This is not number",
                maxlength: "This is not your phone"
            },
            fist_name: "Please enter your fist name",
            last_name: "Please enter your last name",
            address: "Please enter your address",
            apartment: "Please enter your apartment",
            city: "Please enter your city",
            country: "Please enter your country"
        },
        submitHandler: function (){
            $("form[name=checkout]").submit();
        }
    })
})