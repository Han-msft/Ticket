var id1='178523', id2='178524', captcha='20190629';

if ($("i.fa-plus").length == 0) {
  location.reload()
}

$("#person_agree_terms").click()
$("#ticket_"+id1).find("i.fa-plus").click();
$("#ticket_"+id2).find("i.fa-plus").click();
$("input[name=captcha_answer]")[0].scrollIntoView();
$("input[name=captcha_answer]").val(captcha);
$("input[name=captcha_answer]").change();
$('button.btn.btn-primary').click();
