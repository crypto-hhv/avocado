/* preloader */

$(window).on('load', function() {
	/*------------------
	Preloader
	--------------------*/
	$(".loader").fadeOut();
	$("#preloader").delay(200).fadeOut("slow");
});


/* cookiealert */

   (function () {
       "use strict";

       var cookieAlert = document.querySelector(".cookiealert");
       var acceptCookies = document.querySelector(".acceptcookies");

       if (!cookieAlert) {
          return;
       }

       cookieAlert.offsetHeight;

       // Show the alert if we cant find the "acceptCookies" cookie
       if (!getCookie("acceptCookies")) {
           cookieAlert.classList.add("show");
       }

       // When clicking on the agree button, create a 1 year
       // cookie to remember user's choice and close the banner
       acceptCookies.addEventListener("click", function () {
           setCookie("acceptCookies", true, 365);
           cookieAlert.classList.remove("show");
       });

       // Cookie functions
       function setCookie(cname, cvalue, exdays) {
           var d = new Date();
           d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
           var expires = "expires=" + d.toUTCString();
           document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
       }

       function getCookie(cname) {
           var name = cname + "=";
           var decodedCookie = decodeURIComponent(document.cookie);
           var ca = decodedCookie.split(';');
           for (var i = 0; i < ca.length; i++) {
               var c = ca[i];
               while (c.charAt(0) === ' ') {
                   c = c.substring(1);
               }
               if (c.indexOf(name) === 0) {
                   return c.substring(name.length, c.length);
               }
           }
           return "";
       }
   })();
   
/* Add To Wishlist, Add To Cart  */

$(document).ready(function(){
	
	var carttablebtn = document.querySelectorAll('.wishlist-btn')
	carttablebtn.forEach(function(wbtn) {

	  wbtn.addEventListener('click', function() {
		  
	  $(this).toggleClass("action-active");
		  
		if ($(this).hasClass("action-active")) {
		$(function() {
		const Toast = Swal.mixin({
			toast: true,
			position: 'top',
			showConfirmButton: false,
			timer: 3000
		});

		Toast.fire({
			icon: 'success',
			title: ' Product added to wishlist '
		})

		});
	}else {
		$(function() {
			const Toast = Swal.mixin({
				toast: true,
				position: 'top',
				showConfirmButton: false,
				timer: 3000
			});

			Toast.fire({
				icon: 'warning',
				title: ' Product removed from wishlist '
			})

			});
	}
		  
	  })
	})
	
	
	var addtocartbtn = document.querySelectorAll('.addtocart-btn')
	addtocartbtn.forEach(function(cbtn) {

	  cbtn.addEventListener('click', function() {
	  
	  $(this).toggleClass("action-active");
	  
	  if ($(this).hasClass("action-active")) {
			$(function() {
			const Toast = Swal.mixin({
				toast: true,
				position: 'top',
				showConfirmButton: false,
				timer: 3000
			});

			Toast.fire({
				icon: 'success',
				title: ' Product added to cart '
			})

			});
	}else {
		$(function() {
			const Toast = Swal.mixin({
				toast: true,
				position: 'top',
				showConfirmButton: false,
				timer: 3000
			});

			Toast.fire({
				icon: 'warning',
				title: ' Product removed from cart '
			})

			});
	}
		
		
	  })
	})
	
	
});
  

/* contactForm */

$(document).ready(function(){
$("#contactForm").on("submit",function(e){
  e.preventDefault();

  var name = $("#name").val();
  var email = $("#email").val();
  var subject = $("#subject").val();
  var message = $("#message").val();

  if(name == "") {
	  $("#danger").text("Name is required");
	  $(".danger").show();
  }else if (email == "") {
	  $("#danger").text("Email is required");
	  $(".danger").show();
  }else if (subject == "") {
	  $("#danger").text("Subject is required");
	  $(".danger").show();
  }else if (message == "") {
	  $("#danger").text("Message is required");
	  $(".danger").show();
  }else{
	$.ajax({
	  url  : "send_email.php",
	  type : "POST",
	  cache:false,
	  data :{name:name,email:email,subject:subject,message:message},
	  success:function(response){
		  
	//  window.location.reload(true); 	  

   // setInterval('location.reload()', 3000);
	
	
	window.scrollTo({top: 0, behavior: 'smooth'});	

	setTimeout(function(){
		$("#success").text("Contact form submitted successfully");
		$(".success").show();
		$(".danger").hide();
		$("#contactForm").trigger('reset');
	}, 1500); 
	
	 
	  }
	});
  }
});

$(".btnclosenotifsuccess").click(function(){
window.location.reload(true); 
});
		
});
		  

/* topnavbar scroll Up /Down */

var bodymo = document.body;
const menuOpen = "menuopen";

$('#navbarfx .navbar-toggler').on('click', function(){
	classie.toggle(bodymo, menuOpen);
});

const bodynav = document.body;
const triggerMenu = document.getElementById("navbarfx");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll == 0) {
	bodynav.classList.remove(scrollUp);
	return;
  }
  
  if (currentScroll > lastScroll && !bodynav.classList.contains(scrollDown)) {
	// down
	bodynav.classList.remove(scrollUp);
	bodynav.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && bodynav.classList.contains(scrollDown)) {
	// up
	bodynav.classList.remove(scrollDown);
	bodynav.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});

$(window).scroll(function() {
	if ($(this).scrollTop() < 1) {
		bodynav.classList.remove(scrollDown);
	}
});	

/* backtotop */

$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$(".backtotop").fadeIn();
	} else {
		$(".backtotop").fadeOut();
	}
});	


/* Menu */	
	
	var menuRight = document.getElementById( 'cbp-spmenu-right' ),
	showRight = document.getElementById( 'showRight' ),
	ulogoleft = document.getElementById( 'toplogocontainer' ),
	body = document.body;

	showRight.onclick = function() {
	classie.toggle( this, 'mi_change' );
	classie.toggle( ulogoleft, 'ulogo-left' );
	classie.toggle( menuRight, 'cbp-spmenu-open' );
	disableOther( 'showRight' );
	};

	function disableOther( button ) {
	if( button !== 'showRight' ) {
		classie.toggle( showRight, 'disabled' );
	}
	}


	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {

	var x = document.getElementById("showRight").querySelectorAll(".menubars");
	var i;

	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	document.getElementById("navbarfx").style.boxShadow = "0 0 20px 0 rgba(0,0,0,.15)";
	document.getElementById("navbarfx").style.backgroundColor  = "#fff";
	document.getElementById("toplogospan").style.color  = "#657789";

	for (i = 0; i < x.length; i++) {
	 x[i].style.backgroundColor = "#657789";
	}

	} else {
	document.getElementById("navbarfx").style.boxShadow = "none";
	document.getElementById("navbarfx").style.backgroundColor  = "transparent";
	document.getElementById("toplogospan").style.color  = "#2cb9e3";

	for (i = 0; i < x.length; i++) {
	x[i].style.backgroundColor = "#2cb9e3";
	}

	}
	}

		
/* Collapse responsive navbar when toggler is visible */

    const navbarToggler = document.body.querySelector('.umenu-cont');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('.eff-pop')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
				
            }
        });
    });
	
	$("#body-overlay").click(function(){
		if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
				
            }
	  });
	

/* mainNav */

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

/* remove from carttable */

	$(".remove-from-carttable").click(function(){
		var countWN = $(".carttable-count-num");
		var carttablecountnum = countWN.text();
		
        carttablecountnum--;
        countWN.text(carttablecountnum);
       
	    $(this).parentsUntil("#products").remove();
		     
	});

/* cart total, quantity plus, minus */

function cartTotal(){

        let count = $(".item-in-cart-cost").length;

        $(".item-in-cart-count").html(count);


        if(count>0){
            let totalCost = $(".item-in-cart-cost").toArray().map(el=>el.innerHTML).reduce((x,y)=>Number(x)+Number(y));
            // console.log(typeof totalCost);
			
			const child = document.getElementsByClassName("total");
            const directParentHasClassCart = child.parentElement?.classList.contains('cartmodal');
			const directParentHasClassCheckout = child.parentElement?.classList.contains('checkoutmodal');
			
			if ($(".total").parents().hasClass('cartmodal')) {
			$(".total").html(`

					
					
					<div class="text-center text-md-end">
						<h4 class="addeditems-total">Total $<span class="cart-cost-total">${Number(totalCost).toFixed(2)}</span></h4>
					</div>
				
						

            `)
			}
			if ($(".totaltwo").parents().hasClass('checkoutmodal')) {
			
			$(".totaltwo").html(`

                <div class="d-flex justify-content-between font-weight-bold px-3">
                    <h4 class="addeditems-total">Total</h4>
                    <h4 class="addeditems-total">$<span id="totalPrice" data-name="totalPrice" class="cart-cost-total">${Number(totalCost).toFixed(2)}</span></h4>
                </div>
				
				<div class="justify-content-between font-weight-bold px-3 text-center text-md-start">
				   <button name="sendorder" type="submit" class="btn btn-outline-grey cart-checkout "><i class="fas fa-share-square"></i> Place Order </button>
                </div>
				
				

            `)
			
			}
			

        }else{
            $(".total").html("empty cart")
        }

    }
	
	
	
	$(".remove-from-cart").click(function(){
	    $(this).parentsUntil("#products").remove();
       cartTotal();
		     
	});
	

    $("#cart").delegate(".quantity-plus","click",function () {
		console.log($(this).siblings(".quantity").val());

        let q =$(this).siblings(".quantity").val();
        let p = $(this).siblings(".quantity").attr("data-unitPrice");
        let newQ = Number(q)+1;
        let newCost = p * newQ;
        // console.log(p);
        $(this).siblings(".quantity").val(newQ);
        $(this).parent().parent().siblings("td").children("p").find(".item-in-cart-cost").html(newCost.toFixed(2));	
		
        cartTotal();
    })

    $("#cart").delegate(".quantity-minus","click",function () {

        let q =$(this).siblings(".quantity").val();
        let p = $(this).siblings(".quantity").attr("data-unitPrice");
        if(q>1){

            let newQ = Number(q)-1;
            let newCost = p * newQ;
            // console.log(p);
            $(this).siblings(".quantity").val(newQ);
            $(this).parent().parent().siblings("td").children("p").find(".item-in-cart-cost").html(newCost.toFixed(2));
			
            cartTotal();

        }

    })

    $("#cart").delegate(".quantity","keyup change",function () {

        let q =$(this).val();
        let p = $(this).attr("data-unitPrice");
        if(q>1){

            let newQ = Number(q);
            let newCost = p * newQ;
            // console.log(p);
            $(this).val(newQ);
            $(this).parent().siblings("p").find(".item-in-cart-cost").html(newCost.toFixed(2));
			
			$("#quantityTwo").val(newQ);
			
            cartTotal();

        }else{
		
        <!--  alert("More Than One"); -->
			
		<!-- sweetalert - more than one -->
		
		$(function() {
		const Toast = Swal.mixin({
			toast: true,
			position: 'top',
			showConfirmButton: false,
			timer: 3000
		});

		Toast.fire({
			icon: 'error',
			title: ' More Than One '
		})

		});
		
		<!-- end sweetalert - more than one -->
        }

    })

/* checkout */

$(document).ready(function(){
  $("#BillingDelivery").click(function(){
    $( ".billing-details-cont" ).toggle( 300 );
  });
  
});

/* checkoutcity */

$( '#checkoutcity' ).select2( {
    theme: "bootstrap-5",
    width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
    placeholder: $( this ).data( 'placeholder' ),
	dropdownParent: $('#CheckoutForm'),
} );

/* checkoutcounty */

$( '#checkoutcounty' ).select2( {
    theme: "bootstrap-5",
    width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
    placeholder: $( this ).data( 'placeholder' ),
	dropdownParent: $('#CheckoutForm'),
} );

/* checkoutcityBilling */

$( '#checkoutcityBilling' ).select2( {
    theme: "bootstrap-5",
    width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
    placeholder: $( this ).data( 'placeholder' ),
	dropdownParent: $('#CheckoutForm'),
} );

/* checkoutcountyBilling */

$( '#checkoutcountyBilling' ).select2( {
    theme: "bootstrap-5",
    width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
    placeholder: $( this ).data( 'placeholder' ),
	dropdownParent: $('#CheckoutForm'),
} );

/* checkoutcityShipping */

$( '#checkoutcityShipping' ).select2( {
    theme: "bootstrap-5",
    width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
    placeholder: $( this ).data( 'placeholder' ),
	dropdownParent: $('#CheckoutForm'),
} );

/* checkoutcountyShipping */

$( '#checkoutcountyShipping' ).select2( {
    theme: "bootstrap-5",
    width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
    placeholder: $( this ).data( 'placeholder' ),
	dropdownParent: $('#CheckoutForm'),
} );

/* submitOrder */

$(document).ready(function(){
$("#submitOrder").on("submit",function(e){
  e.preventDefault();

	var checkoutname = $("#checkoutname").val();
	var checkoutsurname = $("#checkoutsurname").val();
	var checkoutcounty = $("#checkoutcounty").val();
	var checkoutcity = $("#checkoutcity").val();
	var checkoutzip = $("#checkoutzip").val();
	var checkoutsuraddress = $("#checkoutsuraddress").val();
	var checkoutreceiver = $("#checkoutreceiver").val();
	var checkoutphone = $("#checkoutphone").val();
	var checkoutordernotes = $("#checkoutordernotes").val();
	var checkoutshipping = $("input[name='shipping']:checked").val(); 
	var totalPrice = $("#totalPrice").html();



	form_elements = [];
	$(".check").each(function () { 
		var addeditemsTitle = $(this).find("input[name='addeditemsTitle']").val(); 	
		var quantityTwo = $(this).find("span[data-name='quantityTwo']").html(); 		
		var addeditemsPrice = $(this).find("span[data-name='addeditemsPrice']").html(); 
		current_frm_obj = {addeditemsTitle:addeditemsTitle, quantityTwo:quantityTwo, addeditemsPrice:addeditemsPrice};
		form_elements.push(current_frm_obj);

	});


  if(checkoutname == "") {
	  $("#danger").text("Name is required");
	  $(".danger").show();
  }else if (checkoutsurname == "") {
	  $("#danger").text("Surname is required");
	  $(".danger").show();
  }else if (checkoutcounty == "") {
	  $("#danger").text("State / County is required");
	  $(".danger").show();
  }else if (checkoutcity == "") {
	  $("#danger").text("City is required");
	  $(".danger").show();
  }else if (checkoutzip == "") {
	  $("#danger").text("Postal code / ZIP is required");
	  $(".danger").show();
  }else if (checkoutsuraddress == "") {
	  $("#danger").text("Address is required");
	  $(".danger").show();
  }else if (checkoutreceiver == "") {
	  $("#danger").text("Apartment / Company / Receiver is required");
	  $(".danger").show();
  }else if (checkoutphone == "") {
	  $("#danger").text("Phone is required");
	  $(".danger").show();
  }else{
	$.ajax({
	  url  : "/send_order.php",
	  type : "POST",
	  cache:false,
	  data :{checkoutname:checkoutname,
			 checkoutsurname:checkoutsurname,
			 checkoutcounty:checkoutcounty,
			 checkoutcity:checkoutcity,
			 checkoutzip:checkoutzip,
			 checkoutsuraddress:checkoutsuraddress,
			 checkoutreceiver:checkoutreceiver,
			 checkoutphone:checkoutphone,
			 checkoutordernotes:checkoutordernotes,
			 totalPrice:totalPrice,
			 checkoutshipping:checkoutshipping,
			 result:JSON.stringify(form_elements)},
	  success:function(response){
	   console.log(form_elements); 
		  
	//  window.location.reload(true); 	  

   // setInterval('location.reload()', 3000);
	
	
	window.scrollTo({top: 0, behavior: 'smooth'});	

	setTimeout(function(){
		$("#success").text("Order submitted successfully");
		$(".success").show();
		$(".danger").hide();
		$("#submitOrder").trigger('reset');
	}, 1500); 
	
	 
	  }
	});
  }
});

$(".btnclosenotifsuccess").click(function(){
window.location.reload(true); 
});
		
});

/* datetimepicker */

$('.datetimepicker').datetimepicker(
{
defaultDate: new Date(),
format: 'DD/MM/YYYY ',
/* format: 'DD/MM/YYYY hh:mm A', */

});

$('.datepicker').datetimepicker(
{
format: 'DD/MM/YYYY ',
/* format: 'DD/MM/YYYY hh:mm A', */

});


/*  */



/*  */



/*  */



/*  */

	  