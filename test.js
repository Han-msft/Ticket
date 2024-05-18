var captcha='C3c';

if ($("i.fa-plus").length == 0) {
  location.reload()
}

$("i.fa-plus")[0].click()
$("input[name=captcha_answer]")[0].scrollIntoView();
$("input[name=captcha_answer]").val(captcha);
$("input[name=captcha_answer]").change();
$("#person_agree_terms").click();
$('button.btn.btn-primary').click();


var t = $('.display-table#ticket_723521')
var plus = t.find('i.fa-plus')

if (plus.length == 0) {
    location.reload()
}

$("#person_agree_terms").click();
plus[0].scrollIntoView();
plus[0].click();
plus[0].click();
plus[0].click();
plus[0].click();

$('button.btn.btn-primary').click();
