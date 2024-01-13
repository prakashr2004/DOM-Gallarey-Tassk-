"use strict";
// --------------------- Nature Image --------------------------


const popup_image = document.querySelector(".popup_image");
const popup_image_container = document.querySelector(".popup_image_container");
const nature_image = document.querySelector(".ima");
const mountElements = document.querySelectorAll(".mount");

const objects = [
    { nat_img: "nature-1.jpeg" },
    { nat_img: "nature-2.jpeg" },
    { nat_img: "nature-3.jpeg" }
];

let nature_index = 0;

document.querySelectorAll(".image_container img").forEach((image, index) => {
    image.onclick = () => {
        popup_image.style.display = "block";
        nature_index = index;
        showNatureImage();
    };
});

document.querySelector(".popup_image span").onclick = () => {
    popup_image.style.display = "none";
};

document.querySelector(".fa-greater-than").addEventListener("click", () => {
    nature_index = nature_index + 1;
    if (nature_index >= objects.length) 
    {
        nature_index = 0; // Reset to the first index when it goes beyond the array length
    }
    showNatureImage();
});

document.querySelector(".fa-less-than").addEventListener("click", () => {
    nature_index = nature_index - 1;
    if (nature_index < 0) 
    // current_city_index = (current_city_index - 1 + city_object.length) % city_object.length;
    {
        nature_index = objects.length - 1; // Reset to the last index when it goes below 0
    }
    showNatureImage();
});

    mountElements.forEach((mount, index) => {
        mount.addEventListener("click", ()=> {
            nature_index = index;
            showNatureImage();
        });
    });

    function showNatureImage() {
        nature_image.src = objects[nature_index].nat_img;
        mountElements.forEach((mount, index) => {
            
            if(index === nature_index){
                console.log(index,nature_index)
                mount.classList.toggle("active");
            }
            else{
                mount.classList.add("active"); 
            }
            
        });
}


// --------------------------- City Image -------------------------------------

let decrease_image = document.querySelector(".decrease_image");
let increase_image = document.querySelector(".increase_image");
let city_image = document.querySelector(".img2");
let popup_city_image = document.querySelector(".popup_city_image");

let city_elements = [
    document.querySelector(".cty1"),
    document.querySelector(".cty2"),
    document.querySelector(".cty3"),
    document.querySelector(".cty4"),
    document.querySelector(".cty5")
];

let current_city_index = 0;

let city_object = [
    { city_img: "city-1.jpeg" },
    { city_img: "city-2.jpeg" },
    { city_img: "city-3.jpeg" },
    { city_img: "city-4.jpeg" },
    { city_img: "city-5.jpeg" }
];

document.querySelectorAll(".city_image_container img").forEach((image2, index) => {
    image2.onclick = () => {
        popup_city_image.style.display = "block";
        city_image.src = image2.getAttribute("src");
        current_city_index = index;
        showCityImage();
    };
});

document.querySelector(".popup_city_image span").onclick = () => {
    popup_city_image.style.display = "none";
};

increase_image.addEventListener("click", () => {
    current_city_index = current_city_index + 1;
    if(current_city_index >= city_object.length)
    {
        current_city_index = 0;
    }
    showCityImage();
});

decrease_image.addEventListener("click", () => {
    current_city_index = current_city_index - 1;
    if(current_city_index < 0 )
    {
        current_city_index = city_object.length - 1;
    }
    showCityImage();
});

city_elements.forEach((city_element, index) => {
    city_element.addEventListener("click", () => {
        current_city_index = index;
        showCityImage();
    });
});

function showCityImage() {
    city_image.src = city_object[current_city_index].city_img;
    city_elements.forEach((city_element, index) => {
        if(index === current_city_index)
        {
            city_element.classList.toggle("active");
        }
        else
        {
            city_element.classList.add("active");
        }
    });
}






























// "use strict"

// // -------------- Nature Image ----------------------------

// let less_than = document.querySelector(".fa-less-than");

// let greater_than = document.querySelector(".fa-greater-than");

// let nature_image = document.querySelector(".ima");
// // console.log(nature_image);
// let nature_h2 = document.querySelector("#nature_h2");

// let obj = [
//     {
//         nat_img : "nature-1.jpeg"
//     },
//     {
//         nat_img : "nature-2.jpeg"
//     },
//     {
//         nat_img : "nature-3.jpeg"
//     }
// ]

// document.querySelectorAll(".image_container img").forEach(image => {
//     image.onclick = () => {
//         document.querySelector(".popup_image").style.display = "block";
//         document.querySelector(".popup_image img").src = image.getAttribute("src");
//         // h2_text.innerText = obj[index].nat_text
//         document.querySelector(".popup_image_container").style.display = "block";
//         let mount = document.querySelectorAll(".mount");
//        // let mount2 = document.querySelector(".mount2");
//        // let mount3 = document.querySelector(".mount3");
//         // let display_nature_img = document.querySelector(".ima");
//         console.log(mount);
//         var valid = 0;
//         greater_than.addEventListener("click", () => {
//             // valid = valid + 1;
//              if(valid >= obj.length)
//              {
//                  valid = 0;
//               }
//             nature_image.src = obj[valid].nat_img;
//             //     mount.forEach((el, index) => {
//             //         el.classList.toggle("active", index === nature_image)
//             //     });


//             // });





//             // if(mount.src ==  nature_image.src)
//             // {
//             //     mount.classList.remove("active");
//             //     mount2.classList.add("active");
//             //     mount3.classList.add("active");
//             // }
//             // else if(mount2.src == nature_image.src)
//             // {
//             //     mount2.classList.remove("active");
//             //     mount.classList.add("active");
//             //     mount3.classList.add("active");
//             // }
//             // else if(mount3.src == nature_image.src)
//             // {
//             //     mount3.classList.remove("active");
//             //     mount.classList.add("active");
//             //     mount2.classList.add("active");
//             // }
//         });
//         less_than.addEventListener("click", () => {
//             if(valid > 0)
//             {
//                 valid--;
//             }
//             else if(valid == 0)
//             {
//                 valid = 3;
//                 valid--;
//             }
//             nature_image.src = obj[valid].nat_img;
//             // if(mount.src ==  nature_image.src)
//             // {
//             //     mount.classList.remove("active");
//             //     mount2.classList.add("active");
//             //     mount3.classList.add("active");
//             // }
//             // else if(mount2.src == nature_image.src)
//             // {
//             //     mount2.classList.remove("active");
//             //     mount.classList.add("active");
//             //     mount3.classList.add("active");
//             // }
//             // else
//             // {
//             //     mount3.classList.remove("active");
//             //     mount.classList.add("active");
//             //     mount2.classList.add("active");
//             // }
//         });
//         // mount.addEventListener("click", () => {
//         //     nature_image.src = obj[0].nat_img;
//         //     mount2.classList.add("active");
//         //     mount.classList.remove("active");
//         //     mount3.classList.add("active");
//         // });
//         // mount2.addEventListener("click", () => {
//         //     nature_image.src = obj[1].nat_img;
//         //     mount2.classList.remove("active");
//         //     mount.classList.add("active");
//         //     mount3.classList.add("active");
//         // });
//         // mount3.addEventListener("click", () => {
//         //     nature_image.src = obj[2].nat_img;
//         //     mount2.classList.add("active");
//         //     mount.classList.add("active");
//         //     mount3.classList.remove("active");
//         // });
//     }
// });

// document.querySelector(".popup_image span").onclick = () => {
//     document.querySelector(".popup_image").style.display = "none";
// }

// // -------------------------- City Image ----------------------------------

// let decrease_image = document.querySelector(".decrease_image");
// console.log(decrease_image);
// let increase_image = document.querySelector(".increase_image");
// console.log(increase_image);
// let city_image = document.querySelector(".img2");
// let opacity_image1 = document.querySelector(".city_images1");
// let cty1 = document.querySelector(".cty1");
// let cty2 = document.querySelector(".cty2");
// let cty3 = document.querySelector(".cty3");
// let cty4 = document.querySelector(".cty4");
// let cty5 = document.querySelector(".cty5");


// let obj2 = [
//     {
//         city_img : "city-1.jpeg"
//     },
//     {
//         city_img : "city-2.jpeg"
//     },
//     {
//         city_img : "city-3.jpeg"
//     },
//     {
//         city_img : "city-4.jpeg"
//     },
//     {
//         city_img : "city-5.jpeg"
//     }
// ]

// document.querySelectorAll(".city_image_container img").forEach(image2 => {
//     image2.onclick = () => {
//         document.querySelector(".popup_city_image").style.display = "block";
//         document.querySelector(".popup_city_image img").src = image2.getAttribute("src");
//         let cty1 = document.querySelector(".cty1");
//         let cty2 = document.querySelector(".cty2");
//         let cty3 = document.querySelector(".cty3");
//         let cty4 = document.querySelector(".cty4");
//         let cty5 = document.querySelector(".cty5");
//         let valid2 = 0;
//         increase_image.addEventListener("click", () => {
//             valid2++;
//             if(valid2 === obj2.length)
//             {
//                 valid2 = 0;
//             }
//             city_image.src = obj2[valid2].city_img;
//             if(cty1.src == city_image.src)
//             {
//                 cty1.classList.remove("active");
//                 cty2.classList.add("active");
//                 cty3.classList.add("active");
//                 cty4.classList.add("active");
//                 cty5.classList.add("active");
//             }
//             else if(cty2.src == city_image.src)
//             {
//                 cty2.classList.remove("active");
//                 cty1.classList.add("active");
//                 cty3.classList.add("active");
//                 cty4.classList.add("active");
//                 cty5.classList.add("active");
//             }
//             else if(cty3.src == city_image.src)
//             {
//                 cty3.classList.remove("active");
//                 cty2.classList.add("active");
//                 cty1.classList.add("active");
//                 cty4.classList.add("active");
//                 cty5.classList.add("active");
//             }
//             else if(cty4.src == city_image.src)
//             {
//                 cty4.classList.remove("active");
//                 cty3.classList.add("active");
//                 cty2.classList.add("active");
//                 cty1.classList.add("active");
//                 cty5.classList.add("active");
//             }
//             else if(cty5.src == city_image.src)
//             {
//                 cty5.classList.remove("active");
//                 cty4.classList.add("active");
//                 cty3.classList.add("active");
//                 cty2.classList.add("active");
//                 cty1.classList.add("active");
//             }
//         });
//         decrease_image.addEventListener("click", () => {
//             if(valid2 > 0)
//             {
//                 valid2--;
//             }
//             else if(valid2 == 0)
//             {
//                 valid2 = 5;
//                 valid2--;
//             }
//             city_image.src = obj2[valid2].city_img;
//             if(cty1.src == city_image.src)
//             {
//                 cty1.classList.remove("active");
//                 cty2.classList.add("active");
//                 cty3.classList.add("active");
//                 cty4.classList.add("active");
//                 cty5.classList.add("active");
//             }
//             else if(cty2.src == city_image.src)
//             {
//                 cty2.classList.remove("active");
//                 cty1.classList.add("active");
//                 cty3.classList.add("active");
//                 cty4.classList.add("active");
//                 cty5.classList.add("active");
//             }
//             else if(cty3.src == city_image.src)
//             {
//                 cty3.classList.remove("active");
//                 cty2.classList.add("active");
//                 cty1.classList.add("active");
//                 cty4.classList.add("active");
//                 cty5.classList.add("active");
//             }
//             else if(cty4.src == city_image.src)
//             {
//                 cty4.classList.remove("active");
//                 cty3.classList.add("active");
//                 cty2.classList.add("active");
//                 cty1.classList.add("active");
//                 cty5.classList.add("active");
//             }
//             else if(cty5.src == city_image.src)
//             {
//                 cty5.classList.remove("active");
//                 cty4.classList.add("active");
//                 cty3.classList.add("active");
//                 cty2.classList.add("active");
//                 cty1.classList.add("active");
//             }
//         });
//         cty1.addEventListener("click", () => {
//             city_image.src = obj2[0].city_img;
//             cty5.classList.add("active");
//             cty4.classList.add("active");
//             cty3.classList.add("active");
//             cty2.classList.add("active");
//             cty1.classList.remove("active");
//         });
//         cty2.addEventListener("click", () => {
//             city_image.src = obj2[1].city_img;
//             cty5.classList.add("active");
//             cty4.classList.add("active");
//             cty3.classList.add("active");
//             cty2.classList.remove("active");
//             cty1.classList.add("active");
//         });
//         cty3.addEventListener("click", () => {
//             city_image.src = obj2[2].city_img;
//             cty5.classList.add("active");
//             cty4.classList.add("active");
//             cty3.classList.remove("active");
//             cty2.classList.add("active");
//             cty1.classList.add("active");
//         });
//         cty4.addEventListener("click", () => {
//             city_image.src = obj2[3].city_img;
//             cty5.classList.add("active");
//             cty4.classList.remove("active");
//             cty3.classList.add("active");
//             cty2.classList.add("active");
//             cty1.classList.add("active");
//         });
//         cty5.addEventListener("click", () => {
//             city_image.src = obj2[4].city_img;
//             cty5.classList.remove("active");
//             cty4.classList.add("active");
//             cty3.classList.add("active");
//             cty2.classList.add("active");
//             cty1.classList.add("active");
//         });
//     }
// });

// document.querySelector(".popup_city_image span").onclick = () => {
//     document.querySelector(".popup_city_image").style.display = "none";
// }