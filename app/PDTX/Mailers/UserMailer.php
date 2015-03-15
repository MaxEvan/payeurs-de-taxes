<?php 
namespace PDTX\Mailers;

class UserMailer extends Mailer {
    public function sendConfirmation($user, $code)
    {   
        $view    = 'emails.confirmation.confirmation';
        $data    = ['code' => $code];
        $subject = "PayeursDeTaxes.ca Confirmation";

        return $this->sendTo($user, $subject, $view, $data);
    }

    public function sendEmailToAdmin($user, $body, $title=null)
    {
        !$title ? $subject = "Message de " . $user : $subject = "Opinion de " . $user;
        $view = 'emails.fromUser.message';
        $data = ['body' => $body, 'title' => $title];

        return $this->sendTo('payeursdetaxes@gmail.com', $subject, $view, $data);
    }
}