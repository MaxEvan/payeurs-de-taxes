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
}