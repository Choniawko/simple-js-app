export * from "./style"
export default product => `
    <div class="card">
        <img src="${product.imageUrl}" alt="" />
        <div>${product.name}</div>
        <div>${product.description}</div>
        <div>${product.category}</div>
    </div>
`