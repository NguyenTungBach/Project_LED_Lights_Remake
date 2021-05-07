
//     const showMenu = (toggleId, navId)=>{
//     const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId)
//
//     if(toggle && nav){
//     toggle.addEventListener('click', ()=>{
//     nav.classList.toggle('show'); // hiện class = 'show' tại vị trí có class mình chỉ đến
//     // toggle.classList.toggle('bx-x'); // hiện class = 'bx-x' tại vị trí có class mình chỉ đến
// })
// }
// }
//     showMenu('header-toggle','nav-menu')

    // remake code show hide menu start

    $('#header-toggle').click(function () {
        document.getElementById('nav-menu').classList.toggle('show');

        /* tại độ rộng dưới 968px


        .nav--menu sẽ có left = -100%; tức là không thấy gì trên màn hình

        sau khi ONCLICK thì sẽ hiện thêm cái class = 'show' có left = 0px; đè lên
        như vậy sẽ hiện
         */

    });

    //remake code show hide menu end



// Hàm này vô nghĩa với trang minh, cứ hiểu thế này: chạy đến tất cả class='.nav__link' ,
// mỗi khi click vào nó thì sẽ xóa tất cả class = 'active' trong class='.nav__link'
// và lại thêm class = 'active' tại vị trí vừa chọn

    /*===== ACTIVE AND REMOVE MENU =====*/
//     const navLink = document.querySelectorAll('.nav__link');
//
//     function linkAction(){
//     /*Active link*/
//     navLink.forEach(n => n.classList.remove('active'));
//     this.classList.add('active');
// }
//     navLink.forEach(n => n.addEventListener('click', linkAction));

// const navLink = $('.nav__link');
//
// function linkAction(){
//     /*Active link*/
//     navLink.forEach( function (n){
//         n.classList.remove('active')
//     });
//     linkAction.classList.add('active');
// }
//
// navLink.forEach(function (n){
//     n.addEventListener('click', linkAction)
// })
