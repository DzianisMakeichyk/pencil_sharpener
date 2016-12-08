<?php 

session_start();

//error_reporting(E_ALL);
//ini_set('display_errors', 'On');

require_once 'validator.php';

$validator = new Validator();

$validator->set_error_delimiters('<div class="error">', '</div>');
/* Задаем правила валидации */
$rules = array(
	array(
		'field' => 'text', 'text2',
		'label' => 'Имя',
		'rules' => array(
                        'trim' => '', /*Обрезаем пробелы по бокам*/
                        'strip_tags' => '', /* Удаляем HTML и PHP теги */
                        'required' => 'Поле %s обязательно для заполнения'
					)
	),
	array(
		'field' => 'email',
		'label' => 'e-mail адрес',
		'rules' => array(
                        'trim' => '',
                        'required' => 'Поле %s обязательно для заполнения',
                        'valid_email' => 'Поле %s должно содержать правильный email-адрес'
					)
	),
	array(
		'field' => 'tel',
		'label' => 'Телефон',
		'rules' => array(
                        'trim' => '',
                    
					)
	),
    array(
		'field' => 'box2',
		'label' => 'Сообщение',
		'rules' => array(
                        'trim' => '', /* Обрезаем пробелы по бокам */
                        'strip_tags' => '', /* Удаляем HTML и PHP теги */
                        'required' => 'Поле %s обязательно для заполнения'
					)
	),
    
 
);

/* Устанавливаем правила валидации */
$validator->set_rules($rules);
$message = '';

/* Запускаем валидацию POST данных */
if($validator->run()){
	
	/* Здесь впишите свой e-mail адрес
	на негу будут приходить уведомления с формы */
	$to = 'mr.mouso@yandex.com';
 
	$from = "=?UTF-8?b?" . base64_encode($validator->postdata('text','text2')) . "?=";
	$subject = "=?UTF-8?b?" . base64_encode( $validator->postdata('box2') ) . "?=";
	
	$mail_body = "Поступил новый ответ от формы обратной связи.\r\nАвтор оставил такие данные:\r\n";
	
	/* Формируем текст сообщения */
	foreach($rules as $rule){
		if($rule['field'] == 'keystring') continue;
		$mail_body .= $rule['label'].': '.$validator->postdata($rule['field'])."\r\n";
	}
	
	$header = "MIME-Version: 1.0\n";
	$header .= "Content-Type: text/plain; charset=UTF-8\n";
	$header .= "From: ". $from . " <" . $validator->postdata('email'). ">";

	/* Отправка сообщения */
	if(mail($to, $subject, $mail_body, $header)){
		
		header('Refresh: 5; http://pencil.stronazen.pl');
   require_once 'http://pencil.stronazen.pl/end.html';;
  }
else {
	header('Refresh: 5; http://pencil.stronazen.pl');
	require_once 'http://pencil.stronazen.pl/again.html';}
}
else{
	
    /* Получаем сообщения об ошибках в виде строки */
	$message = $validator->get_string_errors();
	
    /* Получаем сообщения об ошибках в виде массива */
	$errors = $validator->get_array_errors();

}

?>