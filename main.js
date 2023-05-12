window.addEventListener('load',()=>{
    const form = document.querySelector('#new-task-filed');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        const task=input.value;

        if(!task){
            alert("Tolong masukkan kegiatan");
            return;
        }else{
            console.log("Penambahan kegiatan berhasil");
        }

        const task_el=document.createElement("div");
        task_el.classList.add("task");
        

        const task_content_el=document.createElement("div");
        task_content_el.classList.add("content");
        task_el.appendChild(task_content_el);

        const task_input_el=document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type="text";
        task_input_el.value=task;
        task_input_el.setAttribute("readonly","readonly");
        task_content_el.appendChild(task_input_el)
        list_el.appendChild(task_el);
        
        const buttons = document.createElement("div")
        buttons.classList.add("actions")

        const edit_button = document.createElement("button")
        edit_button.classList.add("edit")
        edit_button.innerText = 'Edit'

        const delete_button = document.createElement("button")
        delete_button.classList.add("delete")
        delete_button.innerText = "Hapus"
        buttons.appendChild(edit_button)
        buttons.appendChild(delete_button)
        task_el.appendChild(buttons)
        input.value = ''

        edit_button.onclick = () => {
            if (edit_button.innerText.toLowerCase() == "edit"){
               edit_button.innerText = "Simpan"
               task_input_el.removeAttribute("readonly")
               task_input_el.focus()
            }
           else {
               edit_button.innerText = "Edit"
               task_input_el.setAttribute("readonly", "readonly")
           }
       }
   
       delete_button.onclick = () => {
           list_el.removeChild(task_el)
       }
    })

})