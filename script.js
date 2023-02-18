//this section in which we add the our products.
let productContainer = document.querySelector(".container");
let items;

//FIRST  FUNCTION
//now we create our FIRST  FUNCTION the take order .
// getMenu();


function getMenu() {
    //1.Call the API using the fetch() method.
    fetch(" https://free-food-menus-api-production.up.railway.app/burgers")
        .then((responce) => responce.json())  //2.Parse the JSON response.
        .then((data) => {
            items = data;
            //    console.log(items.length)
            items = items.map((item) => {
                return `
            <div class="outer-div">
                <div class="inner-div">
                    <div class="image">
                        <img src="${item.img}" alt="${item.name}">   
                    </div>
                    <div class="content">
                            <div class="name">
                                <b>Product Name:</b>${item.name}
                            </div>

                            <div class="dsc">
                                <b>Description:</b>${item.dsc}
                            </div>

                            <div class="price">
                                <b>Price:</b>${item.price}
                            </div>

                            <div class="rate">
                                <b>Rate:</b>${item.rate}
                            </div>

                            <div class="country">
                                <b>Courtry:</b>${item.country}
                            </div>
                    </div>
                </div>
            </div>
            `
            })

            productContainer.innerHTML = items.join("");
        })
}


//SECOND FUNCTION
//now we create our SECOND FUNCTION the take order .
// takeOrder();
function takeOrder() {
    let radomBurger = {};

    return new Promise((resolve, reject) => {  //1.Create a Promise.
        setTimeout(() => {

            fetch("https://free-food-menus-api-production.up.railway.app/burgers")
                .then((responce) => responce.json())
                .then((data) => {
                    console.log(data.length)

                    for (let i = 1; i <= 3; i++) {

                        let randomIndex = Math.floor(Math.random() *data.length);  //3.Select 3 burgers randomly.
                        
                        radomBurger[i]=data[randomIndex].name;      //4.Add the burgers to an object.
                       
                    }

                })
                //here we resolve the promise with the three random burger
                console.log(radomBurger)
                resolve(radomBurger);   //5.Resolve the Promise with the object.
        }, 2500)   //2.Use a setTimeout() function to wait for 2500 milliseconds.
    })
}


//THIRD FUNCTION
//now we create our THIRD FUNCTION .
//orderPrep

function orderPrep()
{
    return new Promise((resolve,reject)=>{ //1.Create a Promise.
        setTimeout(()=>{                    //2.Use a setTimeout() function to wait for 1500 milliseconds.
            let orderStatus= {order_status:true, paid:false};    //3.Create an object with the order status and payment status.
            console.log(orderStatus)
            resolve(orderStatus)  //4.Resolve the Promise with the object.
        },1500 )
    });
}


//FORTH FUNCTION
//now we create our FORTH FUNCTION .
// payOrder()

function  payOrder()
{
    return new Promise((resolve,reject)=>{     //1.Create a Promise.
        setTimeout(()=>{                        //2.Use a setTimeout() function to wait for 1000 milliseconds.
            let payOrderr= {order_status:true, paid:true};  //3.Create an object with the order status and payment status.
            console.log(payOrderr)
            resolve(payOrderr)   //4.Resolve the Promise with the object.
        },1000 )
    });
}


//FIFTH FUNCTION
//now we create our FIFTH FUNCTION .
// thankyouFnc()
function thankyouFnc(status)
{
    if(status.paid==true)
    {
        alert("Thank You");  //1.Display a thank you message using an alert() function.
    }
}




//using ASYNC AWAIT we drive the code.

async function asyncFun()
{
    console.log("Sh")
    const getMenu1= await getMenu();
    const takeOrder1=await takeOrder();
    const orderPrep1=await orderPrep();
    const payOrder1=await payOrder();
    const thankU=await thankyouFnc(payOrder1);

}
asyncFun();