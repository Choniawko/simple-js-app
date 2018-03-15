import ProductItem from "../ProductItem"
export * from "./style"

const products = [
    { id: 1, name: "Product #1", active: true, description: "Description long text", category: "Category #1", imageUrl: "http://via.placeholder.com/200x180" },
    { id: 2, name: "Product #2", active: true, description: "Description long text", category: "Category #2", imageUrl: "http://via.placeholder.com/200x180" },
    { id: 3, name: "Product #3", active: true, description: "Description long text", category: "Category #3", imageUrl: "http://via.placeholder.com/200x180" },
    { id: 4, name: "Product #4", active: false, description: "Description long text", category: "Category #4", imageUrl: "http://via.placeholder.com/200x180" },
    { id: 5, name: "Product #5", active: true, description: "Description long text", category: "Category #5", imageUrl: "http://via.placeholder.com/200x180" },
    { id: 6, name: "Product #6", active: false, description: "Description long text", category: "Category #6", imageUrl: "http://via.placeholder.com/200x180" },
    { id: 7, name: "Product #7", active: true, description: "Description long text", category: "Category #7", imageUrl: "http://via.placeholder.com/200x180" },
    { id: 8, name: "Product #8", active: true, description: "Description long text", category: "Category #8", imageUrl: "http://via.placeholder.com/200x180" },
]

const list = products.map(product => ProductItem(product)).join("")

export default `
    <div class="list">
        ${list}
    </div>
`

