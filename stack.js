const boxes_of_stack = []; // مصفوفة لتخزين العقد
let currentIndex_of_stack = 0; // لعد النودز
var pushBtn = document.getElementById('push');
pushBtn.addEventListener("click", function (params) {
    const value = document.getElementById("value").value;
    push(value);
});

var popBtn = document.getElementById('pop');
popBtn.addEventListener("click", function () {
    pop();
});

function createStack() {
    const gameContainer = document.querySelector('.game_stack');
    for (let i = 0; i < 1; i++) {
        console.log("loop inside stack : " + i);
        push(1);
    }
}

function push(value) {
    if (value == "") {
        alert("value cant be null");

    } else {
        const box = document.createElement('div');
        box.classList.add('box_of_stack');
        box.setAttribute('data-value', value);

        // تمييز الرقم
        const number = document.createElement('span');
        number.textContent = `${value}`;
        number.classList.add('node-number');
        box.appendChild(number);

        // إضافة العقدة إلى الاستاك
        old_boxes = document.querySelector('.game_stack');
        count_of_old_boxes = old_boxes.children.length;
        console.log("count_of_old_boxes : " + count_of_old_boxes);
        if (count_of_old_boxes < 5) {
            boxes_of_stack.push({
                element: box,
                value: value,
            });
            // إضافة العقدة إلى واجهة المستخدم
            document.querySelector('.game_stack').appendChild(box);
            setTimeout(() => {
                box.style.opacity = '1';
                box.style.transform = 'translateY(0)';
            }, 10);

        } else {
            alert("stack is full");
        }
    }
}

function pop() {
    var old_boxes = document.querySelector('.game_stack');
    if (old_boxes.lastElementChild) {
        old_boxes.removeChild(old_boxes.lastElementChild);
    } else {
        alert("your stack is null");
    }
}

// استدعاء الدالة لإنشاء اللعبة عند التحميل
createStack();
