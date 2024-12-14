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

- State được dùng để lưu trữ dữ liệu động hoặc trạng thái của ứng dụng

Cụ thể:
State trong React.js:

Là một đối tượng chứa dữ liệu hoặc thông tin mà một component cần để render.
Khi state thay đổi, component sẽ được render lại để phản ánh sự thay đổi đó.
State trong React thường được định nghĩa bằng cách sử dụng useState hook (trong functional component) hoặc thuộc tính this.state (trong class component).
Ví dụ (React.js):

tsx
Copy code
import React, { useState } from "react";

function Counter() {
const [count, setCount] = useState(0); // Khai báo state với giá trị ban đầu là 0

    return (
        <div>
            <p>Số đếm: {count}</p>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
        </div>
    );

}

export default Counter;
State trong Vue.js:

Vue.js có một khái niệm tương tự thông qua data trong component.
Dữ liệu được khai báo trong data sẽ là state của component, và Vue.js tự động theo dõi các thay đổi để cập nhật giao diện.
Ví dụ (Vue.js):

vue
Copy code
<template>
<div>
<p>Số đếm: {{ count }}</p>
<button @click="increment">Tăng</button>
</div>
</template>

<script>
export default {
    data() {
        return {
            count: 0, // State
        };
    },
    methods: {
        increment() {
            this.count++; // Thay đổi state
        },
    },
};
</script>

==================== useState Hook ====
State là bộ nhớ của component lể lưu trữ trạng thái của component
==> 

======== Vòng đời của component =====
Pase 1: Mounting -> khởi tạo ban đầu cho component
Pase 2: Updating => Giao diện đã có trên màn hình máy tính - > pre render nếu có thay đổi state
Pase 3: Die => Xóa phần tử ra khỏi HTML 
