var id1='178523', id2='178524', captcha='20190629';

if ($("i.fa-plus").length == 0) {
  location.reload()
}

$("#person_agree_terms").click()
$("#ticket_"+id1).find("i.fa-plus").click();
$("#ticket_"+id2).find("i.fa-plus").click();
$("input[name=captcha_answer]")[0].scrollIntoView();
$("input[name=captcha_answer]")[0].value = captcha;
var evt = document.createEvent("HTMLEvents");
evt.initEvent("change", true, false);
$("input[name=captcha_answer]")[0].dispatchEvent(evt);
$('button.btn.btn-primary')[0].click();



