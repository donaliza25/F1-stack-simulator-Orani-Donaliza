class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(element) {
        this.items[this.count] = element;
        let push_res = `${element}`;
        this.count += 1;
        let count = this.count - 1;
        return [push_res, count];
    }

    pop() {
        if (this.count == 0) return undefined;

        let deleteItem = this.items[this.count - 1];
        this.count -= 1;

        return deleteItem;
    }

    peek() {
        return this.items[this.count - 1];
    }

    isEmpty() {
        return this.count == 0;
    }

    size() {
        return this.count;
    }

    clear() {
        this.items = [];
        this.count = 0;
        return this.items;
    }
}

const stack = new Stack();

$(document).ready(function () {

    $("#btn_push").on("click", function () {
        let value = $("#st_data").val();

        if (value === "") {
            alert("Please enter a value.");
            return;
        }

        let push_data = stack.push(value);

        $("#stack").prepend(
            `<div id="st${push_data[0]}" class="row bg-primary push">${push_data[0]}</div>`
        );

        $("#st_data").val("");
    });

    $("#btn_pop").on("click", function () {

        let pop_data = stack.pop();

        if (pop_data === undefined) {
            alert("Stack is empty!");
            return;
        }

        $("#popped").prepend(
            `<div class="row pop text-bg-danger border border-light">${pop_data}</div>`
        );

        $(`#st${pop_data}`).remove();
    });

    $("#btn_peek").on("click", function () {

        let peek_data = stack.peek();

        if (peek_data === undefined) {
            alert("Stack is empty!");
            return;
        }

        $(`#st${peek_data}`)
            .removeClass("bg-primary")
            .addClass("peek");

        setTimeout(function () {
            $(`#st${peek_data}`)
                .removeClass("peek")
                .addClass("bg-primary");
        }, 500);
    });

    $("#btn_clear").on("click", function () {
        stack.clear();
        $("#stack").empty();
        $("#popped").empty();
    });

});