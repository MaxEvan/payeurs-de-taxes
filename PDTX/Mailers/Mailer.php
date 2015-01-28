<?php 
namespace PDTX\Mailers;

use \Mail;

abstract Class Mailer {

    public function sendTo($user, $subject, $view, $data = []) 
    {
        Mail::queue($view, $data, function($message) use($user, $subject)
        {
            $message->to($user)
                    ->subject($subject);
        });
    }
}