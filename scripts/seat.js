// availableSets
// totalCountedSeats
// tableBody

{
  /* <tr class="">
  <td>A1</td>
  <td>Economy</td>
  <td class="text-right">550</td>
</tr>; */
}

// totalPrice
// couponInputContainer
// couponInput
// couponApplyBtn
// grandTotal

const seats = document.getElementsByClassName("seat");
for (let seat of seats) {
  seat.addEventListener("click", handleSeatClick);
}

let selectedSeats = 0

function handleSeatClick(e) {
    if(selectedSeats === 4 ) return
    
  const seatValue = e.target.value;

  // Turning the background to green
  e.target.classList.add("isSelected");

  // Setting the Available seates
  const availableSets = document.getElementById("availableSets");
  const totalAvailableSeats = parseInt(availableSets.innerText);
  availableSets.innerHTML = totalAvailableSeats - 1;

  //   Setting the Selected seats
  const totalCountedSeats = document.getElementById("totalCountedSeats");
  const selectedSeat = parseInt(totalCountedSeats.innerHTML);
  totalCountedSeats.innerHTML = selectedSeat + 1;

//   Counting the selected seat on an outside variable
  selectedSeats += 1

  //   Adding new seat to the table
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML += `<tr class="">
                    <td>${seatValue}</td>
                    <td>Economy</td>
                    <td class="text-right">550</td>
                    </tr> `;

// Counting the total price and inserting it
const totalPrice = document.getElementById("totalPrice")
const grandTotal = document.getElementById("grandTotal")
totalPrice.innerText = selectedSeats * 550
grandTotal.innerText = selectedSeats * 550
}

const couponInput = document.getElementById("couponInput")
const couponInputContainer = document.getElementById("couponInputContainer")
const couponApplyBtn = document.getElementById("couponApplyBtn")

couponApplyBtn.addEventListener("click", function(){
    const userCoupon = couponInput.value
    if(userCoupon === "NEW15"){        
        const grandTotal = document.getElementById("grandTotal")
        const currentPrice = parseInt(grandTotal.innerText)
        const discountedPrice = currentPrice - currentPrice*15/100        
        grandTotal.innerText = discountedPrice
        couponInputContainer.style.display = "none"

    }else if(userCoupon === "Couple 20"){
        const grandTotal = document.getElementById("grandTotal")
        const currentPrice = parseInt(grandTotal.innerText)
        const discountedPrice = currentPrice - currentPrice*20/100        
        grandTotal.innerText = discountedPrice
        couponInputContainer.style.display = "none"
    }else{
        alert("Please provide a valid coupon code")
    }
})

const nextbtn = document.getElementById("nextbtn")
nextbtn.addEventListener("click", function(){
    const popup = document.getElementById("popup")    
    popup.classList.remove("hidden")
    popup.classList.add("flex")
})

