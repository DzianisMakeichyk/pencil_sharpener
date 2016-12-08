<?php
require 'phpmailerautoload.php';
function ValidateEmail($email)
{
   $pattern = '/^([0-9a-z]([-.\w]*[0-9a-z])*@(([0-9a-z])+([-\w]*[0-9a-z])*\.)+[a-z]{2,6})$/i';
   return preg_match($pattern, $email);
}
function ReplaceVariables($code)
{
   foreach ($_POST as $key => $value)
   {
      if (is_array($value))
      {
         $value = implode(",", $value);
      }
      $name = "$" . $key;
      $code = str_replace($name, $value, $code);
   }
   $code = str_replace('$ipaddress', $_SERVER['REMOTE_ADDR'], $code);
   return $code;
}
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['formid']) && $_POST['formid'] == 'maincontactformfield')
{
   $mailto = 'mr.mouso@yandex.com'; 
   $mailfrom = $_POST['Email'];
   $subject = 'Nowe zgloszenie o szkoleniu: ' . $_POST['Name'];
   $message = 'Dzień dobry. Jestem zainteresowany Waszą ofertą skoleniową. Oto moje dane kontoktowe: <br/> Imię Nazwisko: ' . $_POST['Name'] . "<br/>" . 'Telefon: ' . $_POST['Contact'] . "<br/>" . 'Email: ' . $_POST['Email'];
   $success_url = 'http://it-ip.pl/end.html';
   $error_url = '#';
   $error = '';
   $eol = "\n";
   $max_filesize = isset($_POST['filesize']) ? $_POST['filesize'] * 1024 : 1024000;
   $mail = new PHPMailer();
   $mail->Subject = stripslashes($subject);
   $mail->From = $mailfrom;
   $mail->FromName = $mailfrom;
   $mailto_array = explode(",", $mailto);
   for ($i = 0; $i < count($mailto_array); $i++)
   {
      if(trim($mailto_array[$i]) != "")
      {
         $mail->AddAddress($mailto_array[$i], "");
      }
   }
   $mail->AddReplyTo($mailfrom);
   if (!ValidateEmail($mailfrom))
   {
      $error .= "The specified email address is invalid!\n<br>";
   }

   if (!empty($error))
   {
      $errorcode = file_get_contents($error_url);
      $replace = "##error##";
      $errorcode = str_replace($replace, $error, $errorcode);
      echo $errorcode;
      exit;
   }

   $mail->CharSet = 'ISO-8859-1';
   if (!empty($_FILES))
   {
       foreach ($_FILES as $key => $value)
       {
          if ($_FILES[$key]['error'] == 0 && $_FILES[$key]['size'] <= $max_filesize)
          {
             $mail->AddAttachment($_FILES[$key]['tmp_name'], $_FILES[$key]['name']);
          }
      }
   }
   $message = ReplaceVariables($message);
   $message = stripslashes($message);
   $mail->MsgHTML($message);
   $mail->IsHTML(true);
   if (!$mail->Send())
   {
      die('PHPMailer error: ' . $mail->ErrorInfo);
   }
   header('Location: '.$success_url);
   exit;
}
?>