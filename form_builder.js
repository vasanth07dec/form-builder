

    document.addEventListener("DOMContentLoaded", function () {
        const workspace = document.querySelector('.workspace');

        document.querySelectorAll('.drag').forEach(dragElement => {
            dragElement.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData("text/plain", e.target.id);
            });
        });

        workspace.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        workspace.addEventListener('drop', (e) => {
            e.preventDefault();
            const data = e.dataTransfer.getData("text/plain");
            console.log("this data"+ data);
            const target = document.getElementById(data);

            if (target) {
                if(target.id === "title"){

                    let title = prompt("Provide title")
                    let paraTitle = document.createElement('p')
                    paraTitle.innerHTML = title
                    paraTitle.classList.add('designer-title')
                    workspace.appendChild(paraTitle)

                } 
                else if (target.id === "label") {

                    const labelElement = document.createElement("label");
                    const labelName = prompt("give label name")
                    labelElement.textContent = labelName;
                    labelElement.classList.add('dragged-label')
                    workspace.appendChild(labelElement);
                    
                }
                else if (target.id === "textbox") {
                    
                    const inputElement = document.createElement("input");
                    inputElement.type = "text";
                    workspace.appendChild(inputElement);
                    let lineBreak = document.createElement('br')
                    workspace.appendChild(lineBreak)

                } else if(target.id === "button"){

                    let btn = this.createElement('button')
                    btn.textContent = 'Save'
                    btn.classList.add('dragged-btn')
                    workspace.appendChild(btn)
                    let lineBreak = document.createElement('br')
                    workspace.appendChild(lineBreak)

                }
                else if(target.id === "textdropdown"){

                    let opt = ["Front-end","back-end","Full-Stack"]
                    let select = document.createElement('select')
                    for(let i = 0; i<opt.length; i++){
                        let option = document.createElement("option")
                        option.innerHTML = opt[i]
                        select.appendChild(option)
                    }
                    workspace.appendChild(select)
                    let lineBreak = document.createElement('br')
                    workspace.appendChild(lineBreak)

                }
                else if(target.id === "checkbox"){

                    const names =["HTML","CSS","Javascript"];
                    names.forEach(function (name){
                    let checkBoxContainer = document.createElement('span')
                    let checkboxInput = document.createElement('input')
                    checkboxInput.type ='checkbox'
                    
                    let checkBoxlabel = document.createElement('label')
                    checkBoxlabel.textContent =`${name}`

                    checkBoxContainer.appendChild(checkboxInput)
                    checkBoxContainer.appendChild(checkBoxlabel)

                    workspace.appendChild(checkBoxContainer);
                 })
                 let lineBreak = document.createElement('br')
                 workspace.appendChild(lineBreak)

                }
                else if(target.id === "radioBtn"){

                    const names =["Male","Female","Not-to-prefer"];
                    names.forEach(function (name){
                    let radioContainer = document.createElement('span')
                    let radioInput = document.createElement('input')
                    radioInput.type ='radio'
                    radioInput.name ='gender'
                    radioInput.classList.add("dragged-radio")
                    radioContainer.classList.add("radiospan")

                    let radiolabel = document.createElement('label')
                    radiolabel.textContent =`${name}`

                    radioContainer.appendChild(radioInput)
                    radioContainer.appendChild(radiolabel)

                    workspace.appendChild(radioContainer);
                })
                let lineBreak = document.createElement('br')
                workspace.appendChild(lineBreak)


                }
                else if(target.id === "navigation"){

                    let link = prompt("Link your URL")
                    let alink = document.createElement('a')
                    alink.setAttribute("href",link)
                    alink.innerHTML = link
                    alink.classList.add("dragged-link")
                    workspace.appendChild(alink)
                    let lineBreak = document.createElement('br')
                    workspace.appendChild(lineBreak)

                }
            } 
        });
    });

