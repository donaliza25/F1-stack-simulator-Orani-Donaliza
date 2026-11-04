class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0) {
            return undefined;
        }

        return this.items.shift();
    }

    peek() {
        if (this.items.length === 0) {
            return undefined;
        }

        return this.items[0];
    }

    clear() {
        this.items = [];
    }
}

const queue = new Queue();

$(document).ready(function () {

    $("#btn_enqueue").click(function () {

        let value = $("#st_data").val();

        if (value === "") {
            alert("Please enter a value.");
            return;
        }

        queue.enqueue(value);

        renderQueue();

        $("#st_data").val("");
    });

    $("#btn_dequeue").click(function () {

        let removed = queue.dequeue();

        if (removed === undefined) {
            alert("Queue is empty!");
            return;
        }

        $("#popped").prepend(
            `<div class="row pop text-bg-danger border border-light">${removed}</div>`
        );

        renderQueue();
    });

    $("#btn_peek").click(function () {

        let front = queue.peek();

        if (front === undefined) {
            alert("Queue is empty!");
            return;
        }

        $(`#q${front}`)
            .removeClass("bg-primary")
            .addClass("peek");

        setTimeout(function () {
            $(`#q${front}`)
                .removeClass("peek")
                .addClass("bg-primary");
        }, 500);
    });

    $("#btn_clear").click(function () {

        queue.clear();

        $("#stack").empty();
        $("#popped").empty();
    });

    function renderQueue() {

        $("#stack").empty();

        queue.items.forEach((item, index) => {

            let label = item;

            if (index === 0 && index === queue.items.length - 1) {
                label = "[FRONT/REAR] " + item;
            }
            else if (index === 0) {
                label = "[FRONT] " + item;
            }
            else if (index === queue.items.length - 1) {
                label = item + " [REAR]";
            }

            $("#stack").append(
                `<div id="q${item}" class="row bg-primary push text-center">${label}</div>`
            );
        });
    }
});