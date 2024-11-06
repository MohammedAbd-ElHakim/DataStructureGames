const boxes_of_queue = []; // مصفوفة لتخزين العقد
const character_of_queue = document.getElementById('character_of_queue'); // الحصول على عنصر الأيقونة
let currentIndex_of_queue = 0; // لعد النودز


document.addEventListener("DOMContentLoaded", function (params) {
    var enqueueBtn = document.getElementById('enqueue');
    var dequeueBtn = document.getElementById('dequeue');
    enqueueBtn.addEventListener('click', function () {
        const value_of_queue = document.getElementById('value_of_queue').value;
        enqueue(value_of_queue);
    });

    dequeueBtn.addEventListener('click', function () {
        dequeue();
    });
});


function createQueue() {
    const gameContainer = document.querySelector('.game_queue');
    for (let i = 0; i < 5; i++) {
        addBox(i);
    }
    // وضع الأيقونة في المربع الأول
    moveCharacterToBox(0);
}

// enqueue is insert at last
function enqueue(value) {
    if (value == "") {
        alert("value cant be null");
    } else {
        const box = document.createElement('div');
        box.classList.add('box_of_queue');
        box.setAttribute('data-value', value);

        // تمييز الرقم
        const number = document.createElement('span');
        number.textContent = `${value}`;
        number.classList.add('node-number');
        box.appendChild(number);
        var screenWidth = window.innerWidth; // الحصول على عرض الشاشة الحالي
        // old child
        // تحديد العدد المسموح به حسب حجم الشاشة
        var maxBoxes = screenWidth < 600 ? 5 : 9; // إذا كان عرض الشاشة أقل من 600px، نعرض فقط 5 عناصر، وإلا نعرض حتى 9
        // إضافة العقدة إلى الاستاك
        old_boxes = document.querySelector('.game_queue');
        count_of_old_boxes = old_boxes.children.length;
        console.log("count_of_old_boxes : " + count_of_old_boxes);
        if (count_of_old_boxes < maxBoxes) {
            boxes_of_stack.push({
                element: box,
                value: value,
            });
            // إضافة العقدة إلى واجهة المستخدم
            document.querySelector('.game_queue').appendChild(box);
            setTimeout(() => {
                box.style.opacity = '1';
                box.style.transform = 'translateY(0)';
            }, 10);

        } else {
            alert("queue is full");
        }
    }
}

function dequeue() {
    var old_boxes = document.querySelector('.game_queue');
    if (old_boxes.firstElementChild) {
        old_boxes.removeChild(old_boxes.firstElementChild);
    } else {
        alert("your stack is null");
    }
}
