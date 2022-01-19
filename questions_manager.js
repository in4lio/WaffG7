let question_index = 0;
let variants = 0;
let answer_storage = window.localStorage;

function answers_list(answers) {
    answers = answers.replace("a)", "").split(/\s[b-z]\)/);
    if (answers.length === 1) {
        return answers;
    }
    let result = "<ol>";
    answers.forEach(x => result += `<li>${x}</li>`)
    return  result + "</ol>"
}

function answers_form(answers) {
    answers = answers.replace("a)", "").split(/\s[b-z]\)/);
    variants = answers.length;
    let result = "<form>";
    if (variants > 1) {
        answers.forEach((a, i) => {
            result += `<input type='checkbox' id='answer${i}' name='answer${i}'>`
            result += `<label for='answer${i}' id='label${i}'>${a}</label><br>`
        })
    } else {
        result += `<label id='label0'>${answers}</label><br>`
    }
    result += "</form>";

    return result;
}

function nav_form(qinx, qid) {
    let result = "<form>";
    result += `<input type='number' class='w_button' value='${qinx + 1}' min="1" max="700" id='question-index' onchange='question_index = parseInt(this.value) - 1; show_question()'>`
    result += `<label class='w_label'>${qid}</label>`
    result += "<input type='button' class='w_button' value='&larr;' id='prev-button' onclick='prev()'>"
    result += "<input type='button' class='w_button' value='&rarr;' id='next-button' onclick='next()'>"
    result += "<select class='w_button' id='chapter-list' onchange='question_index = parseInt(this.value); show_question()'>"
    result += `<option value="0">Chapter</option>`
    for (let k in kChapters) {
        result += `<option value="${kChapters[k]}">${k}</option>`
    }
    result += "</select>"
    result += "<input type='button' class='w_button' value='Random' id='random-button' onclick='random_question()'>"
    result += "<input type='button' class='w_button' value='Wrong' id='wrong-button' onclick='wrong_question()'>"
    result += "<input type='button' class='w_button' value='Show' id='show-button' onclick='show()'>"
    result += "<input type='button' class='w_button' value='Check' id='check-button' onclick='check()'>"
    result += "</form>";

    return result;
}

function show_question() {
    if (question_index > kQuestions.length - 1) {
        question_index = kQuestions.length - 1;
    }
    const question = kQuestions[question_index];
    $("#id_id").html(nav_form(question_index, question["id"]));
    $("#id_de_question").text(question["de_q"]);
    $("#id_de_answer").html(answers_form(question["de_a"]));

    $("#id_en_question").text(question["en_q"]);
    $("#id_en_answer").html(answers_list(question["en_a"]));
    $("#id_ru_question").text(question["ru_q"]);
    $("#id_ru_answer").html(answers_list(question["ru_a"]));
}

$( document ).ready(function() {
    show_question();
});

function show() {
    let correct = kQuestions[question_index]["c"];
    [...correct].forEach(c => {
        const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
        $("#label" + index).css('color', 'lightgreen');
        $("#answer" + index).prop('checked', true);
    })
    if (correct === 'x') {
        $("#label0").css('color', 'lightgreen');
    }
}

function check() {
    let wrong = false;
    let correct = kQuestions[question_index]["c"];
    let corrects = [];
    [...correct].forEach(c => {
        const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
        corrects.push(index);
        if ($("#answer" + index).prop('checked')) {
            $("#label" + index).css('color', 'lightgreen');
        } else {
            $("#label" + index).css('color', 'red');
            wrong = true;
        }
        $("#answer" + index).prop('checked', true);
    })
    for (let i = 0; i < variants; ++i) {
        if ($("#answer" + i).prop('checked') && !corrects.includes(i)) {
            $("#answer" + i).prop('checked', false);
            $("#label" + i).css('color', 'red');
            wrong = true;
        }
    }
    if (correct === 'x') {
        $("#label0").css('color', 'lightgreen');
        wrong = false;
    }
    localStorage.setItem(question_index, wrong ? '-' : '+');
}

function prev() {
    if (--question_index < 0) {
        question_index = kQuestions.length - 1;
    }
    show_question();
}

function next() {
    if (++question_index >= kQuestions.length) {
        question_index = 0;
    }
    show_question();
}

function random_question() {
    question_index = Math.floor(Math.random() * kQuestions.length);
    show_question();
}

function wrong_question() {
    for (let i = 0; i < answer_storage.length; ++i) {
        if (answer_storage.getItem(answer_storage.key(i)) === '-') {
            question_index = answer_storage.key(i);
            show_question();
            return;
        }
    }
    alert("No wrong answers found");
}