## React + TypeScript + Vite 
type script == javascript + check type and complete code 
=====Rendering list======

todo == ["todo 1", "todo 2",....]
Sử dụng map trong react để render ra list

todo.map(item =>{

return (<div>{item}</div>)

})
 
- Khuyến khích dùng vòng lặp map trong react để hạn chế việc pre-render để ứng dụng nhẹ hơn
- Nên có 1 key (unique) trong vòng lặp


todo.map(item, index =>{

return (<div key={index}>{item}</div>)

})

================= Event Handler===============
