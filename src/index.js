import App from "./app/App"
import { listStyle } from "./app/Product/ProductList"
import { cardStyle } from "./app/Product/ProductItem"

const appStyles = [
    {   
        className: ".list",
        styles: listStyle
    },
    {   
        className: ".card",
        styles: cardStyle
    },
]


const RootEl = document.querySelector("#root")

RootEl.innerHTML = App

appStyles.forEach(({ className, styles }) => {
    RootEl.querySelector(className)
        .appendChild(document.createElement("style"))
        .textContent = styles
})


