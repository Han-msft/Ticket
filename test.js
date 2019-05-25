var id1='181357', captcha='20190629';

if ($("i.fa-plus").length == 0) {
  location.reload()
}

$("#ticket_"+id1).find("i.fa-plus").click();
$("input[name=captcha_answer]")[0].scrollIntoView();
$("input[name=captcha_answer]").val(captcha);
$("input[name=captcha_answer]").change();
$("#person_agree_terms").click();
$('button.btn.btn-primary').click();
