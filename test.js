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
