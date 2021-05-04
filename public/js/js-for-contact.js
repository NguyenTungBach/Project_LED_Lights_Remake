document.addEventListener("DOMContentLoaded",function (){
    $("form[name=form-contact]").validate({
        rules:{
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            subject: "required",
            messeage: "required"
        },
        messages:{
            name: {
                required: "Please enter your name"
            },
            email: {
                required:"Please enter your email",
                email: "Your email is not right"
            },
            subject: "Please enter your subject",
            messeage: "Please enter your message"
        },
        submitHandler: function (){
            $("form[name=form-contact]").submit();
        }
    })
})