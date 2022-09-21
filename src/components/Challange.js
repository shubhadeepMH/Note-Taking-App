import React, { useEffect, useState } from 'react'


export default function Challange() {
    const [todo, setTodo] = useState(
        {
            productName: "",
            categories: [{
                catecategoryProd: "",
                quantity: 0

            }]
        }
    )

    const [Arr, setArr] = useState([
        {
            productName: "Shoe",
            categories: [{
                categoryProd: "Bata",
                quantity: 0
            },
            {
                categoryProd: "khadims",
                quantity: 0
            },
            {
                categoryProd: "khadims",
                quantity: 0
            }

            ]
        },
        {
            productName: "Fruits",
            categories: [{
                categoryProd: "Mango",
                quantity: 0
            },
            {
                categoryProd: "Apple",
                quantity: 0
            },
            {
                categoryProd: "Grapes",
                quantity: 0
            }

            ]
        },


    ])
    React.useEffect(() => {

    },Arr)

    const update = (event) => {

        let newArr = Arr.map((element, index) => {
            console.log(index);
            let num = element.categories.map((categories, ind) => {
                if (event.target.id == ind) {


                    // element.shoe = element.shoe
                    categories.quantity = categories.quantity + 1


                }
                return categories
            })
            setTodo({
                productName: element.productName,
                categories: num
            })
            return todo


        })
        setArr(newArr)

        // console.log(Arr);
    }





    return (


        <div>
            {
                Arr.map((element, index) => {

                    return <ul className="list-group">
                        <li className="list-group-item active" aria-current="true">{element.productName}</li>
                        {

                            element.categories.map((categori, ind) => {
                                return <li id={ind} key={ind} className="list-group-item hover:cursor-pointer" onClick={update}> {categori.categoryProd} {categori.quantity}</li>

                            })

                        }

                    </ul>
                })
            }


        </div>
    )
}
